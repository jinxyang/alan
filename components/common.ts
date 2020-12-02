// 表单组件基本尺寸
export type SizeType = 'small' | 'normal' | 'large'

export type TypeTypes = 'default' | 'primary' | 'success' | 'warn'

export const heightList = {
  small: 'calc(0.12rem * 1.5 + var(--gutter) * 0.5);',
  normal: 'calc(var(--font-size) * 1.5 + var(--gutter) * 0.75);',
  large: 'calc(0.16rem * 1.5 + var(--gutter));',
}

export const getSize = (size = 'normal'): string[] => {
  const sizeList = {
    small: [
      'font-size: var(--font-size);',
      'padding: calc(var(--gutter) * 0.25) calc(var(--gutter) * 0.5);',
      'height: calc(0.12rem * 1.5 + var(--gutter) * 0.5);',
      'border-radius: calc(var(--gutter) * 0.2);',
    ],
    normal: [
      'font-size: var(--font-size);',
      'padding: calc(var(--gutter) * 0.375) calc(var(--gutter) * 0.75);',
      'height: calc(var(--font-size) * 1.5 + var(--gutter) * 0.75);',
      'border-radius: calc(var(--gutter) * 0.25);',
    ],
    large: [
      'font-size: 0.16rem;',
      'padding: calc(var(--gutter) * 0.5) calc(var(--gutter));',
      'height: calc(0.16rem * 1.5 + var(--gutter));',
      'border-radius: calc(var(--gutter) * 0.3);',
    ],
  }
  return sizeList[size as keyof typeof sizeList]
}
