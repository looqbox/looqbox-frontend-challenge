import { useEffect, useState } from 'react'
import { useInfiniteQuery } from '@tanstack/react-query'
import { useInView } from 'react-intersection-observer'
import { PokemonInformationContext } from './PokemonInformation.context'
import { message } from 'antd'
import { getPokemonData, getPokemonList } from '../../../../../services/pokemonServices'
import { type IPokemonData } from '../../../../../types/Pokemon.types'

export function PokemonInformationContextProvider ({ children }: { children: React.ReactNode }) {
  const [filteredPokemonList, setFilteredPokemonList] = useState<IPokemonData[] | []>([])

  const [isLoadingSearch, setIsLoadingSearch] = useState(false)
  const { ref, inView } = useInView()

  const { data: pokemonListData, fetchNextPage, isFetching, isFetchingNextPage, isError } = useInfiniteQuery({
    queryKey: ['pokemonList'],
    queryFn: getPokemonList,
    initialPageParam: 'https://pokeapi.co/api/v2/pokemon?limit=20&offset=0',
    getNextPageParam: (lastPage) => lastPage.next,
    staleTime: 300000 // 5min in miliseconds
  })

  async function handleSearch (search: string) {
    if (!search || !pokemonListData) return
    search = search.toLowerCase()

    const searchId = !isNaN(+search) && +search

    const result = pokemonListData.pages.flatMap(
      page => page.pokemons.filter(
        pokemon => (
          (pokemon.id === searchId) || (pokemon.name.includes(search))
        )
      )
    )

    if (!result.length) {
      try {
        setIsLoadingSearch(true)
        const pokemonResponse = await getPokemonData(search)

        setFilteredPokemonList(Array(pokemonResponse))
      } catch (error) {
        void message.error('Pokemon not found.')
      } finally {
        setIsLoadingSearch(false)
      }
    } else {
      setFilteredPokemonList(result)
    }
  }

  function handleSearchClear () {
    setFilteredPokemonList([])
  }

  useEffect(() => {
    if (inView && !isFetchingNextPage) {
      void fetchNextPage()
    }
  }, [inView, fetchNextPage])

  const POKEMON_CONTEXT = {
    pokemonListData,
    isFetching,
    isFetchingNextPage,
    filteredPokemonList,
    isError,
    isLoadingSearch,
    inView,
    ref,
    handleSearch,
    handleSearchClear
  }

  return (
    <PokemonInformationContext.Provider value={POKEMON_CONTEXT}>
        {children}
    </PokemonInformationContext.Provider>
  )
}
