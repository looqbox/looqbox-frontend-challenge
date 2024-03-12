import { api } from '@/lib/axios'

type PokemonTypes = {
  name: string
  id: number
  order: number
  types: {
    name: string
    url: string
  }
  sprites: {
    other: {
      home: {
        front_default: string
      }
    }
  }

  stats: {
    base_stat: number
    effort: 0
    stat: {
      name: string
      url: string
    }
  }

  abilities: {
    ability: {
      name: string
      isHidden: boolean
      slot: number
    }
  }

  moves: {
    move: string
  }
}

export async function getPokemon(value?: string) {
  if (value) {
    return await api.get<PokemonTypes>(`/pokemon/${value}`)
  }
}
