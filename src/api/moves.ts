import { api } from '../utils/api'

export interface MoveDetail {
  id: number
  name: string
  accuracy: number | null
  effect_chance: number | null
  pp: number
  priority: number
  power: number | null
  damage_class: {
    name: string
    url: string
  }
  effect_entries: {
    effect: string
    short_effect: string
    language: {
      name: string
      url: string
    }
  }[]
  flavor_text_entries: {
    flavor_text: string
    language: {
      name: string
      url: string
    }
    version_group: {
      name: string
      url: string
    }
  }[]
  type: {
    name: string
    url: string
  }
  target: {
    name: string
    url: string
  }
}

export const getPokemonMove = async (url: string): Promise<MoveDetail> => {
  const { data } = await api.get<MoveDetail>(url)
  return data
}
