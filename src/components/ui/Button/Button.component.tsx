import React from 'react'
import { ButtonProps } from './defs'

import * as S from './Button.styles'

export function Button({
  label,
  variant = 'primary',
  ...restButtonProps
}: ButtonProps) {
  return (
    <S.Wrapper $buttonVariantStyle={variant} {...restButtonProps}>
      <S.Label>{label}</S.Label>
    </S.Wrapper>
  )
}
