import { useQuery } from '@tanstack/react-query';
import { getPokemonDetails } from '../../services/pokemonService';
import { pokemonsQueryKeys } from '../../keys/queries';
import type { Pokemon } from '../../types/pokemon';

export function useGetPokemon(pokemonUrl: string) {
  return useQuery<Pokemon>({
    queryKey: [pokemonsQueryKeys.getPokemon, pokemonUrl],
    queryFn: () => getPokemonDetails(pokemonUrl),
    staleTime: 1000 * 60 * 5,
    gcTime: 60 * 60 * 1000,
  });
}
