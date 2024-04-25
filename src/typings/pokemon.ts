import { PokeAPI } from 'pokeapi-types';

export type PokemonList = {
  count: number;
  next: string;
  previous: string | null;
  results: {
    name: string;
    url: string;
  }[];
};

export type Pokemon = PokeAPI.Pokemon &
  PokeAPI.PokemonSpecies & {
    detailedTypes: PokeAPI.Type[];
  };
