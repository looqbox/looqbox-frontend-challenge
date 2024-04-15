import React from 'react'

import { useTheme } from 'styled-components'

import { LoadingProps } from './defs'

import * as S from './Loading.styles'

export function Loading({ color }: LoadingProps) {
  const { colors } = useTheme()

  const loadingColor = color || colors.identity.primary

  return (
    <S.LoadingContainer $loadingColor={loadingColor}>
      <div className="loader"></div>
    </S.LoadingContainer>
  )
}
