import { useInfiniteQuery, useQuery } from '@tanstack/react-query'

import { PokemonRequests } from '../requests'

export const usePokemonList = () => {
  return useInfiniteQuery({
    queryKey: ['pokemon-list'],
    queryFn: ({ pageParam }) => PokemonRequests.getPokemonList(pageParam, 20),
    initialPageParam: 0,
    getNextPageParam: lastPage => {
      if (!lastPage.data.next) return undefined

      const url = new URL(lastPage.data.next)
      const offset = url.searchParams.get('offset')

      return offset ? Number(offset) : undefined
    },
  })
}

export const usePokemonById = (id: string) => {
  return useQuery({
    queryKey: ['pokemon-id', id],
    queryFn: async () => {
      const pokemon = await PokemonRequests.getPokemonById(Number(id))

      return pokemon.data
    },
    retry: 1,
  })
}

export const usePokemonByName = (name: string) => {
  return useQuery({
    queryKey: ['pokemon-name', name],
    queryFn: async () => {
      const pokemon = await PokemonRequests.getPokemonByName(name)

      return pokemon.data
    },
    retry: 1,
  })
}
