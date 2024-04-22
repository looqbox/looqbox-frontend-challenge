import axios from "axios";
import PokeAPI from "../../models/PokeAPI";

export const getPokemonsUrl = async (url?: string): Promise<PokeAPI> => {
  if (url === undefined) {
    url = "https://pokeapi.co/api/v2/pokemon";
  }
  const response = await axios.get(url);

  return response.data;
};
