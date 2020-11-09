import React from 'react'
import styled from 'styled-components'

export type ButtonTypes = ['primary', 'success']
export type ButtonType = ButtonTypes[number]
export interface ButtonProps {
  type?: ButtonType
  children?: React.ReactNode
}

const InnerButton = styled.button`
  color: #000;
`

const Button: React.FC = ({ type, children }: ButtonProps) => {
  return (
    <InnerButton>
      {children}-{type}
    </InnerButton>
  )
}
export default Button
