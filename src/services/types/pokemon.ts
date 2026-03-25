export type PokemonType =
  | 'normal'
  | 'fighting'
  | 'flying'
  | 'poison'
  | 'ground'
  | 'rock'
  | 'bug'
  | 'ghost'
  | 'steel'
  | 'fire'
  | 'water'
  | 'grass'
  | 'electric'
  | 'psychic'
  | 'ice'
  | 'dragon'
  | 'dark'
  | 'fairy'
  | 'stellar'
  | 'unknown'

export type PokemonStat =
  | 'hp'
  | 'attack'
  | 'defense'
  | 'special-attack'
  | 'special-defense'
  | 'speed'

export type Content<T = string> = {
  name: T
  url: string
}

export type Abilities = {
  ability: Content
  is_hidden: boolean
  slot: number
}

export type Cries = {
  legacy: string
  latest: string
}

export type Types = {
  slot: number
  type: Content<PokemonType>
}

export type Stats = {
  base_stat: number
  effort: number
  stat: Content<PokemonStat>
}

export type Pokemon = {
  abilities: Abilities[]
  base_experience: number
  cries: Cries
  height: number
  id: number
  is_default: boolean
  location_area_encounters: string
  name: string
  order: number
  stats: Stats[]
  types: Types[]
  weight: number
}
