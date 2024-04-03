import { generateMedia } from 'styled-media-query'
import theme from './index'

const mediaQueries = generateMedia({
  xs: theme.breakpoints.values.xs,
  sm: theme.breakpoints.values.sm,
  md: theme.breakpoints.values.md,
  lg: theme.breakpoints.values.lg,
  xl: theme.breakpoints.values.xl,
})

export default mediaQueries
