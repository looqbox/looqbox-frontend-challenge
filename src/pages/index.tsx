import { createFileRoute } from "@tanstack/react-router";

import { ContainerLayout } from "@/design-system/layouts/container.layout";
import { ListLayout } from "@/design-system/layouts/list.layout";
import { PokemonCard } from "@/features/pokemons/components/pokemon-card";
import { pokemonsEndpoints } from "@/features/pokemons/constants/pokemons.endpoints";
import { pokemonsKeys } from "@/features/pokemons/constants/pokemons.keys";
import { useGeneralPokemonList } from "@/features/pokemons/use-cases/use-list-general-pokemon";
import { PokemonTools } from "@/features/pokemons/components/pokemon-tools";
import { usePokemonDetails } from "@/features/pokemons/use-cases/use-pokemon-details";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const {
    pokemonList,
    count,
    pageSize,
    pokemonListIsLoading,
    handlePaginationChange,
  } = useGeneralPokemonList({
    key: [pokemonsKeys.list],
    path: pokemonsEndpoints.base(),
  });
  const { getPokemonDetailsLazy, pokemon, pokemonIsLoading } =
    usePokemonDetails({
      enabled: false,
      key: [pokemonsKeys.byName],
      path: (params) => pokemonsEndpoints.byName(params?.name as string),
    });
  const list = pokemon?.id ? [{ ...pokemon, url: "" }] : pokemonList;
  const paginationData = pokemon?.id
    ? { count: 1, pageSize }
    : { count, pageSize };

  return (
    <ContainerLayout>
      <PokemonTools
        onSearch={(searchParams) => getPokemonDetailsLazy(searchParams)}
      />

      <ListLayout
        data={list}
        paginationData={paginationData}
        onPaginationChange={(page, pageSize) =>
          handlePaginationChange(page, pageSize)
        }
        isLoading={pokemonListIsLoading || pokemonIsLoading}
        renderListItem={(pokemonItem) => <PokemonCard {...pokemonItem} />}
      />
    </ContainerLayout>
  );
}
