import type { Pokemon } from '../constants/Pokemon';
import { getData } from '../services/configAxios';

type PokeList = {
  count: number;
  results: { name: string; url: string }[];
};

export async function listPokemons(
  page = 1,
  limit = 12,
): Promise<{ results: Pokemon[]; total: number }> {
  const offset = (page - 1) * limit;
  const list = await getData<PokeList>(`/pokemon?offset=${offset}&limit=${limit}`);

  // detalhe por nome (cada item vira Pokemon completo)
  const results = await Promise.all(
    list.results.map(({ name }) => getData<Pokemon>(`/pokemon/${name}`)),
  );

  return { results, total: list.count };
}
