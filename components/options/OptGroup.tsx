import React from 'react'
import styled from 'styled-components'

import Option from './Option'
import { SingleOption } from './OptionGroup'

interface OptGroupProps {
  options?: SingleOption[]
  label: string
}

const Title = styled.div`
  background-color: var(--color-primary);
  cursor: default;
`

const OptGroup: React.FC<OptGroupProps> = ({
  options,
  label,
}: OptGroupProps): React.ReactElement => {
  return (
    <>
      <Title>{label}</Title>
      {options?.map((opt, index) => (
        <Option key={index} {...opt} style={{ paddingLeft: '10px' }}>
          {opt.label}
        </Option>
      ))}
    </>
  )
}

export default OptGroup
