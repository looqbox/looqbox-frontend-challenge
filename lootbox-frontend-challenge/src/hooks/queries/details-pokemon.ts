import { useQuery } from '@tanstack/react-query';
import { detailsPokemonService } from '../../services/details-pokemon.service';

type Props = {
  searchName: string | null;
  isOpen: boolean;
};

export const useDetailsPokemonByName = ({ searchName, isOpen }: Props) => {
  const { data, isLoading } = useQuery({
    queryKey: ['details-pokemon', searchName],
    queryFn: async () => {
      const response = await detailsPokemonService({ searchName });
      return response;
    },
    enabled: !!searchName && !!isOpen,
  });

  return {
    data,
    isLoading,
  };
};
