import React from 'react'

import searchIcon from 'assets/svg/search.svg'
import closeIcon from 'assets/svg/close.svg'

import { SearchInputProps } from './defs'

import * as S from './SearchInput.styles'

export function SearchInput({
  onClear,
  value,
  ...restInputProps
}: SearchInputProps) {
  return (
    <S.Wrapper>
      <S.ActionButton>
        <img src={searchIcon} alt="Search icon" />
      </S.ActionButton>
      <S.InputElement
        placeholder="Search for a Pokémon"
        value={value}
        {...restInputProps}
      />
      {!!value && (
        <S.ActionButton onClick={onClear}>
          <img src={closeIcon} alt="Close Icon" />
        </S.ActionButton>
      )}
    </S.Wrapper>
  )
}
