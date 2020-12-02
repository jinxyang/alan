import * as React from 'react'
import styled, { keyframes } from 'styled-components'

interface propsConfig {
  size?: string
  type?: string
  fontSize?: string
  color?: string
}

const rotate360 = keyframes`
  from {
    transform: translate(-50%, -50%) rotate(0);
  }
  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
`
const getSize = (size = 'normal'): string => {
  const list = {
    small: 'var(--font-size)',
    normal: 'var(--font-size)',
    large: '0.16rem;',
  }
  return list[size as keyof typeof list]
}

const StyledLoading = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: ${(props: propsConfig) => getSize(props.size)};
  height: ${(props) => getSize(props.size)};
  transform: translate(-50%, -50%);
  animation: ${rotate360} 2s linear infinite;
  border: calc(var(--font-size) * 1 / 7) solid var(--color-white);
  border-radius: 50%;
  border-color: #fff;
  border-left-color: transparent;
`

export default function Loading({
  size = 'normal',
  type = 'primary',
  fontSize = '',
}: propsConfig): React.ReactElement {
  return <StyledLoading size={size} type={type} fontSize={fontSize} />
}
