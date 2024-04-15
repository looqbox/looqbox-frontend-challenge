import React from 'react'

import emptyPokeball from 'assets/images/empty_pokeball.png'

import * as S from './Placeholder.styles'

export function Placeholder() {
  return (
    <S.Wrapper>
      <S.Illustration src={emptyPokeball} alt="Empty pokeball" />
      <S.Description>No pokemons found</S.Description>
    </S.Wrapper>
  )
}
