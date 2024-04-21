export type Pokemon = {
  id: number;
  name: string;
  sprites: PokemonSprites;
  types: PokemonType[];
  abilities: PokemonAbility[];
  stats: PokemonStat[];
  weight: number;
  height: number;
  species: PokemonSpecies;
};

export type DefinedPokemonType =
  | 'normal'
  | 'fighting'
  | 'flying'
  | 'poison'
  | 'ground'
  | 'rock'
  | 'bug'
  | 'ghost'
  | 'steel'
  | 'fire'
  | 'water'
  | 'grass'
  | 'electric'
  | 'psychic'
  | 'ice'
  | 'dragon'
  | 'dark'
  | 'fairy';

export type PokemonResponseWithoutSpecies = {
  id: number;
  name: string;
  sprites: PokemonSprites;
  types: PokemonType[];
  abilities: PokemonAbility[];
  stats: PokemonStat[];
  weight: number;
  height: number;
  species: { name: string; url: string };
};

export type PokemonSpecies = {
  id: number;
  name: string;
  color: { name: string; url: string };
  shape: { name: string; url: string };
  evolves_from_species: { name: string; url: string } | null;
  egg_groups: Array<{ name: string; url: string }>;
  generation: { name: string; url: string };
  flavor_text_entries: Array<{
    flavor_text: string;
    language: { name: string };
    version: { name: string };
  }>;
  genera: Array<{
    genus: string;
    language: {
      name: string;
    };
  }>;
  evolution_chain: { url: string };
  habitat: { name: string; url: string };
  capture_rate: number;
  base_happiness: number;
};

export type PokemonSprites = {
  front_default: string;
  other: {
    dream_world: {
      front_default: string;
    };
    home: {
      front_default: string;
    };
    'official-artwork': {
      front_default: string;
    };
  };
};

export type PokemonType = {
  slot: number;
  type: { name: DefinedPokemonType; url: string };
};

export type PokemonAbility = {
  ability: { name: string; url: string };
  is_hidden: boolean;
  slot: number;
};

export type PokemonStat = {
  base_stat: number;
  stat: { name: string; url: string };
};
