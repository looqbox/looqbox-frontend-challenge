import { api } from '@/lib/axios';
import { PER_PAGE } from '@/store/slices/pokeball';

type PokemonsBaseDataResponse = {
  count: number;
  results: { name: string; url: string }[];
};

type GetPokemonsParams = {
  offset: number;
};

export type GetPokemonsNamesResponse = {
  count: number;
  pokemonsName: string[];
};

export async function getPokemonsNameAndCount({
  offset,
}: GetPokemonsParams): Promise<GetPokemonsNamesResponse> {
  const pokemonsBaseDataResponse = await api.get<PokemonsBaseDataResponse>(
    '/pokemon',
    { params: { limit: PER_PAGE, offset } }
  );

  const count = pokemonsBaseDataResponse.data.count;
  const pokemonsName = pokemonsBaseDataResponse.data.results.map(
    (pokemon) => pokemon.name
  );

  return { count, pokemonsName };
}
