import { api } from '../lib/axios';
import type { PokemonListResponseProps } from '../models/types/pokemon-list';

type Props = {
  offset?: number;
  limit?: number;
  filter?: {
    pokemonName: string | null;
  };
};

export async function listPokemonService({ limit = 20, offset = 20 }: Props) {
  try {
    const query = `?offset=${offset}&limit=${limit}`;
    const { data } = await api.get<PokemonListResponseProps>(`/pokemon${query}`);
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
