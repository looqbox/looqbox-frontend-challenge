export interface IPokemonType {
	slot: number,
	type: {
		name: string,
		url: string
	}
}

export interface ISprite {
  other: {
    'showdown': {
      front_default: string
    },
    'official-artwork': {
      front_default: string
    }
  }
}

export interface ISpecies {
  name: string,
  url: string
}

export interface IPokemonDescriptionText {
  flavor_text: string,
  language: {
    name: string
  }
}

export interface ISpeciesData {
  flavor_text_entries: IPokemonDescriptionText[],
  evolution_chain: {
    url: string
  }
}

export interface IChainData {
  chain: IChain
}

export interface IChain {
  evolves_to: [
    IChain
  ],
  species: ISpecies
}

export interface IBaseStat {
  name: string,
  url: number
}

export interface IBaseStats {
  base_stat: number,
  stat: IBaseStat
}


export interface IPokemon {
  id: number,
  name: string,
  sprites: ISprite,
  number: string,
  types: IPokemonType[],
  species: ISpecies,
  height: number,
  weight: number,
  stats: IBaseStats[]
}

export interface IPokemonList {
  name: string,
  url: string
}