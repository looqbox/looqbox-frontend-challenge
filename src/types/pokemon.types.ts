export interface ResultPokemonList {
  count: number
  next: string | null
  previous: string | null
  results: Pokemon[]
  pokemons: PokemonData[]
}

export interface Pokemon {
  name: string
  url: string
}

export interface PokemonStats {
  base_stat: number
  stat: {
    name: 'hp' | 'attack' | 'defense' | 'speed' | 'special-attack' | 'special-defense'
  }
}

export interface PokemonData {
  id: number
  name: string
  weight: number
  height: number

  sprites: {
    front_default: string

    other: {
      'dream_world': {
        front_default: string
      }
      'official-artwork': {
        front_default: string
      }
    }

    versions: {
      'generation-v': {
        'black-white': {
          animated: {
            front_default: string
          }
        }
      }
    }
  }

  stats: PokemonStats[]

  types: Array<{
    slot: number
    type: {
      name: 'normal' | 'fighting' | 'flying' | 'poison' | 'ground' | 'rock' | 'bug' | 'ghost' | 'steel' | 'fire' | 'water' | 'grass' | 'electric' | 'psychic' | 'ice' | 'dragon' | 'dark' | 'fairy' | 'unknown' | 'shadow'
      url: string
    }
  }>
}

interface _Language {
  name: string
  url: string
}

export interface PokemonSpecie {
  evolution_chain: {
    url: string
  }

  flavor_text_entries: Array<{
    flavor_text: string
    language: _Language
  }>

  genera: Array<{
    genus: string
    language: _Language
  }>
}
