import React, { useEffect, useMemo, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useInView } from 'react-intersection-observer'
import { useTheme } from 'styled-components'

import { BaseTemplate } from 'templates/Base/Base.template'
import { Loading } from 'components/ui/Loading/Loading.component'
import { PokemonCard } from 'components/ui/PokemonCard/PokemonCard.component'
import { Placeholder } from 'components/ui/Placeholder/Placeholder.component'

import { Routing } from 'global/routes/Routing'
import { RadioValue } from 'components/ui/RadioInput/defs'
import { Pokemon } from 'global/interfaces/Pokemon.interface'
import { useStateSelector } from 'global/hooks/useStateSelector'
import { addPokemonOnWishlist } from 'global/redux/actions/user-slice'
import { useGetPokemons } from 'global/services/pokemon/pokemon.service'

import * as S from './home.styles'

export function HomeScreen() {
  const { colors } = useTheme()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { inView, ref } = useInView()
  const { username, wishlist } = useStateSelector((state) => state.user)

  const [offset, setOffset] = useState(0)
  const [searchValue, setSearchValue] = useState('')
  const [pokemons, setPokemons] = useState<Pokemon[]>([])
  const [selectedSorting, setSelectedSorting] = useState<RadioValue>('number')

  const { data, isLoading } = useGetPokemons({
    limit: 50,
    offset: offset
  })

  const filteredPokemons = useMemo(() => {
    return searchValue
      ? pokemons.filter((pokemon) =>
          pokemon.name.toLowerCase().includes(searchValue.toLowerCase())
        )
      : pokemons
  }, [searchValue, pokemons])

  const sortedPokemons = useMemo(() => {
    return filteredPokemons.sort((a, b) => {
      if (selectedSorting === 'number') {
        return +a.ID - +b.ID
      }
      return a.name.localeCompare(b.name)
    })
  }, [selectedSorting, filteredPokemons])

  function handleLoadMorePokemons() {
    setOffset((prevOffset) => prevOffset + 100)
  }

  function pokemonIsOnWishlist(pokemonID: string) {
    return !!wishlist?.find((pokemon) => pokemon.ID === pokemonID)
  }

  function handleChangeSearchValue(value: string) {
    setSearchValue(value)
  }

  function handleCheckSorting(value: RadioValue) {
    setSelectedSorting(value)
  }

  function handleGoToPokemonDetails(pokemon: Pokemon) {
    navigate(`${Routing.POKEMON_DETAILS}/${pokemon.ID}`, { state: { pokemon } })
  }

  function handleAddPokemonToWishlist(pokemonToAdd: Pokemon) {
    dispatch(addPokemonOnWishlist(pokemonToAdd))
  }

  function handleClearSearch() {
    setSearchValue('')
  }

  useEffect(() => {
    if (data) {
      setPokemons((prevPokemons) => {
        const pokemonsIDs = prevPokemons.map((pokemon) => pokemon.ID)
        const newData = data.filter(
          (pokemon: Pokemon) => !pokemonsIDs.includes(pokemon.ID)
        )
        return [...prevPokemons, ...newData]
      })
    }
  }, [data])

  useEffect(() => {
    if (inView) handleLoadMorePokemons()
  }, [inView])

  return (
    <BaseTemplate
      screenName="HOME"
      username={username}
      onClearSearch={handleClearSearch}
      searchValue={searchValue}
      onCheckSorting={handleCheckSorting}
      selectedSortingValue={selectedSorting}
      onChangeSearch={handleChangeSearchValue}
    >
      <S.Content>
        {isLoading && !sortedPokemons.length ? (
          <S.FeedbackWrapper>
            <Loading />
          </S.FeedbackWrapper>
        ) : !isLoading && !sortedPokemons.length ? (
          <Placeholder />
        ) : (
          <S.Pokemons>
            {sortedPokemons.map((pokemon) => (
              <PokemonCard
                key={pokemon.ID}
                pokemon={pokemon}
                isOnTheWishlist={pokemonIsOnWishlist(pokemon.ID)}
                onAddToWishlist={() => handleAddPokemonToWishlist(pokemon)}
                onPressDetails={() => handleGoToPokemonDetails(pokemon)}
              />
            ))}
          </S.Pokemons>
        )}
      </S.Content>
      <S.FeedLoadingWrapper ref={ref}>
        <Loading color={colors.grayscale.white} />
      </S.FeedLoadingWrapper>
    </BaseTemplate>
  )
}
