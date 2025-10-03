import { api } from '../utils/api'
import type { Abilities } from './pokemon'

export type AbilityDetail = {
  id: number
  name: string
  is_main_series: boolean
  generation: {
    name: string
    url: string
  }
  names: {
    name: string
    language: {
      name: string
      url: string
    }
  }[]
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
  pokemon: {
    is_hidden: boolean
    slot: number
    pokemon: {
      name: string
      url: string
    }
  }[]
}

export const getPokemonAbilities = async (abilities: Abilities[]) => {
  const abilitiesFull = await Promise.all(
    abilities.map(async (ability) => {
      const { data } = await api.get<AbilityDetail>(ability.ability.url)
      return data
    }),
  )

  return abilitiesFull
}
