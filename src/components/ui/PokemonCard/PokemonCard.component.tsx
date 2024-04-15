import React from 'react'
import { useTheme } from 'styled-components'
import { HeartCircle } from '@styled-icons/boxicons-regular'

import { Button } from '../Button/Button.component'

import { PokemonCardProps } from './defs'

import * as S from './PokemonCard.styles'

export function PokemonCard({
  pokemon,
  onPressDetails,
  isOnTheWishlist,
  onAddToWishlist
}: PokemonCardProps) {
  const { colors } = useTheme()

  return (
    <S.Wrapper>
      <S.Header>
        <S.AddToWishlist onClick={onAddToWishlist}>
          <HeartCircle
            fill={
              isOnTheWishlist ? colors.identity.primary : colors.grayscale.light
            }
            size={32}
          />
        </S.AddToWishlist>
        <S.PokemonID>#{pokemon.ID}</S.PokemonID>
      </S.Header>
      <S.Content>
        <S.PokemonImage src={pokemon.image} />
        <S.PokemonName>{pokemon.name}</S.PokemonName>
      </S.Content>
      <Button
        label="View Details"
        variant="secondary"
        onClick={onPressDetails}
        style={{ width: 'fit-content', alignSelf: 'center' }}
      />
    </S.Wrapper>
  )
}
