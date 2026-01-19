import axios from 'axios'
import type { TypeProps } from '../types/typesTypes'

export const getTypes = async (id: number | string): Promise<TypeProps> => {
  try {
    const res = await axios.get(`https://pokeapi.co/api/v2/type/${id}`)
    return res.data
  } catch (error) {
    throw new Error('Failed to fetch types. Error: ' + error)
  }
}
