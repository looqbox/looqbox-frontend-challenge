import type {
  NamedAPIResource,
  VerboseEffect,
  VerboseFlavorText,
} from './pokemon';

export interface Ability {
  id: number;
  name: string;
  is_main_series: boolean;
  generation: NamedAPIResource;
  names: {
    name: string;
    language: NamedAPIResource;
  }[];
  effect_entries: VerboseEffect[];
  flavor_text_entries: VerboseFlavorText[];
  pokemon: {
    is_hidden: boolean;
    slot: number;
    pokemon: NamedAPIResource;
  }[];
}
