import axios from "axios";
import Pokemon, { NamedAPIResource } from "../../models/Pokemon";

export const getPokemons = async (pokemons: NamedAPIResource[]) => {
  const result: Pokemon[] = await Promise.all(
    pokemons.map(async (pokemon: NamedAPIResource) => {
      const response = await axios.get(pokemon.url);
      return response.data as Pokemon;
    })
  );

  return result ? result : [];
};
