export interface pokemon {
  name: string;
}

export interface Stats {
  base_stat: number;
  stat: {
    name: string;
  };
}

export interface Moves {
  move: {
    name: string;
  };
}

export interface PokemonTypes {
  type: {
    name: string;
  };
}

export interface PokemonStats {
  id: number;
  name: string;
  sprites: {
    front_default: string;
  };
  types: PokemonTypes[];
  stats: Stats[];
  weight: number;
  moves: Moves[];
}
