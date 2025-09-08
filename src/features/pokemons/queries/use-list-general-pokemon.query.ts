import { QueryKey, UseQueryResult } from "@tanstack/react-query";

import { PokemonGeneralDto } from "../dtos/pokemon.dto";
import { useQueryCore } from "@/core/queries/use-query-core";
import {
  PaginationQueryBase,
  PaginationResponseBase,
} from "@/core/types/pagination";
import { useState } from "react";
import { listGeneralPokemonService } from "../services/list-general-pokemon.service";

const initialData: PaginationResponseBase<PokemonGeneralDto> = {
  count: 0,
  next: null,
  previous: null,
  results: [],
};

type UseListGeneralPokemonQueryProps = {
  key: QueryKey;
  path: string;
};

type UseGeneralPokemonListQuery = [
  (params: PaginationQueryBase) => void,
  UseQueryResult<PaginationResponseBase<PokemonGeneralDto>, unknown>,
];

export function useListGeneralPokemonQuery({
  key,
  path,
}: UseListGeneralPokemonQueryProps): UseGeneralPokemonListQuery {
  const [queryParams, setQueryParams] = useState<
    PaginationQueryBase | undefined
  >(undefined);

  const queryCore = useQueryCore({
    key: [key, queryParams],
    path,
    initialData,
    service: (path) => listGeneralPokemonService(path, queryParams),
  });

  const query = queryCore as UseQueryResult<
    PaginationResponseBase<PokemonGeneralDto>,
    unknown
  >;
  const lazy = (params: PaginationQueryBase) => {
    setQueryParams(params);
  };

  return [lazy, query];
}
