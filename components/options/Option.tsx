import React from 'react'
import styled from 'styled-components'

export interface OptProps {
  selected?: boolean
  label?: string
  value: string | number
  children?: React.ReactNode
  disabled?: boolean
  className?: string
  style?: React.CSSProperties
  onClick?: ({ ...arg }: any) => void
}

function isDisabledAndSelected(props: OptProps): string[] | undefined {
  if (props.disabled !== undefined) {
    return [
      'cursor: not-allowed;',
      'background-color: transparent;',
      'color: #ddd;',
    ]
  } else if (props.selected ?? false) {
    return ['font-weight: 400;']
  } else {
    // return ['background-color: #fff;']
  }
}
function isSelected(
  selected: boolean | undefined,
): string | string[] | undefined {
  if (selected ?? false) {
    return ['background: var(--color-primary);']
  }
}

function hoverStyled(props: OptProps): string | string[] | undefined {
  if (props.disabled ?? false) return
  if (!(props.selected ?? false)) {
    return ['background-color: #ddd;']
  }
}

const InnerOption = styled.div<OptProps>`
  display: flex;
  box-sizing: border-box;
  width: 100%;
  min-width: 140px;
  cursor: pointer;
  background-color: transparent;

  ${(props) => isDisabledAndSelected(props)}
  ${(props) => isSelected(props.selected)}

  :hover {
    ${(props) => hoverStyled(props)}
  }
`

const Option = ({
  label,
  value,
  selected = false,
  children,
  disabled,
  style,
  className,
  onClick = () => {
    //
  },
}: OptProps): React.ReactElement => {
  function handleClick(): void {
    if (onClick !== null && onClick !== undefined) {
      if (disabled ?? false) return
      onClick(value)
    }
  }

  return (
    <InnerOption
      style={style}
      className={className}
      disabled={disabled}
      label={label}
      value={value}
      selected={selected}
      onClick={handleClick}
    >
      <div>{children || value}</div>
      <div>{selected ? '✅' : null}</div>
    </InnerOption>
  )
}

export default Option
