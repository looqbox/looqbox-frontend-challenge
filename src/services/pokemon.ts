import { get } from './generic'

export interface Pokemon {
  name: string
  url: string
}

export interface PokemonListResponse {
  count: number
  next: string | null
  previous: string | null
  results: Pokemon[]
}

export const getPokemonData = async (name: string) => {
  try {
    const res = await get(`pokemon/${name}`)
    return res.data
  } catch (error) {}
}

export const getPokemonDescription = async (name: string) => {
  try {
    const res = await get(`pokemon-species/${name}`)
    return res.data
  } catch (error) {}
}

export const getAllPokemon = async (): Promise<PokemonListResponse> => {
  try {
    const res = await get(`pokemon?limit=151&offset=0`)
    return res.data as PokemonListResponse
  } catch (error) {
    throw error
  }
}
