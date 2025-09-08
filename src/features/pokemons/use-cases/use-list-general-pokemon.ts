"use client";

import { useCallback, useMemo, useState } from "react";

import { QueryKey } from "@tanstack/react-query";
import { getIdFromUrl } from "@/features/utils/get-id-from-url";
import { useListGeneralPokemonQuery } from "../queries/use-list-general-pokemon.query";

type UseGeneralPokemonListProps = {
  key: QueryKey;
  path: string;
};

export function useGeneralPokemonList({
  key,
  path,
}: UseGeneralPokemonListProps) {
  const [getGeneralPokemonListLazy, { data, isFetching }] =
    useListGeneralPokemonQuery({
      key,
      path,
    });
  const pokemonList = useMemo(
    () =>
      (data?.results ?? []).map((p) => ({
        ...p,
        id: Number(getIdFromUrl(p.url)),
      })),

    [data?.results]
  );

  const [pageSize, setPageSize] = useState<number>(20);

  const handlePaginationChange = useCallback(
    (page: number, pageSize: number) => {
      setPageSize(pageSize);
      const offset = (page - 1) * pageSize;
      const limit = pageSize;
      const updatedParams = { offset, limit };

      getGeneralPokemonListLazy(updatedParams);
    },
    [getGeneralPokemonListLazy]
  );

  return {
    pokemonListIsLoading: isFetching,
    pokemonList,
    pageSize,
    handlePaginationChange,
    count: data?.count ?? 0,
    getGeneralPokemonListLazy,
  };
}
