import type { NamedAPIResource, VerboseEffect } from './pokemon';

export interface Move {
  id: number;
  name: string;
  accuracy: number | null;
  pp: number | null;
  priority: number;
  power: number | null;
  effect_entries: VerboseEffect[];
  type: NamedAPIResource;
}
