import { Pokemon } from 'global/interfaces/Pokemon.interface'
export interface PokemonApiResponse {
  count: number
  next: string
  previous: string
  results: { name: string; url: string }[]
}

export interface PokemonDetailsApiResponse {
  id: number
  name: string
  weight: number
  types: PokemonType[]
  height: number
  moves: PokemonMove[]
  sprites: { other: { dream_world: { front_default: string } } }
  stats: PokemonStat[]
}

export interface PokemonType {
  type: {
    name: string
    url: string
  }
}

export interface PokemonMove {
  move: {
    name: string
    url: string
  }
}

export interface PokemonStat {
  base_stat: number
  effort: number
  stat: {
    name: string
    url: string
  }
}

export type GetPokemonsParams = {
  limit?: number
  offset?: number
}

export type GetPokemonsResponse = Pokemon
