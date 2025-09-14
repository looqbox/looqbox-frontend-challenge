import type { Pokemon } from '../constants/Pokemon';
import { getData } from '../services/configAxios';

export async function getPokemonById(id: number): Promise<Pokemon> {
  return getData<Pokemon>(`/pokemon/${id}`);
}
