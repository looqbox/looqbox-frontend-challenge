"use client";

import { useState } from "react";
import { QueryKey, type UseQueryResult } from "@tanstack/react-query";

import { PokemonDto } from "../dtos/pokemon.dto";
import {
  getPokemonDetailsService,
  PokemonDetailsSearchParams,
} from "../services/get-pokemon-details.service";
import { useQueryCore } from "@/core/queries/use-query-core";

const initialData = {} as PokemonDto;

type UsePokemonDetailsQuery = [
  (params: PokemonDetailsSearchParams) => void,
  UseQueryResult<PokemonDto, unknown>,
];

type UsePokemonDetailsQueryProps = {
  key: QueryKey;
  enabled: boolean;
  path: string | ((params?: PokemonDetailsSearchParams) => string);
};

export function usePokemonDetailsQuery({
  key,
  path,
  enabled,
}: UsePokemonDetailsQueryProps): UsePokemonDetailsQuery {
  const [isEnabled, setIsEnabled] = useState(enabled);
  const [queryParams, setQueryParams] = useState<
    PokemonDetailsSearchParams | undefined
  >(undefined);

  const queryCore = useQueryCore({
    initialData,
    enabled: isEnabled,
    key: [key, queryParams],
    path: typeof path === "string" ? path : path(queryParams),
    service: (uri) => getPokemonDetailsService(uri, queryParams),
  });

  const query = queryCore as UseQueryResult<PokemonDto, unknown>;
  const updateParams = (params: PokemonDetailsSearchParams) => {
    setQueryParams(params);
    setIsEnabled(true);
  };

  return [updateParams, query];
}
