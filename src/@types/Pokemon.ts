export interface PokeAPIResourceResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Array<PokeAPIResourceItem>;
}

interface PokeAPIResourceItem {
  name: string;
  url: string;
}

export interface PokeAPIPokemon {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  is_default: boolean;
  order: number;
  weight: number;
  abilities: Array<PokeAPIAbility>;
  forms: Array<PokeAPIResourceItem>;
  game_indices: Array<PokeAPIGameIndex>;
  held_items: Array<PokeAPIHeldItem>;
  location_area_encounters: string;
  moves: Array<PokeAPIMove>;
  past_types: Array<PokeAPITypePast>;
  sprites: PokeAPISprites;
  cries: PokeAPICries;
  species: PokeAPIResourceItem;
  stats: Array<PokeAPIStat>;
  types: Array<PokeAPIType>;
}

interface PokeAPIAbility {
  is_hidden: boolean;
  slot: number;
  ability: PokeAPIResourceItem;
}

interface PokeAPIGameIndex {
  game_index: string;
  version: PokeAPIResourceItem;
}

interface PokeAPIHeldItem {
  item: PokeAPIResourceItem;
  version_details: Array<PokeAPIHeldItemVersion>;
}

interface PokeAPIHeldItemVersion {
  version: PokeAPIResourceItem;
  rarity: number;
}

interface PokeAPIMove {
  move: PokeAPIResourceItem;
  version_group_details: Array<PokeAPIMoveVersion>;
}

interface PokeAPIMoveVersion {
  move_learn_method: PokeAPIResourceItem;
  version_group: PokeAPIResourceItem;
  level_learned_at: number;
}

interface PokeAPITypePast {
  generation: PokeAPIResourceItem;
  types: Array<PokeAPIType>;
}

interface PokeAPISprites {
  front_default: string;
  front_shiny: string;
  front_female: string;
  front_shiny_female: string;
  back_default: string;
  back_shiny: string;
  back_female: string;
  back_shiny_female: string;
}

interface PokeAPICries {
  latest: string;
  legacy: string;
}

export interface PokeAPIStat {
  stat: PokeAPIResourceItem;
  effort: number;
  base_stat: number;
}

interface PokeAPIType {
  slot: number;
  type: PokeAPIResourceItem;
}
