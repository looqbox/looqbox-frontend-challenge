import React, { useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { useTheme } from 'styled-components'
import { useLocation } from 'react-router-dom'
import { HeartCircle } from '@styled-icons/boxicons-regular'

import { PokemonStats } from 'components/ui/PokemonStats/PokemonStats.component'
import { BadgePokemonType } from 'components/ui/BadgePokemonType/BadgePokemonType.component'

import { ReactComponent as WeightIcon } from 'assets/svg/weight.svg'
import { ReactComponent as PokeBallBg } from 'assets/svg/Pokeball.svg'
import { ReactComponent as GoBackIcon } from 'assets/svg/arrow_back.svg'
import { ReactComponent as StraightenIcon } from 'assets/svg/straighten.svg'

import { Pokemon } from 'global/interfaces/Pokemon.interface'
import { PokemonTypeEnum } from 'global/enum/pokemonType.enum'
import { useStateSelector } from 'global/hooks/useStateSelector'
import { addPokemonOnWishlist } from 'global/redux/actions/user-slice'

import * as S from './pokemonDetails.styles'

export function PokemonDetailsScreen() {
  const dispatch = useDispatch()
  const { state } = useLocation()
  const { colors } = useTheme()
  const { wishlist } = useStateSelector((state) => state.user)
  const { pokemon } = state as { pokemon: Pokemon }

  function getPokemonType(type: string) {
    return PokemonTypeEnum[type.toUpperCase() as keyof typeof PokemonTypeEnum]
  }

  const mainPokemonTypes = pokemon.types.slice(0, 2)
  const mainPokemonMoves = pokemon.moves.slice(0, 2)

  const firstPokemonType = getPokemonType(mainPokemonTypes[0])

  const isOnTheWishlist = useMemo(() => {
    return !!wishlist.find(
      (pokemonOnWishlist) => pokemonOnWishlist.ID === pokemon.ID
    )
  }, [wishlist])

  function handleAddPokemonToWishlist(pokemonToAdd: Pokemon) {
    dispatch(addPokemonOnWishlist(pokemonToAdd))
  }

  return (
    <S.Wrapper $pokemonType={firstPokemonType}>
      <PokeBallBg />
      <S.ContentWrapper>
        <S.Header>
          <S.ActionWrapper>
            <S.GoBackButton onClick={() => window.history.back()}>
              <GoBackIcon />
            </S.GoBackButton>
            <S.PokemonName>{pokemon.name}</S.PokemonName>
          </S.ActionWrapper>
          <S.PokemonID>#{pokemon.ID}</S.PokemonID>
        </S.Header>
        <S.Content>
          <S.Card>
            <S.AddToWishlist
              onClick={() => handleAddPokemonToWishlist(pokemon)}
            >
              <HeartCircle
                fill={
                  isOnTheWishlist
                    ? colors.identity.primary
                    : colors.grayscale.light
                }
                size={32}
              />
            </S.AddToWishlist>
            <S.PokemonImage src={pokemon.image} alt={pokemon.name} />
            <S.CardContent>
              <S.PokemonTypes>
                {mainPokemonTypes.map((type) => (
                  <BadgePokemonType key={type} type={getPokemonType(type)} />
                ))}
              </S.PokemonTypes>
              <S.Title $pokemonType={firstPokemonType}>About</S.Title>
              <S.PokemonInfos>
                <S.InfoWrapper $withBorder>
                  <S.InfoValueRow>
                    <WeightIcon />
                    <S.InfoText>{pokemon.weight}</S.InfoText>
                  </S.InfoValueRow>
                  <S.InfoLabel>Weight</S.InfoLabel>
                </S.InfoWrapper>
                <S.InfoWrapper $withBorder>
                  <S.InfoValueRow>
                    <StraightenIcon />
                    <S.InfoText>{pokemon.height}</S.InfoText>
                  </S.InfoValueRow>
                  <S.InfoLabel>Height</S.InfoLabel>
                </S.InfoWrapper>
                <S.InfoWrapper $withBorder={false}>
                  <S.InfoValueRow>
                    <S.InfoText>{mainPokemonMoves[0]}</S.InfoText>
                  </S.InfoValueRow>
                  <S.InfoLabel>Moves</S.InfoLabel>
                </S.InfoWrapper>
              </S.PokemonInfos>
              <S.Title $pokemonType={firstPokemonType}>Base Stats</S.Title>
              <PokemonStats
                stats={pokemon.stats}
                pokemonType={getPokemonType(mainPokemonTypes[0])}
              />
            </S.CardContent>
          </S.Card>
        </S.Content>
      </S.ContentWrapper>
    </S.Wrapper>
  )
}
