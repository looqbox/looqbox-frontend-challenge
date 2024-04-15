import React, { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { BaseTemplate } from 'templates/Base/Base.template'
import { RadioValue } from 'components/ui/RadioInput/defs'
import { PokemonCard } from 'components/ui/PokemonCard/PokemonCard.component'
import { Placeholder } from 'components/ui/Placeholder/Placeholder.component'

import { Routing } from 'global/routes/Routing'
import { Pokemon } from 'global/interfaces/Pokemon.interface'
import { useStateSelector } from 'global/hooks/useStateSelector'
import { addPokemonOnWishlist } from 'global/redux/actions/user-slice'

import * as S from './favoritePokemons.styles'

export function FavoritePokemonsScreen() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { username, wishlist } = useStateSelector((state) => state.user)

  const [searchValue, setSearchValue] = useState('')
  const [selectedSorting, setSelectedSorting] = useState<RadioValue>('number')

  const pokemons: Pokemon[] = useMemo(() => {
    return [...wishlist]
  }, [wishlist])

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
  }, [selectedSorting, filteredPokemons, wishlist])

  function pokemonIsOnWishlist(pokemonID: string) {
    return !!wishlist?.find((pokemon) => pokemon.ID === pokemonID)
  }

  function handleRemovePokemonFromWishlist(pokemonToAdd: Pokemon) {
    dispatch(addPokemonOnWishlist(pokemonToAdd))
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

  function handleClearSearch() {
    setSearchValue('')
  }

  return (
    <BaseTemplate
      screenName="FAVORITE_POKEMONS"
      username={username}
      onClearSearch={handleClearSearch}
      searchValue={searchValue}
      onCheckSorting={handleCheckSorting}
      selectedSortingValue={selectedSorting}
      onChangeSearch={handleChangeSearchValue}
    >
      <S.Content>
        {!sortedPokemons.length ? (
          <Placeholder />
        ) : (
          <S.Pokemons>
            {sortedPokemons.map((pokemon) => (
              <PokemonCard
                key={pokemon.ID}
                pokemon={pokemon}
                isOnTheWishlist={pokemonIsOnWishlist(pokemon.ID)}
                onAddToWishlist={() => handleRemovePokemonFromWishlist(pokemon)}
                onPressDetails={() => handleGoToPokemonDetails(pokemon)}
              />
            ))}
          </S.Pokemons>
        )}
      </S.Content>
    </BaseTemplate>
  )
}
