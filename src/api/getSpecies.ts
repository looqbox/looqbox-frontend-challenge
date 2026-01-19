import axios from 'axios'
import type { SpeciesProps } from '../types/speciesTypes'

export const getSpecies = async (id: number): Promise<SpeciesProps> => {
  try {
    const res = await axios.get(
      `https://pokeapi.co/api/v2/pokemon-species/${id}`
    )
    return res.data
  } catch (error) {
    throw new Error('Failed to fetch species. Error: ' + error)
  }
}
