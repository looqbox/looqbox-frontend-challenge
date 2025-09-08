import { httpClient } from "@/infra/clients/http-client";
import { PokemonDto } from "../dtos/pokemon.dto";

export interface PokemonDetailsSearchParams {
  name?: string;
  id?: number;
}

export async function getPokemonDetailsService(
  path: string,
  params: PokemonDetailsSearchParams = {}
) {
  const { data } = await httpClient<unknown, PokemonDto>({
    config: {
      url: path,
      method: "GET",
      params,
    },
  });

  return data;
}
