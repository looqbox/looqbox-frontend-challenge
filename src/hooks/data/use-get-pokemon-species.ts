import { useQuery } from '@tanstack/react-query';
import { getSpecies } from '../../services/pokemonService';
import type { Species } from '../../types/species';

export const useGetPokemonSpecies = (url: string) => {
  const query = useQuery({
    queryKey: ['pokemonSpecies', url],
    queryFn: () => getSpecies(url),
    enabled: !!url,
    staleTime: 1000 * 60 * 5,
  });

  return {
    data: query.data as Species,
    isLoading: query.isLoading,
    isError: query.isError,
  };
};
