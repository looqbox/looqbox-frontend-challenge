import { useQuery } from 'react-query';
import { toast } from 'react-toastify';

import { QUERY_KEYS } from '../query-keys';
import api from '../base';
import { IPokemon } from '../../types/models';

const getPokemon = async (pokemonName: string): Promise<Array<IPokemon>> => {
	try {
		const response = await api.get(`${QUERY_KEYS.POKEMONS}/${pokemonName}`);
		const pokemon = response.data;

		return pokemon;
	} catch(error) {
		toast.error('Erro ao buscar pokemons!', { toastId: 'pokemons-error' });
		throw new Error('Erro ao buscar pokemons');
	}
}; 

export const useGetPokemon = (pokemonName: string) => {
	return useQuery({
		queryKey: [QUERY_KEYS.POKEMONS],
		queryFn: () => getPokemon(pokemonName),
		retry: 2
	});
};