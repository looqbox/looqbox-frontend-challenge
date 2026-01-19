import axios from 'axios'
import type { PokemonProps } from '../types/pokemonTypes'

export const getPokemon = async (
  pokeId: number | string
): Promise<PokemonProps> => {
  try {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeId}`)
    return res.data
  } catch (error) {
    throw new Error('Failed to fetch Pokemon. Error: ' + error)
  }
}
