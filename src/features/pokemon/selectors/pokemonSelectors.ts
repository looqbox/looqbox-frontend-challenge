import type { RootState } from "../../../app/store/store";

export function selectPokemonIdByName(state: RootState, name: string): number | null {
  const normalized = name.trim().toLowerCase();
  const item = state.pokemon.index.find((p) => p.name.toLowerCase() === normalized);
  return item?.id ?? null;
}
