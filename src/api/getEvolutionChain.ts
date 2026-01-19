import axios from 'axios'
import type { EvolutionChainProps } from '../types/evolutionChainTypes'

export const getEvolutionChain = async (
  url: string
): Promise<EvolutionChainProps> => {
  try {
    const res = await axios.get(url)
    return res.data
  } catch (error) {
    throw new Error('Failed to fetch evolution chain. Error: ' + error)
  }
}
