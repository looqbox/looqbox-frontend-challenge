import { Pagination } from "antd";
import { DashboardContainer, ListContainer, SearchContainer } from "./styles";
import { PokemonCard } from "@/components/PokemonCard";
import { useSearchParams } from "react-router-dom";
import { z } from "zod";
import { GridLoading } from "@/components/GridLoading";
import { PokemonList, usePokemons } from "@/contexts/PokemonContext";
import { useCallback, useEffect, useState } from "react";

export function Dashboard() {
  const { pokemons, total } = usePokemons();
  const [searchParams, setSearchParams] = useSearchParams();
  const [displayPokemons, setDisplayPokemons] = useState<PokemonList[]>([]);

  const pageIndex = z.coerce.number().parse(searchParams.get("page") ?? "1");
  const pageSize = z.coerce
    .number()
    .parse(searchParams.get("pageSize") ?? "20");

  const getPokemonsByPage = useCallback(
    (page: number, pageSize: number) => {
      if (pokemons) {
        setDisplayPokemons(
          pokemons.slice((page - 1) * pageSize, page * pageSize)
        );
      }
    },
    [pokemons]
  );

  useEffect(() => {
    getPokemonsByPage(pageIndex, pageSize);
  }, [getPokemonsByPage, pageIndex, pokemons, pageSize]);

  function handlePageChange(page: number, pageSize: number) {
    setSearchParams((prev) => {
      prev.set("page", String(page));
      prev.set("pageSize", String(pageSize));
      return prev;
    });
  }

  return (
    <DashboardContainer>
      <SearchContainer
        placeholder="Search pokémon name"
        enterButton="Search"
        size="large"
      />

      {displayPokemons.length === 0 ? (
        <GridLoading />
      ) : (
        <>
          <ListContainer>
            {displayPokemons.map((result) => (
              <PokemonCard
                key={result.name}
                name={result.name}
                url={result.url}
              />
            ))}
          </ListContainer>

          <Pagination
            align="center"
            current={pageIndex}
            total={total}
            onChange={handlePageChange}
            pageSize={pageSize}
          />
        </>
      )}
    </DashboardContainer>
  );
}
