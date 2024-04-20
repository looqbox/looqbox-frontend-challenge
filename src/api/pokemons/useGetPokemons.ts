import { useQuery } from 'react-query';
import { toast } from 'react-toastify';

import { QUERY_KEYS } from '../query-keys';
import api from '../base';

const getPokemons = async (): Promise<any | null> => {
  try {
    const response = await api.get(`${QUERY_KEYS.POKEMONS}`);
    return response.data;
  } catch(error) {
    toast.error('Erro ao buscar pokemons!', { toastId: 'pokemons-error' });
    throw new Error('Erro ao buscar pokemons');
  }
}; 

export const useGetPokemons = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.POKEMONS],
    queryFn: getPokemons,
    retry: 2
  });
};