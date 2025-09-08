import { api } from '../lib/axios';
import type { PokemonDetailProps } from '../models/types/pokemon-detail.type';

type Props = {
  searchName: string | null;
};

export async function detailsPokemonService({ searchName }: Props) {
  try {
    const { data } = await api.get<PokemonDetailProps>(`/pokemon/${searchName}`);
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
