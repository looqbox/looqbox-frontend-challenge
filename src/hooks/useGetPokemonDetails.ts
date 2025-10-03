import { useQuery } from '@tanstack/react-query'
import { getPokemon, type Pokemon } from '../api/pokemon'
import type { PokemonSpecies } from '../api/species'
import type { AbilityDetail } from '../api/abilities'
import type { TypeDetail } from '../api/types'

export function useGetPokemonDetails(id?: string) {
  return useQuery<
    {
      pokemon: Pokemon
      species: PokemonSpecies
      abilities: AbilityDetail[]
      chain: Pokemon[]
      types: TypeDetail[]
    },
    Error
  >({
    queryKey: ['pokemon', id],
    queryFn: () => getPokemon(id!),
    enabled: !!id,
  })
}
