import { api } from '@/lib/axios'

type TypeProps = {
  type: {
    name: string
    url: string
  }
}

type TypesProps = {
  types: TypeProps[]
}

type SpritesProps = {
  other: {
    home: {
      front_default: string
    }
  }
}

type StatProps = {
  name: string
  url: string
}

type StatsProps = {
  stats: {
    base_stat: number
    effort: 0
    stat: StatProps
  }[]
}

type AbilityProps = {
  ability: {
    name: string
  }
}

type AbilitiesProps = {
  abilities: AbilityProps[]
}

type MoveProps = {
  move: {
    name: string
    url: string
  }
}

type MovesProps = {
  moves?: MoveProps[]
}

type SpeciesProps = {
  name: string
  url: string
}

type FlavorTextProps = {
  flavor_text: string
}

type PokemonTypes = {
  name: string
  id: number
  order: number
  types: TypesProps
  sprites: SpritesProps
  stats: StatsProps
  abilities: AbilitiesProps
  moves: MovesProps
  species: SpeciesProps
  flavor_text_entries: FlavorTextProps
}

export async function getPokemon(value?: string) {
  if (value) {
    return await api.get<PokemonTypes>(`${value}`)
  }
}
