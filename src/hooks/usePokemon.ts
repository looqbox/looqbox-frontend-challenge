import { useQueries, useQuery } from '@tanstack/react-query'
import { getPokemon } from '../api/getPokemon'

export const useGetPokemon = (pokeId: number | string) => {
  return useQuery({
    queryKey: [pokeId],
    queryFn: () => getPokemon(pokeId)
  })
}

export const useGetAllPokemon = (
  currentPage: number = 1,
  pageSize: number = 18
) => {
  return useQueries({
    queries: Array.from({ length: pageSize }, (_, i) => ({
      queryKey: [currentPage, i + 1],
      queryFn: () => getPokemon(i + 1 + (currentPage - 1) * pageSize)
    }))
  })
}
