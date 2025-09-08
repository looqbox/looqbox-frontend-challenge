import { useQuery } from '@tanstack/react-query';
import { pokemonByNameService } from '../../services/pokemon-by-name.service';

type Props = {
  searchName: string | null;
};

export const usePokemonByName = ({ searchName }: Props) => {
  const { data, isLoading, isFetching } = useQuery({
    queryKey: ['pokemon-by-name', searchName],
    queryFn: async () => {
      const response = await pokemonByNameService({ searchName });
      const formatted = {
        name: response.name,
        image: response.sprites.front_default,
        url: `${import.meta.env.VITE_BASE_URL}/${response.id}`,
      };

      return formatted;
    },
    enabled: !!searchName,
  });

  return { data, isLoading, isFetching };
};
