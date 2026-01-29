import axios from 'axios';
import type { PokemonType } from '../shared/pokemon/types';

export type PokemonIndexItem = {
  id: number;
  name: string;
};

export type PokemonListItem = {
  name: string;
  url: string;
};

export type PokemonListResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonListItem[];
};

export type PokemonDetails = {
  id: number;
  name: string;
  sprites: {
    front_default: string | null;
    other?: {
      ['official-artwork']?: {
        front_default?: string | null;
      };
    };
  };
  types: Array<{
    slot: number;
    type: { name: PokemonType };
  }>;
  abilities: Array<{
    ability: { name: string };
    is_hidden: boolean;
  }>;
  stats: Array<{
    base_stat: number;
    stat: { name: string };
  }>;
  height: number;
  weight: number;
};

const BASE_URL = 'https://pokeapi.co/api/v2';
export const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10_000,
});

export async function getPokemonPage(params?: {
  page?: number;
  pageSize?: number;
}): Promise<PokemonListResponse> {
  const { page = 1, pageSize = 20 } = params || {};
  const offset = (page - 1) * pageSize;

  try {
    const response = await api.get<PokemonListResponse>('/pokemon', {
      params: {
        limit: pageSize,
        offset,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching Pokémon data:', error);
    throw error;
  }
}

export async function getPokemonByName(name: string): Promise<PokemonDetails> {
  const normalized = name.trim().toLowerCase();

  try {
    const response = await api.get<PokemonDetails>(`/pokemon/${normalized}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching Pokémon data for ${name}:`, error);
    throw error;
  }
}

export function extractPokemonId(url: string): number {
  const match = url.match(/\/pokemon\/(\d+)\//);
  if (!match) return 0;
  return Number(match[1]);
}

export async function getPokemonIndex(): Promise<PokemonIndexItem[]> {
  try {
    const response = await api.get<PokemonListResponse>('/pokemon', {
      params: { limit: 2000, offset: 0 },
    });

    return response.data.results
      .map((p) => ({
        id: extractPokemonId(p.url),
        name: p.name,
      }))
      .filter((p) => p.id > 0);
  } catch {
    throw new Error('Failed to fetch pokémon index');
  }
}
