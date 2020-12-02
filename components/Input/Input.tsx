import React, { useState } from 'react'
import styled from 'styled-components'

import { getSize } from '../common'

export type InputType = 'number' | 'text'
export type InputSize = 'small' | 'normal' | 'large'

interface InputProps {
  disabled?: boolean
  type?: InputType
  size?: InputSize
  value?: string
  placeholder?: string
  onChange?: (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => void
}

const InnerInput = ({ size, ...props }: InputProps): React.ReactElement => {
  return <input {...props} />
}
const StyledInput = styled(InnerInput)`
  text-indent: calc(var(--gutter) / 2);
  box-sizing: border-box;
  border: 1px solid var(--color-border-disabled);
  ${(props) => getSize(props.size)}
  padding: 0;
  margin-right: calc(var(--gutter) / 2);

  :hover {
    transition: all 0.3s cubic-bezier(0.65, 0.05, 0.36, 1);
    border-color: var(--color-primary);
    ${(props) => (props.disabled ?? false ? 'cursor: not-allowed;' : '')}
  }

  :focus {
    border: 1px solid var(--color-primary);
    outline: medium;
    box-shadow: var(--shadow-x) var(--shadow-x) calc(var(--shadow-spread) * 3)
      var(--shadow-blur) var(--color-primary-light);
  }

  ::placeholder {
    color: #ccc;
  }

  & + & {
    margin-left: 10px;
  }
`

const Input: React.FC<InputProps> = ({
  disabled = false,
  type = 'text',
  value = '',
  placeholder = 'input something',
  size = 'normal',
  onChange = () => {
    //
  },
}): React.ReactElement => {
  const [curValue, setValue] = useState<string>(value)

  function handleChange(
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ): void {
    setValue(e.target.value)
    onChange(e)
  }
  return (
    <StyledInput
      disabled={disabled}
      size={size}
      type={type}
      value={curValue}
      placeholder={placeholder}
      onChange={handleChange}
    />
  )
}

export default Input
