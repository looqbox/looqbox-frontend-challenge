import { api } from '../lib/axios';
import type { Ability } from '../types/ability';
import type { Move } from '../types/move';
import type { Pokemon } from '../types/pokemon';
import type { Species } from '../types/species';

interface FetchPokemonListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: {
    name: string;
    url: string;
  }[];
}

interface FetchPokemonListParams {
  limit: number;
  offset: number;
  page: number;
}

export async function getPokemonsList({
  limit = 20,
  offset = 0,
  page = 0,
}: FetchPokemonListParams) {
  const response = await api.get<FetchPokemonListResponse>('/pokemon', {
    params: {
      offset: page > 0 ? page * limit : offset,
      limit,
    },
  });

  return response.data;
}

export async function getPokemonDetails(pokemonUrl: string): Promise<Pokemon> {
  const response = await fetch(pokemonUrl);
  const pokemon = await response.json();
  return pokemon as Pokemon;
}

export async function getAbility(abilityUrl: string): Promise<Ability> {
  const response = await api.get<Ability>(abilityUrl);
  return response.data;
}

export async function getMove(moveUrl: string): Promise<Move> {
  const response = await api.get<Move>(moveUrl);
  return response.data;
}

export async function getSpecies(speciesUrl: string): Promise<Species> {
  const response = await api.get<Species>(speciesUrl);
  return response.data;
}
