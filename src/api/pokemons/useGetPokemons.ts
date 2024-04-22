import { useQuery } from 'react-query';
import { toast } from 'react-toastify';

import { QUERY_KEYS } from '../query-keys';
import api from '../base';
import { IPokemon, IPokemonType } from '../../types/models';

const getPokemons = async (offset: number): Promise<Array<IPokemon>> => {
	try {
		const response = await api.get(`${QUERY_KEYS.POKEMONS}/?limit=18&offset=${offset}`);
		const pokemons = response.data.results;

		const pokemonDetails = await Promise.all(
			pokemons?.map(async (pokemon: IPokemon) => {
				const detailResponse = await api.get(pokemon.url);
				const { id, name, sprites, types } = detailResponse.data;

				return {
					id,
					name,
					image: sprites.other['official-artwork'].front_default,
					number: `#${id.toString().padStart(3, '0')}`,
					types: types.map((typeInfo: IPokemonType) => typeInfo.type.name)
				};
			})
		);

		return pokemonDetails;
	} catch(error) {
		toast.error('Erro ao buscar pokemons!', { toastId: 'pokemons-error' });
		throw new Error('Erro ao buscar pokemons');
	}
}; 

export const useGetPokemons = (offset: number) => {
	return useQuery({
		queryKey: [QUERY_KEYS.POKEMONS],
		queryFn: () => getPokemons(offset),
		retry: 2
	});
};