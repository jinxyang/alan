import React from 'react'
import styled from 'styled-components'

// 定义接口
export interface ProgressProps {
  step?: number
  total?: number
  showInfo?: boolean
}

// 容错处理
export const validProgress = (progress: number | undefined): number => {
  if (progress === null || progress === undefined || progress <= 0) {
    return 0
  } else if (progress > 100) {
    return 100
  }
  return progress
}

/**
 * @desc 处理成整数
 */
export const percentDeal = (
  step: number | undefined,
  total: number | undefined,
): number => {
  if (!step || !total) {
    // eslint 严格式布尔转换 提示
    return 0
  }
  return (total / step) * 100
}

/**
 * @desc 百分比显示
 */
export const parseIntPercent = (text: number): string => {
  return `${Math.ceil(text)}%`
}

const getWith = (props: ProgressProps): string | undefined => {
  if (props.step && props.total) {
    return parseIntPercent((100 * props.step) / props.total)
  }
  return '0%'
}

// 样式化
const ProgressWrap = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  height: 8px;
  border-radius: 4px;
  background-color: coral;
`
const ProgressInner = styled.div`
  display: flex;
  background-color: pink;
  width: ${(props: ProgressProps) => getWith(props)};
  height: 100%;
  border-radius: 4px;
  transition: width 0.5s ease-in-out;
`

// 组件
const Progress: React.FC<ProgressProps> = ({
  step = 0,
  total = 100,
  showInfo = false,
}: ProgressProps): React.ReactElement => {
  return (
    <React.Fragment>
      <ProgressWrap>
        <ProgressInner step={step} total={total} showInfo={showInfo} />
      </ProgressWrap>
    </React.Fragment>
  )
}

// 导出
export default Progress
