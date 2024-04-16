import { Ability } from "./ability.model";
import { Sprites } from "./sprites.model";

export interface Pokemon {
  id: number;
  name: string;
  sprites: Sprites;
  abilities: Ability[];
  height: number;
  weight: number;
  gender_rate: number;
  types: {
    slot: number;
    type: Type;
  }[];
}

interface Type {
  name: string;
  url: string;
}
