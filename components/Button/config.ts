const config = {
  default: {
    base: [
      'color: var(--color-black);',
      'background-color: var(--color-white);',
      'border-color: var(--color-black);',
    ],
    hover: [
      'color: var(--color-primary-hover);',
      'border-color:var(--color-primary-hover);',
    ],
    active: [
      'color: var(--color-primary-active);',
      'border-color:var(--color-primary-active);',
      'box-shadow: 0 0 0 calc(var(--font-size) * 0.05) #38b9ff22;',
    ],
  },
  primary: {
    base: [
      'color: var(--color-white);',
      'background-color: var(--color-primary);',
    ],
    hover: ['background-color: var(--color-primary-hover);'],
    active: [
      'background-color: var(--color-primary-active);',
      'box-shadow: 0 0 0 calc(var(--font-size) * 0.25) #38b9ff66;',
    ],
    focus: [
      'background-color: var(--color-primary-focus);',
      'box-shadow: 0 0 0 calc(var(--font-size) * 0.25) rgba(49, 132, 253, 0.5);',
    ],
  },
  success: {
    base: [
      'color: var(--color-white);',
      'background-color: var(--color-success);',
    ],
    hover: ['background-color: var(--color-success-hover);'],
    active: [
      'background-color: var(--color-success-active);',
      'box-shadow: 0 0 0 calc(var(--font-size) * 0.25) #53c41a66;',
    ],
  },
  warn: {
    base: [
      'color: var(--color-white);',
      'background-color: var(--color-warn);',
    ],
    hover: ['background-color: var(--color-warn-hover);'],
    active: [
      'background-color: var(--color-warn-active);',
      'box-shadow: 0 0 0 calc(var(--font-size) * 0.25) #f5242e66;',
    ],
  },
}

const ghostConfig = {
  default: {
    base: ['color: var(--color-white);', 'border-color: var(--color-white);'],
    hover: [
      'color: var(--color-primary-hover);',
      'border-color:var(--color-primary-hover);',
    ],
    active: [
      'color: var(--color-primary-active);',
      'box-shadow: 0 0 0 calc(var(--font-size) * 0.25) #38b9ff22;',
    ],
  },
  primary: {
    base: [
      'color: var(--color-primary);',
      'border-color: var(--color-primary);',
    ],
    hover: [
      'color: var(--color-primary-hover);',
      'border-color:var(--color-primary-hover);',
    ],
    active: [
      'color: var(--color-primary-active);',
      'box-shadow: 0 0 0 calc(var(--font-size) * 0.25) #38b9ff66;',
    ],
  },
  success: {
    base: [
      'color: var(--color-success);',
      'border-color: var(--color-success);',
    ],
    hover: [
      'color: var(--color-success-hover);',
      'border-color:var(--color-success-hover);',
    ],
    active: [
      'color: var(--color-success-active);',
      'box-shadow: 0 0 0 calc(var(--font-size) * 0.25) #53c41a66;',
    ],
  },
  warn: {
    base: ['color: var(--color-warn);', 'border-color: var(--color-warn);'],
    hover: [
      'color: var(--color-warn-hover);',
      'border-color:var(--color-warn-hover);',
    ],
    active: [
      'color: var(--color-warn-active);',
      'box-shadow: 0 0 0 calc(var(--font-size) * 0.25) #f5242e66;',
    ],
  },
}
export const getType = (
  type = 'primary',
): { base: string[]; hover: string[]; active: string[] } => {
  return config[type as keyof typeof config]
}

export const getGhostType = (
  type = 'primary',
): { base: string[]; hover: string[]; active: string[] } => {
  return ghostConfig[type as keyof typeof ghostConfig]
}

// export default getType
