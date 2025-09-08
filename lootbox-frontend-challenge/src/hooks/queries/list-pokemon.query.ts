import { useQuery } from '@tanstack/react-query';
import type { PokemonListResponseProps } from '../../models/types/pokemon-list';
import { listPokemonService } from '../../services/list-pokemon.service';
import { setImagePokemon } from '../image-pokemon';

type Props = {
  offset?: number;
  limit?: number;
  filter?: {
    searchList: string | null;
  };
};

export const useListPokemon = ({ limit, offset, filter }: Props) => {
  const { data, isLoading, isFetching } = useQuery({
    queryKey: ['list-pokemon', offset, limit, filter],
    queryFn: async () => {
      const response = await listPokemonService({ limit, offset });

      const formatted: PokemonListResponseProps = {
        ...response,
        results: response.results
          .map(({ url, name }) => ({
            name,
            url,
            image: setImagePokemon(url),
          }))
          .filter(
            (props) =>
              !filter?.searchList ||
              props.name.toLowerCase().includes(filter.searchList.toLowerCase()),
          ),
      };

      return formatted;
    },
  });

  return {
    data,
    isFetching,
    isLoading,
  };
};
