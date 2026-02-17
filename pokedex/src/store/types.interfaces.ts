export interface Pokemon {
  id: number;
  name: string;
  height: number;
  weight: number;
  base_experience: number;
  sprites: {
    front_default: string | null;
    other?: {
      "official-artwork"?: { front_default: string | null };
      dream_world?: { front_default: string | null };
    };
  };
  stats: {
    base_stat: number;
    stat: {
      name: string;
    };
  }[];
  types: {
    type: {
      name: string;
    };
  }[];
  abilities: {
    ability: { name: string };
    is_hidden: boolean;
  }[];
}

export interface PokemonListItem {
  name: string;
  url: string;
}

export interface PokemonListApiResponse {
  count: number;
  next: string;
  previous: string | null;
  results: PokemonListItem[];
}

export interface PokemonSpecies {
  flavor_text_entries: { flavor_text: string; language: { name: string } }[];
  genera: { genus: string; language: { name: string } }[];
  evolutionChain: { url: string };
}

export interface PokemonState {
  pokemonList: PokemonListItem[];
  searchResults: Pokemon[];
  loading: boolean;
  error: string | null;
  currentPage: number;
  totalCount: number;
}
