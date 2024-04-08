import { PokemonSpecieColor, PokemonTypesOfSpecies } from "@/@types/theme";
import { pokemonColors } from "@/styles/colors";

export const getColorBySpecies = (type: string): PokemonSpecieColor => {
  const species = type.toLowerCase() as PokemonTypesOfSpecies;
  return pokemonColors.species[species] || pokemonColors.species.default;
};
