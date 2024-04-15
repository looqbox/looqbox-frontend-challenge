import React from 'react'

import { BadgePokemonTypeProps } from './defs'

import * as S from './BadgePokemonType.styles'

export function BadgePokemonType({ type }: BadgePokemonTypeProps) {
  return (
    <S.Wrapper $type={type}>
      <S.BadgeText>{type}</S.BadgeText>
    </S.Wrapper>
  )
}
