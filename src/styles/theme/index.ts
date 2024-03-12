import { type ThemeConfig } from 'antd'

export interface Breakpoints {
  xs: string
  sm: string
  md: string
  lg: string
  xl: string
}

export const breakpoints: Breakpoints = {
  xs: '@media (max-width: 320px)',
  sm: '@media (max-width: 560px)',
  md: '@media (max-width: 768px)',
  lg: '@media (max-width: 1024px)',
  xl: '@media (max-width: 1200px)',
}

export const theme: ThemeConfig = {
  cssVar: true,
  token: {
    fontFamily: "'Inter', sans-serif",
    colorText: 'inherit',
  },
  components: {
    Typography: {
      titleMarginTop: 0,
      titleMarginBottom: 0,
    },
    Button: {
      fontWeight: 600,
    },
  },
}
