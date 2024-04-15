import React, { ChangeEvent } from 'react'

import { RadioInput } from 'components/ui/RadioInput/RadioInput.component'
import { SearchInput } from 'components/ui/SearchInput/SearchInput.component'
import { UserDropdown } from 'components/ui/UserDropDown/UserDropDown.component'

import { ReactComponent as PokedexLogo } from 'assets/svg/pokedex_logo.svg'

import { BaseTemplateProps } from './defs'
import { RadioValue } from 'components/ui/RadioInput/defs'

import * as S from './Base.styles'

export function BaseTemplate({
  children,
  username,
  searchValue,
  screenName,
  onClearSearch,
  onChangeSearch,
  onCheckSorting,
  selectedSortingValue
}: BaseTemplateProps) {
  function handleChangeSearch({
    target: { value }
  }: ChangeEvent<HTMLInputElement>) {
    onChangeSearch(value)
  }

  function handleClearSearch() {
    onClearSearch()
  }

  function handleCheckSorting(value: RadioValue) {
    onCheckSorting(value)
  }

  return (
    <S.Wrapper>
      <S.Header>
        <S.Row
          style={{ justifyContent: 'space-between', marginBottom: '1.6rem' }}
        >
          {screenName === 'HOME' ? (
            <PokedexLogo />
          ) : (
            <S.ScreenTitle>{screenName.replace('_', ' ')}</S.ScreenTitle>
          )}

          <UserDropdown screenName={screenName} username={username} />
        </S.Row>
        <S.HeaderRow>
          <SearchInput
            onClear={handleClearSearch}
            onChange={handleChangeSearch}
            value={searchValue}
          />
        </S.HeaderRow>
        <S.Row>
          <S.SortingText>Sort by: </S.SortingText>
          <S.SortingWrapper>
            <RadioInput
              checked={selectedSortingValue === 'number'}
              onCheck={(value) => handleCheckSorting(value)}
              name="number"
              value="number"
              label="Number"
              id="number"
            />
            <RadioInput
              checked={selectedSortingValue === 'name'}
              onCheck={(value) => handleCheckSorting(value)}
              value="name"
              name="name"
              label="Name"
              id="name"
            />
          </S.SortingWrapper>
        </S.Row>
      </S.Header>
      {children}
    </S.Wrapper>
  )
}
