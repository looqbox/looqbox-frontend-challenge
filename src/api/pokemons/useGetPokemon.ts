import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import { AxiosResponse } from 'axios';

import { QUERY_KEYS } from '../query-keys';
import api from '../base';
import { IPokemon } from '../../types/models';

const getPokemon = async (pokemonName: string): Promise<IPokemon> => {
	try {
		const response: AxiosResponse<IPokemon> = await api.get(`${QUERY_KEYS.POKEMON}/${pokemonName}`);
		const pokemon = response.data;

		return pokemon;
	} catch(error) {
		toast.error('Ops! We didn\'t find that pokemon.', { toastId: 'pokemons-error' });
		throw new Error('Error getting pokemon');
	}
}; 

export const useGetPokemon = (pokemonName: string) => {
	return useQuery({
		queryKey: [QUERY_KEYS.POKEMON],
		queryFn: () => getPokemon(pokemonName),
		retry: 2
	});
};