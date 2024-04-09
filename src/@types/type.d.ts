import { Result } from "@/@types/services";

interface TypeOfPokemons {
  damage_relations: Damagerelations;
  game_indices: Gameindex[];
  generation: Result;
  id: number;
  move_damage_class: Result;
  moves: Result[];
  name: string;
  names: Name[];
  past_damage_relations: Pastdamagerelation[];
  pokemon: Pokemon[];
}

interface Pokemon {
  pokemon: Result;
  slot: number;
}

interface Pastdamagerelation {
  damage_relations: Damagerelations;
  generation: Result;
}

interface Name {
  language: Result;
  name: string;
}

interface Gameindex {
  game_index: number;
  generation: Result;
}

interface Damagerelations {
  double_damage_from?: Result[];
  double_damage_to?: Result[];
  half_damage_from?: Result[];
  half_damage_to?: Result[];
  no_damage_from?: Result[];
  no_damage_to?: Result[];
}
