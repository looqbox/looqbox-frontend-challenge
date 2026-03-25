import { pokeApi } from '../api'
import type { ApiResult, Pokemon, PokemonListResult } from '../types'

export const PokemonRequests = {
  getPokemonList: (offset: number, limit: number) =>
    pokeApi.get<ApiResult<PokemonListResult>>('/pokemon', {
      params: {
        offset,
        limit,
      },
    }),
  getPokemonById: (id: number) => pokeApi.get<Pokemon>(`/pokemon/${id}`),
  getPokemonByName: (name: string) => pokeApi.get<Pokemon>(`/pokemon/${name}`),
}
