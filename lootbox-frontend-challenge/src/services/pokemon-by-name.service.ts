import { api } from '../lib/axios';

type Props = {
  searchName: string | null;
};

export interface PokemonByNameResponse {
  name: string;
  sprites: {
    front_default: string;
  };
  id: number;
}

export async function pokemonByNameService({ searchName }: Props) {
  try {
    const { data } = await api.get<PokemonByNameResponse>(`/pokemon/${searchName}`);
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
