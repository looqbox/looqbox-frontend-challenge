export type PokemonListItem = {
  name: string;
  url: string;
};

export type PokemonListResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonListItem[];
};

export type Pokemon = {
  id: number;
  name: string;
  height: number;
  weight: number;
  base_experience: number;
  species: { name: string; url: string };
  sprites: {
    front_default: string | null;
    back_default: string | null;
    other?: {
      ["official-artwork"]?: { front_default: string | null };
    };
  };
  types: Array<{ type: { name: string } }>;
  abilities: Array<{ ability: { name: string } }>;
  stats: Array<{
    base_stat: number;
    stat: { name: string };
  }>;
};

export type PokemonTypeResponse = {
  pokemon: Array<{
    pokemon: PokemonListItem;
    slot: number;
  }>;
};

export type PokemonSpeciesResponse = {
  flavor_text_entries: Array<{
    flavor_text: string;
    language: { name: string };
  }>;
  genera: Array<{
    genus: string;
    language: { name: string };
  }>;
  habitat: { name: string } | null;
  growth_rate: { name: string };
  capture_rate: number;
  evolution_chain: { url: string };
};

export type EvolutionChainLink = {
  species: { name: string; url: string };
  evolves_to: EvolutionChainLink[];
};

export type EvolutionChainResponse = {
  chain: EvolutionChainLink;
};
