export interface Pokemon {
  ID: string
  name: string
  weight: number
  types: string[]
  height: number
  moves: string[]
  image: string
  stats: PokemonStat[]
}

export interface PokemonStat {
  stat: string
  value: number
}
