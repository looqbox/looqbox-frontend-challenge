interface Stat {
  base_stat: number;
  stat: {
    name: string;
  };
}

interface Type {
  slot: number;
  type: {
    name: string;
  };
}

interface Ability {
  ability: {
    name: string;
  };
}

export interface PokemonDetails {
  name: string;
  types: Type[];
  weight: number;
  height: number;
  stats: Stat[];
  abilities: Ability[];
  imgUrl: string;
}
