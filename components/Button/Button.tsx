import React from 'react'
import styled from 'styled-components'

import { getType, getGhostType } from './config'
import Loading from '../Loading'
import { getSize } from '../common'

export type ButtonTypes = 'default' | 'primary' | 'success' | 'warn'
export type ButtonSize = 'small' | 'normal' | 'large'

interface ButtonProps {
  type?: ButtonTypes
  size?: ButtonSize
  ghost?: boolean
  loading?: boolean
  disabled?: boolean
  onClick?: React.MouseEventHandler<HTMLElement>
  children?: React.ReactNode
  className?: string
}

const isGhost = (props: ButtonProps): string[] => {
  if (props.ghost ?? false) {
    return getGhostType(props.type).base
  } else {
    return getType(props.type).base
  }
}

const getDisabled = (): string[] => {
  return [
    'cursor: not-allowed;',
    'color: #bbb;',
    'border-color: #ccc;',
    'background: #ddd;',
  ]
}

const getLoading = (): string[] => {
  return ['cursor: progress;', 'color: transparent;']
}

const handleLoadingAndDisable = (
  props: ButtonProps,
  type: string,
): string[] => {
  if (props.disabled ?? false) {
    return getDisabled()
  } else {
    if (props.loading ?? false) {
      return getLoading()
    } else {
      let types
      if (props.ghost ?? false) {
        types = getGhostType(props.type)
      } else {
        types = getType(props.type)
      }
      return types[type as keyof typeof types]
    }
  }
}

const baseButton = ({
  size,
  type,
  ghost,
  loading,
  ...props
}: {
  size?: string
  type?: string
  ghost?: boolean
  loading?: boolean
}): React.ReactElement => {
  return <button {...props}></button>
}

const TypedButton = styled(baseButton)`
  display: flex;
  position: relative;
  min-width: 46px;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  height: calc(var(--font-size) * 1.5 + var(--gutter) * 0.75);
  padding: calc(var(--gutter) * 0.375) calc(var(--gutter) * 0.75);
  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out;
  border: 1px solid transparent;
  border-radius: calc(var(--gutter) * 0.25);
  outline: none;
  background-color: transparent;
  font-size: var(--font-size);
  cursor: pointer;

  ${(props: ButtonProps) => getSize(props.size)}
  ${(props) => isGhost(props)}
  ${(props) => handleLoadingAndDisable(props, 'base')}
  
  :hover {
    ${(props) => handleLoadingAndDisable(props, 'hover')}
  }

  :focus {
    ${(props) => handleLoadingAndDisable(props, 'active')}
  }

  & + & {
    margin-left: calc(var(--gutter) / 2);
  }
`

const Button = ({
  type = 'default',
  size = 'normal',
  loading = false,
  disabled = false,
  ghost = false,
  onClick = () => {
    //
  },
  children = '',
  className = '',
}: ButtonProps): React.ReactElement => {
  function handleClick(
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>,
  ): void {
    if (!loading && !disabled) {
      if (onClick !== null && onClick !== undefined) {
        onClick(e)
      }
    }
  }

  return (
    <TypedButton
      type={type}
      size={size}
      ghost={ghost}
      loading={loading}
      disabled={disabled}
      onClick={handleClick}
      className={className}
    >
      {children}
      {loading ? disabled ? '' : <Loading size={size} type={type} /> : ''}
    </TypedButton>
  )
}

export default Button
