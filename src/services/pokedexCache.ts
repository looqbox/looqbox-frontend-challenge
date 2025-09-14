import type { Pokemon } from '../constants/Pokemon';

const map = new Map<string | number, Pokemon>();
export const pokeCache = {
  get: (k: string | number) => map.get(k),
  set: (k: string | number, v: Pokemon) => map.set(k, v),
  has: (k: string | number) => map.has(k),
};
