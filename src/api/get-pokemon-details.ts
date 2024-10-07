import { Pokemon } from "@/@types/Pokemon";
import { api } from "@/lib/api";

interface GetPokemonDetailsParams {
  pokemonId: number;
}

export async function getPokemonDetails({
  pokemonId,
}: GetPokemonDetailsParams): Promise<Pokemon> {
  return api(`/pokemon/${pokemonId}`).then((result) => result.json());
}
