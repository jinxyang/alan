import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import Option, { OptProps } from '../options/Option'
import { SizeType, heightList } from '../common'
import Tag from '../Tag'

export type modeType = 'default' | 'multiple'

export type valueType = string | number | Array<string | number>

export interface SelectProps {
  size?: SizeType
  width?: number
  mode?: modeType
  allowClear?: boolean
  value?: valueType
  options?: OptProps[]
  placeholder?: string
  children?: React.ReactNode
  onChange?: (value: valueType, option: OptProps | OptProps[]) => void
}

const getSelectSize = (size: SizeType = 'normal'): string => {
  return heightList[size]
}

const getWidth = (width?: number): string | undefined => {
  if (width != null) {
    return width > 0 ? `${width}px;` : '180px;'
  }
}

const OptionWrap = styled.div`
  position: absolute;
  z-index: 999;
  width: 100%;
  height: 180px;
  border: 1px solid red;
  overflow: auto;
`

const SelectWrap = styled.div`
  display: flex;
  width: 180px;
  width: ${(props: SelectProps) => getWidth(props.width)};
  min-height: ${(props) => getSelectSize(props.size)};
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  border: 1px solid #ddd;
  outline: none;
  cursor: pointer;

  :hover {
    border-color: var(--color-primary-hover);
  }

  :focus {
    border-color: var(--color-primary);
  }
`

const SelectedWrap = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
`

const CloseIcon = styled.button`
  background-color: #ddd;
  outline: none;
  width: 20px;
  height: 20px;
  border-radius: 10px;
  border: none;
  cursor: pointer;

  :hover {
    background-color: #ddd;
  }

  :active {
    background-color: var(--color-primary);
  }
`

const Select: React.FC<SelectProps> = ({
  size = 'normal',
  width = 180,
  mode = 'default',
  allowClear = false,
  value,
  options,
  placeholder = 'Please select',
  children,
  onChange,
}: SelectProps): React.ReactElement => {
  const [checkedOptions, SetChecked] = useState<OptProps[]>([])
  const [showOptions, setShowOption] = useState(false)

  useEffect(() => {
    if (mode === 'default') {
      onChange?.(checkedOptions[0].value, checkedOptions[0])
    }
  }, [checkedOptions])

  useEffect(() => {
    // 默认值
    if (value !== undefined) {
      if (options !== undefined) {
        const defaultOptions: OptProps[] = []
        options.forEach((item) => {
          if (value instanceof Array) {
            // 默认值是多个 前提是多选
            value.forEach((val) => {
              if (val === item.value) {
                defaultOptions.push(item)
              }
            })
          } else {
            if (item.value === value) {
              defaultOptions.push(item)
            }
          }
        })
        SetChecked([...checkedOptions, ...defaultOptions])
      } else {
        // 从children
      }
    }
  }, [])

  function handleFocus(): void {
    setShowOption(!showOptions)
  }
  function handleBlur(): void {
    if (showOptions) {
      if (mode === 'default') {
        setShowOption(false)
      }
    }
  }
  function clearOptions(e: React.MouseEvent): void {
    e.stopPropagation()
    SetChecked([])
    setShowOption(false)
  }

  function isSelected(option: OptProps): boolean {
    if (checkedOptions.some((i) => i.value === option.value)) {
      return true
    }
    return false
  }

  function deleteItem(value: string | number): void {
    let isExist = false
    const newList = [...checkedOptions]
    newList.forEach((item, index) => {
      if (item.value === value) {
        isExist = true
        newList.splice(index, 1)
      }
    })
    if (isExist) {
      SetChecked(newList)
    }
  }

  function handleClick(data: string | number, opt: OptProps): void {
    console.log('data', data)
    const { value, label, children = null } = opt
    console.log({ value, label, children })

    if (mode === 'multiple') {
      if (checkedOptions.some((i) => i.value === data)) {
        deleteItem(data)
      } else {
        SetChecked([...checkedOptions, opt])
      }
    } else {
      if (checkedOptions.some((option) => option.value === data)) return
      SetChecked([opt])
    }
  }
  function stopCloseWrap(): void {
    if (mode === 'default') {
      setShowOption(false)
    } else {
      setShowOption(true)
    }
  }

  return (
    <div>
      <SelectWrap
        size={size}
        width={width}
        tabIndex={0}
        onClick={handleFocus}
        onBlur={handleBlur}
      >
        <SelectedWrap>
          {checkedOptions.length ? (
            checkedOptions.map((opt, index) => (
              <Tag key={index} onClick={() => deleteItem(opt.value)}>
                {opt.label}
              </Tag>
            ))
          ) : (
            <span style={{ color: '#ccc' }}>{placeholder}</span>
          )}
        </SelectedWrap>
        <div>
          {allowClear && checkedOptions.length > 0 ? (
            <CloseIcon onClick={clearOptions} />
          ) : null}
        </div>
      </SelectWrap>
      {showOptions ? (
        <OptionWrap onClick={stopCloseWrap}>
          {options !== undefined
            ? options.map((opt, index) => (
                <Option
                  key={index}
                  onClick={(data) => handleClick(data, opt)}
                  {...opt}
                  selected={isSelected(opt)}
                >
                  {opt.label}
                </Option>
              ))
            : children !== undefined
            ? React.Children.map(children, (child) => (
                <Option
                  onClick={(data) => handleClick(data, child.props)}
                  {...child.props}
                  selected={isSelected(child.props)}
                />
              ))
            : null}
        </OptionWrap>
      ) : null}
    </div>
  )
}

export default Select
