import { useQuery } from '@tanstack/react-query';
import { getPokemonsList } from '../../services/pokemonService';
import { pokemonsQueryKeys } from '../../keys/queries';

export function useGetPokemons(limit = 20, offset = 0, page = 0) {
  return useQuery({
    queryKey: [pokemonsQueryKeys.getPokemons, { limit, offset, page }],
    queryFn: () => getPokemonsList({ limit, offset, page }),
    staleTime: 1000 * 60 * 5,
    gcTime: 60 * 60 * 1000,
  });
}
