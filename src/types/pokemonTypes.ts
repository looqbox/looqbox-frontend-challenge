export type PokemonProps = {
  id: number
  name: string
  sprites: {
    front_default: string
    front_shiny: string
    versions: {
      'generation-v': {
        'black-white': {
          front_default: string
          front_shiny: string
          animated: {
            front_default: string
            front_shiny: string
          }
        }
      }
    }
  }
  types: { type: { name: string } }[]
  cries: { latest: string }
  stats: { base_stat: number; stat: { name: string } }[]
  species: { url: string }
  weight: number
  height: number
}

export type PokemonTypes =
  | 'fire'
  | 'water'
  | 'ice'
  | 'grass'
  | 'bug'
  | 'rock'
  | 'ground'
  | 'steel'
  | 'electric'
  | 'ghost'
  | 'dark'
  | 'poison'
  | 'psychic'
  | 'fairy'
  | 'dragon'
  | 'flying'
  | 'fighting'
  | 'normal'
