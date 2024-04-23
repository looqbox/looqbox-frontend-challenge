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

		// const pokemonTypes: string[] = returnPokemonTypesNames(types);
		// const pokemonColor: string = handlePokemonTypeColor(pokemonTypes[0]);

		// const pokemon: any = {
		// 	id,
		// 	name,
		// 	image: sprites.other['official-artwork'].front_default,
		// 	number: `#${id.toString().padStart(3, '0')}`,
		// 	types: pokemonTypes,
		// 	color: pokemonColor
		// };

		return pokemon;
	} catch(error) {
		toast.error('Erro ao buscar pokemons!', { toastId: 'pokemons-error' });
		throw new Error('Erro ao buscar pokemons');
	}
}; 

export const useGetPokemon = (pokemonName: string) => {
	return useQuery({
		queryKey: [QUERY_KEYS.POKEMON],
		queryFn: () => getPokemon(pokemonName),
		retry: 2
	});
};