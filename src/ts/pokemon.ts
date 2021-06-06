/**
 * @description Retorno da PokeApi, endPoint: `/pokemon` 
 */
export interface IndexPokemons {
  next?: string,
  previous?: string,
  results: {
    name: string,
    url: string,
  }[]
}

/**
 * @description Retorno da PokeApi, endPoint: `/pokemon/id` 
 */
export interface ShowPokemon {
  name: string,
  height: number,
  weight: number,
  abilities: {
    ability: {
      name: string,
      url: string,
    }
  }[],
  types: {
    type: {
      name: string,
      url: string,
    }
  }[]
  sprites: {
    other: {
      dream_world: {
        front_default: string,
      }
      ['official-artwork']: {
        front_default: string,
      }
    }
  }
}