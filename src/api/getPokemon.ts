import { api } from '@/lib/axios'

type TypesProps = {
  type: {
    name: string
    url: string
  }
}

type SpritesProps = {
  other: {
    home: {
      front_default: string
    }
  }
}

type AbilitiesProps = {
  ability: {
    name: string
  }
}

type MovesProps = {
  move: {
    name: string
    url: string
  }
}

type SpeciesProps = {
  name: string
  url: string
}

type FlavorTextProps = {
  flavor_text: string

  version: {
    name: string
    url: string
  }
}

type PokemonTypes = {
  name: string
  id: number
  order: number
  types: TypesProps[]
  sprites: SpritesProps

  stats: {
    base_stat: number
    effort: number
    stat: {
      name: string
      url: string
    }
  }[]

  abilities: AbilitiesProps[]
  moves: MovesProps[]
  species: SpeciesProps
  flavor_text_entries: FlavorTextProps[]
}

export async function getPokemon(value?: string) {
  if (value) {
    return await api.get<PokemonTypes>(`${value}`)
  }
}
