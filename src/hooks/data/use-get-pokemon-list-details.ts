import { useQueries } from '@tanstack/react-query';
import { getPokemonDetails } from '../../services/pokemonService';
import { pokemonsQueryKeys } from '../../keys/queries';
import type { NamedAPIResource } from '../../types/pokemon';

export function useGetPokemonListDetails(pokemons: NamedAPIResource[]) {
  const results = useQueries({
    queries: pokemons.map((p) => ({
      queryKey: [pokemonsQueryKeys.getPokemon, p.url],
      queryFn: () => getPokemonDetails(p.url),
      staleTime: 1000 * 60 * 5,
      enabled: !!p.url,
    })),
  });

  const isLoading = results.some((r) => r.isLoading);
  const isError = results.some((r) => r.isError);
  const pokemonData = results.map((r) => r.data).filter(Boolean);

  return {
    isLoading,
    isError,
    data: pokemonData,
  };
}
