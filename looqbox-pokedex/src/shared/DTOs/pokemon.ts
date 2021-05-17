export type IPokeType =
  | 'grass'
  | 'fire'
  | 'water'
  | 'electric'
  | 'bug'
  | 'normal'
  | 'poison'
  | 'ground'
  | 'fairy'
  | 'fighting'
  | 'psychic'
  | 'ghost'
  | 'rock'
  | 'ice'
  | 'dark'
  | 'dragon'
  | 'steel';

export interface IPokemon {
  height: number;
  id: number;
  is_default: boolean;
  name: string;
  order: number;
  sprites: {
    front_default: string;
    other: {
      'official-artwork': {
        front_default: string;
      };
    };
    versions: {
      'generation-v': {
        'black-white': {
          animated: {
            front_default: string;
          };
          front_default: string;
        };
      };
    };
  };
  stats: [
    {
      base_stat: number;
      effort: number;
      stat: {
        name: string;
        url: string;
      };
    },
  ];
  species: {
    name: string;
    url: string;
  };
  moves: Array<IPokeMove>;
  types: [
    {
      slot: number;
      type: {
        name: IPokeType;
        url: string;
      };
    },
  ];
  weight: number;
}

export interface IPokeMove {
  move: {
    name: string;
    url: string;
  };
  version_group_details: [
    {
      level_learned_at: number;
      move_learn_method: { name: string; url: string };
    },
  ];
}

export interface IPokeSpecie {
  evolution_chain: {
    url: string;
  };
}
