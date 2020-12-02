import React from 'react'
import styled from 'styled-components'

import { SizeType } from '../common'

export interface tagProps {
  size?: SizeType
  children?: React.ReactNode | string | number
  onClick?: (params: React.ReactNode | string | number) => void
}

const StyledTag = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ccc;
  background-color: #ddd;
  padding: calc(var(--gutter) / 4) calc(var(--gutter) / 2);
  border: 1px solid #ccc;
`

const CloseIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`

const Tag: React.FC<tagProps> = ({
  size = 'normal',
  children,
  onClick,
}: tagProps): React.ReactElement => {
  function handleClick(e: React.MouseEvent): void {
    e.stopPropagation()
    onClick?.(children)
  }
  return (
    <StyledTag size={size}>
      <div>{children}</div>
      <CloseIcon onClick={handleClick}>❎</CloseIcon>
    </StyledTag>
  )
}

export default Tag
