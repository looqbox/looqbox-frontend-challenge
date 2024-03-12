export default interface PokemonInfo {
  id: number;
  name: string;
  height: number;
  weight: number;
  order: number;
  is_default: boolean;
  base_experience: number;
  location_area_encounters: string;
  species: DefaultType;
  abilities: Ability[];
  cries: Cries;
  held_items: HeldItem [];
  moves: Move[];
  sprites: Sprite;
  stats: Stat[];
  types: Type[];
}

type DefaultType = {
  name: string,
  url: string,
};

export type Ability = {
  ability: DefaultType,
  is_hidden: boolean,
  slot: number,
};

type Cries = {
  latest: string,
  legacy: string,
};

type HeldItem = {
  item: DefaultType,
  version_details: {
    rarity: number,
    version: DefaultType,
  }
};

type Move = {
  move: DefaultType,
  version_group_details: {
    level_learned_at: number,
    move_learn_method: DefaultType,
    version_group: DefaultType,
  }
};

type Sprite = {
  other: {
    dream_world: {
      front_default: string;
      front_female: string;
    },
    home: {
      front_default: string;
      front_female: string;
      front_shiny: string;
      front_shiny_female: string;
    },
    ["official-artwork"]: {
      front_default: string;
      front_shiny: string;
    },
  }
};

export type Stat = {
  base_stat: number,
  effort: number,
  stat: DefaultType,
};

type Type = {
  slot: number,
  type: DefaultType,
};
