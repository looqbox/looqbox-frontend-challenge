import { api } from '@/lib/axios';

type PokemonsBaseDataResponse = {
  count: number;
  results: { name: string; url: string }[];
};

type GetPokemonsParams = {
  currentPage: number;
};

export type GetPokemonsNamesResponse = {
  count: number;
  pokemonsName: string[];
};

export const PER_PAGE = 12;

export async function getPokemonsNameAndCount({
  currentPage,
}: GetPokemonsParams): Promise<GetPokemonsNamesResponse> {
  const pokemonsBaseDataResponse = await api.get<PokemonsBaseDataResponse>(
    '/pokemon',
    { params: { limit: PER_PAGE, offset: (currentPage - 1) * PER_PAGE } }
  );

  const count = pokemonsBaseDataResponse.data.count;
  const pokemonsName = pokemonsBaseDataResponse.data.results.map(
    (pokemon) => pokemon.name
  );

  return { count, pokemonsName };
}
