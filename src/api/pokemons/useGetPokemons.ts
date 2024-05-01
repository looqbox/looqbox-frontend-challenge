import { AxiosResponse } from 'axios';
import { useInfiniteQuery } from 'react-query';
import { toast } from 'react-toastify';

import { QUERY_KEYS } from '../query-keys';
import api from '../base';

import { IPokemon, IPokemonList } from '../../types/models';
import { IAPIResponse } from '../../types';
import { getPokemonsDetails } from '../../util/helpers';

const LIMIT = 18;

const getPokemons = async (offset: number): Promise<IPokemon[]> => {
	try {
		const response: AxiosResponse<IAPIResponse<IPokemonList>> = await api.get(`${QUERY_KEYS.POKEMON}/?limit=${LIMIT}&offset=${offset}`);
		const pokemons = response.data.results;
		
		return 	getPokemonsDetails(pokemons);
	} catch(error) {
		toast.error('Ops! There was a problem finding pokemons.', { toastId: 'pokemons-error' });
		throw new Error('Error getting pokemons');
	}
}; 

export const useGetPokemons = () => {
	return useInfiniteQuery({
		queryKey: [QUERY_KEYS.POKEMONS],
		queryFn: ({pageParam}) => getPokemons(pageParam),
		getNextPageParam: (lastPage, allPages) => {
			if(lastPage.length < LIMIT) return undefined;
			return allPages.length * LIMIT;
		}
	});
};