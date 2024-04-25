import { Pokemon, PokemonList } from '@/typings/pokemon';
import { PokeAPI } from 'pokeapi-types';
import axios from '@/utils/axios';

export const LIMIT = 20;

export const getPokemonsList = async ({ pageParam }: { pageParam: number }) => {
  const { data } = await axios.get<PokemonList>(
    `/pokemon?limit=${LIMIT}&offset=${LIMIT * pageParam}`,
  );
  return data.results;
};

export const getDetailedTypes = async (typeNames: string[]) => {
  const types = await Promise.all(
    typeNames.map((name) => axios.get<PokeAPI.Type>(`/type/${name}`)),
  );

  return types.map((type) => type.data);
};

export const getPokemon = async (name: string) => {
  const [pokemon, species] = await Promise.all([
    axios.get<PokeAPI.Pokemon>(`/pokemon/${name}`),
    axios.get<PokeAPI.PokemonSpecies>(`/pokemon-species/${name}`),
  ]);

  const detailedTypes = await getDetailedTypes(pokemon.data.types.map(({ type }) => type.name));

  return { ...pokemon.data, ...species.data, detailedTypes } as Pokemon;
};
