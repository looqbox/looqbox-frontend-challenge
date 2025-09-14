import { pokemonTypes } from '../constants/pokemonTypes';

const typeColorMap: Record<string, string> = Object.fromEntries(
  pokemonTypes.map((t) => [t.name, t.color]),
);

export function getTypeColor(typeName: string): string {
  return typeColorMap[typeName] ?? '#777';
}
