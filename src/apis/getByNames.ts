import type { Pokemon } from '../constants/Pokemon';
import { getData } from '../services/configAxios';

export async function getPokemonByName(name: string): Promise<Pokemon> {
  return getData<Pokemon>(`/pokemon/${name.toLowerCase()}`);
}
