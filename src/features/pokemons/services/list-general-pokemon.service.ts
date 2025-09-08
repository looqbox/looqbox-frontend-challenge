import { httpClient } from "@/infra/clients/http-client";
import {
  PaginationQueryBase,
  PaginationResponseBase,
} from "@/core/types/pagination";
import { PokemonGeneralDto } from "../dtos/pokemon.dto";

export async function listGeneralPokemonService(
  path: string,
  params: PaginationQueryBase = {}
) {
  const { data } = await httpClient<
    unknown,
    PaginationResponseBase<PokemonGeneralDto>
  >({
    config: {
      url: path,
      method: "GET",
      params,
    },
  });

  return data;
}
