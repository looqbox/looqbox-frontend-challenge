import { AxiosResponse } from 'axios';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';

import { QUERY_KEYS } from '../query-keys';
import api from '../base';
import { IPokemon, IPokemonList } from '../../types/models';
import { IAPIResponse } from '../../types';

const getPokemonsDetails = async (pokemons: IPokemonList[]): Promise<IPokemon[]> => {
	return await Promise.all(
		pokemons.map(async (pokemon: IPokemonList) => {
			const response = await api.get(pokemon.url);
			return response.data;
		})
	);
};

const getPokemons = async (offset: number): Promise<IPokemon[]> => {
	try {
		const response: AxiosResponse<IAPIResponse<IPokemonList>> = await api.get(`${QUERY_KEYS.POKEMON}/?limit=18&offset=${offset}`);
		const pokemons = response.data.results;

		return getPokemonsDetails(pokemons);
	} catch(error) {
		toast.error('Ops! There was a problem finding pokemons.', { toastId: 'pokemons-error' });
		throw new Error('Error getting pokemons');
	}
}; 

export const useGetPokemons = (offset: number) => {
	return useQuery({
		queryKey: [QUERY_KEYS.POKEMONS],
		queryFn: () => getPokemons(offset),
		retry: 2
	});
};