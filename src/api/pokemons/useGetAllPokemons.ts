import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import { AxiosResponse } from 'axios';

import { QUERY_KEYS } from '../query-keys';
import api from '../base';
import { IPokemonList } from '../../types/models';
import { IAPIResponse } from '../../types';

const getAllPokemons = async (): Promise<IPokemonList[]> => {
	try {
		const response: AxiosResponse<IAPIResponse<IPokemonList>> = await api.get(`${QUERY_KEYS.POKEMON}?limit=1500`);
		const pokemons = response.data.results;

		return pokemons;
	} catch(error) {
		toast.error('Ops! We didn\'t find any pokemons.', { toastId: 'pokemons-error' });
		throw new Error('Error getting pokemon');
	}
}; 

export const useGetAllPokemons = () => {
	return useQuery({
		queryKey: [QUERY_KEYS.SEARCH_BAR],
		queryFn: () => getAllPokemons(),
		retry: 2
	});
};