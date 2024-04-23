import { IPokemonType } from "../types/models";
import { POKEMON_TYPE_COLORS } from "./tokens";

export const handlePokemonTypeColor = (pokemonMainType: any) => {
  const typeColor: string = POKEMON_TYPE_COLORS[pokemonMainType] || POKEMON_TYPE_COLORS.default;
  return typeColor;
};

export const returnPokemonTypesNames = (types: IPokemonType[]) => {
  var pokemonTypes: string[] = [];
  if(types.length > 0) pokemonTypes = types.map((typeInfo: IPokemonType) => typeInfo.type.name);

  return pokemonTypes;
};

export const handleIDToNumber = (id: number) => {
  return `#${id.toString().padStart(3, '0')}`;
};

export const handlePokemonCardAnimationDelay = (index: number) => {
  const isMobile = window.innerWidth < 991;
  const delay = 0.2;

  return `${Math.floor(index / (isMobile ? 2 : 3)) * delay}s`;
};