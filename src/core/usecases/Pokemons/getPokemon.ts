import axios from "axios";
import Pokemon from "../../models/Pokemon";

export default async function getPokemon(name: string): Promise<Pokemon> {
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);

  return response.data as Pokemon;
}
