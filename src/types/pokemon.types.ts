export interface ResultPokemonList {
  count: number,
  next: string | null,
  previous: string | null,
  results: Pokemon[],
  pokemons: PokemonData[],
}

export interface Pokemon {
  name: string;
  url: string;
}
  
export interface PokemonData {
  id: number;
  name: string;
  weight: number;
  height: number;

  sprites: {
    front_default: string;

    other: {
      "dream_world": {
        front_default: string;
      }
    },

    versions: {
      "generation-v": {
        "black-white": {
          animated: {
            front_default: string
          }
        }
      }
    }
  };
  
  types: {
    slot: number;
    type: {
      name: 'normal' | 'fighting' | 'flying' | 'poison' | 'ground' | 'rock' | 'bug' | 'ghost' | 'steel' | 'fire' | 'water' | 'grass' | 'electric' | 'psychic' | 'ice' | 'dragon' | 'dark' | 'fairy' | 'unknown' | 'shadow',
      url: string;
    };
  }[];
}
  