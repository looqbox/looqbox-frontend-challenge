"use client";

import { useCallback } from "react";

import { QueryKey } from "@tanstack/react-query";
import { PokemonDetailsSearchParams } from "../services/get-pokemon-details.service";
import { usePokemonDetailsQuery } from "../queries/use-pokemon-details.query";
import { removeUndefinedFromObject } from "@/core/utils/object";

type UsePokemonDetailsProps = {
  key: QueryKey;
  enabled: boolean;
  path: string | ((queryParams?: PokemonDetailsSearchParams) => string);
};

export function usePokemonDetails({
  key,
  path,
  enabled,
}: UsePokemonDetailsProps) {
  const [getPokemonDetailsLazy, { data, isFetching }] = usePokemonDetailsQuery({
    key,
    path,
    enabled,
  });

  const handleSearch = useCallback(
    (searchParams: any) => {
      const apiParams: PokemonDetailsSearchParams = removeUndefinedFromObject({
        id: searchParams.code,
        name: searchParams.name,
      });

      getPokemonDetailsLazy(apiParams);
    },
    [getPokemonDetailsLazy]
  );

  return {
    pokemonIsLoading: isFetching,
    pokemon: data,
    getPokemonDetailsLazy,
    handleSearch,
  };
}
