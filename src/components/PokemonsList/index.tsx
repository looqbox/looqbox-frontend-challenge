import { useEffect } from 'react'
import NotFound from '../../assets/not-found.png'
import { useAppDispatch, useAppSelector } from '../../store'
import {
  loadAllPokemonNames,
  loadPokemonPaginatedList,
} from '../../store/slices/pokemon'
import { PokemonCard } from '../PokemonCard'

export function PokemonsList() {
  const dispatch = useAppDispatch()

  const baseData = useAppSelector((state) => state.pokemons.baseData.results)

  const searchedData = useAppSelector((state) => state.pokemons.searchedPokemon)

  const allPokemons = useAppSelector((state) => state.pokemons.allPokemons)
  const isSearching = useAppSelector((state) => state.pokemons.isSearching)

  useEffect(() => {
    dispatch(loadPokemonPaginatedList({ limit: 16, offset: 0 }))
  }, [dispatch])

  useEffect(() => {
    if (allPokemons?.length === 0) {
      dispatch(loadAllPokemonNames())
    }
  }, [dispatch, allPokemons?.length])

  if (
    (searchedData?.length <= 0 && baseData?.length <= 0) ||
    (isSearching && searchedData?.length <= 0)
  ) {
    return (
      <div className='w-full flex flex-1 flex-col items-center justify-center gap-2'>
        <img
          src={NotFound}
          alt='Not Found Pokemon Image'
          className='w-60 h-60'
        />
        <h4 className='font-bold text-2xl text-orange-400'>
          No Pokemons found...
        </h4>
      </div>
    )
  }

  return (
    <ul className='w-full flex flex-col gap-4 md:gap-[1%] lg:gap-[2%] md:flex-wrap md:flex-row'>
      {(searchedData?.length > 0 ? searchedData : baseData).map((pokemon) => (
        <PokemonCard key={pokemon.name} url={pokemon.url} name={pokemon.name} />
      ))}
    </ul>
  )
}
