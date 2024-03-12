import { iconsMap } from "./PokemonTypes/iconsMap";

interface IPokemonTypeIconProps {
  type: keyof typeof iconsMap;
}

export function PokemonTypeIcon({ type }: IPokemonTypeIconProps) {
  const Icon = iconsMap[type];

  return <Icon />;
}
