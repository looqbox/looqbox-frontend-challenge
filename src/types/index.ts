export interface PokemonListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonListItem[];
}

export interface PokemonListItem {
  name: string;
  url: string;
}

export interface Pokemon {
  id: number;
  name: string;
  height: number;
  weight: number;
  base_experience: number;
  sprites: PokemonSprites;
  stats: PokemonStat[];
  types: PokemonType[];
  moves: PokemonMove[];
  abilities: PokemonAbility[];
}

export interface PokemonSprites {
  front_default: string;
  front_shiny: string;
  other: {
    'official-artwork': {
      front_default: string | null;
      front_shiny: string | null;
    };
  };

}

export interface PokemonStat {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}

export interface PokemonType {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

export interface PokemonMove {
  move: {
    name: string;
    url: string;
  };
}

export interface PokemonAbility {
  ability: {
    name: string;
    url: string;
  };
  isHidden: boolean;
  slot: number;
}

export interface PokemonSpecies {
  flavor_text_entries: {
    flavor_text: string;
    language: { name: string }
    version: { name: string }
  }[];
  genera: {
    genus: string;
    language: { name: string }
  }[];
  color: { name: string }
  is_legendary: boolean;
  is_mythical: boolean;
}

export type TypeName =
  | 'normal' | 'fire' | 'water' | 'electric' | 'grass' | 'ice'
  | 'fighting' | 'poison' | 'ground' | 'flying' | 'psychic' | 'bug'
  | 'rock' | 'ghost' | 'dragon' | 'dark' | 'steel' | 'fairy';