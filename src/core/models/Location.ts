import { NamedAPIResource } from "./Pokemon";

type Name = {
  name: string;
  language: NamedAPIResource;
};

type GenerationGameIndex = {
  gameIndex: number;
  generation: NamedAPIResource;
};

export interface Location {
  id: number;
  name: string;
  region: NamedAPIResource;
  names: Name[];
  game_indices: GenerationGameIndex[];
  areas: NamedAPIResource[];
}
