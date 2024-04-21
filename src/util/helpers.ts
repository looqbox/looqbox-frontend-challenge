import { POKEMON_TYPE_COLORS } from "./tokens";

export const handlePokemonTypeColor = (pokemonMainType: any) => {
  const typeColor: string = POKEMON_TYPE_COLORS[pokemonMainType] || POKEMON_TYPE_COLORS.default;
  return typeColor;
};

export const handlePokemonCardAnimationDelay = (index: number) => {
  const isMobile = window.innerWidth < 991;
  const delay = 0.2;

  return `${Math.floor(index / (isMobile ? 2 : 3)) * delay}s`;
};