export interface IResultPokemonList {
  count: number
  next: string | null
  previous: string | null
  results: IPokemon[]
  pokemons: IPokemonData[]
}

export interface IPokemon {
  name: string
  url: string
}

export interface IPokemonStats {
  base_stat: number
  stat: {
    name: 'hp' | 'attack' | 'defense' | 'speed' | 'special-attack' | 'special-defense'
  }
}

export interface IPokemonData {
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

  stats: IPokemonStats[]

  types: Array<{
    slot: number
    type: {
      name: 'normal' | 'fighting' | 'flying' | 'poison' | 'ground' | 'rock' | 'bug' | 'ghost' | 'steel' | 'fire' | 'water' | 'grass' | 'electric' | 'psychic' | 'ice' | 'dragon' | 'dark' | 'fairy' | 'unknown' | 'shadow'
      url: string
    }
  }>
}

interface _ILanguage {
  name: string
  url: string
}

export interface IPokemonSpecie {
  evolution_chain: {
    url: string
  }

  flavor_text_entries: Array<{
    flavor_text: string
    language: _ILanguage
  }>

  genera: Array<{
    genus: string
    language: _ILanguage
  }>
}
