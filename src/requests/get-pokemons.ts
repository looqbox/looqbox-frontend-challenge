import {
  PokemonResponseWithoutSpecies,
  PokemonSpecies,
} from '@/@types/pokemon';
import { api } from '@/lib/axios';
import { PER_PAGE } from '@/store/slices/pokemons';

type PokemonsBaseDataResponse = {
  count: number;
  results: { name: string; url: string }[];
};

type GetPokemonsParams = {
  offset: number;
};

export async function getPokemons({ offset }: GetPokemonsParams) {
  const pokemonsBaseDataResponse = await api.get<PokemonsBaseDataResponse>(
    '/pokemon',
    { params: { limit: PER_PAGE, offset } }
  );

  const count = pokemonsBaseDataResponse.data.count;
  const names = pokemonsBaseDataResponse.data.results.map(
    (pokemon) => pokemon.name
  );

  const pokemonsResponseWithouSpecies = await Promise.all(
    names.map(async (name) => {
      return await api.get<PokemonResponseWithoutSpecies>(`/pokemon/${name}`);
    })
  );

  const pokemonsWithoutSpecies = pokemonsResponseWithouSpecies.map(
    (response) => response.data
  );

  const pokemons = await Promise.all(
    pokemonsWithoutSpecies.map(async (pokemon) => {
      const speciesResponse = await api.get<PokemonSpecies>(
        `/pokemon-species/${pokemon.name}`
      );

      return {
        ...pokemon,
        species: speciesResponse.data,
      };
    })
  );

  return { count, pokemons };
}
