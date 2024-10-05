import { Pokemon } from "@/@types/Pokemon";
import { api } from "@/lib/axios";

interface GetPokemonDetailsParams {
  pokemonId: number;
}

export async function getPokemonDetails({
  pokemonId,
}: GetPokemonDetailsParams) {
  const response = await api.get<Pokemon>(`/pokemon/${pokemonId}`);

  return response.data;
}
