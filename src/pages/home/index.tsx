import { CloseCircleFilled, LoadingOutlined } from "@ant-design/icons";
import { Button, Spin, Tooltip } from "antd";
import Search from "antd/es/input/Search";
import { useContext, useEffect, useMemo, useState } from "react";
import { ThemeContext } from "styled-components";

import { Pagination as PaginationProps, Result } from "@/@types/services";
import { PokemonsList } from "@/components/PokemonsList";
import { useGetPokemons } from "@/queries/pokemons";
import { initialPagination, paginatedPokemons } from "@/utils/pagination";

import * as S from "./styles";

const filterPokemons = (pokemons: Result[], searchQuery: string) => {
  if (!searchQuery) return pokemons;

  return pokemons.filter((pokemon) => {
    const pokemonName = pokemon.name.toLowerCase();
    const searchQueryLower = searchQuery.toLowerCase();
    const pokemonNumber = pokemon.url.split("/")[6].toString();

    return (
      pokemonName.includes(searchQueryLower) ||
      pokemonNumber.includes(searchQueryLower)
    );
  });
};

export const HomePage = () => {
  const theme = useContext(ThemeContext);

  const [pagination, setPagination] =
    useState<PaginationProps>(initialPagination);
  const [pokemons, setPokemons] = useState<Result[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  const { data, isLoading } = useGetPokemons();

  const filteredPokemons = useMemo(
    () => filterPokemons(data?.results || [], searchQuery),
    [data, searchQuery],
  );
  const totalOfPokemons = filteredPokemons.length || 0;

  useEffect(() => {
    const pokemons = paginatedPokemons(
      filteredPokemons,
      pagination.page,
      pagination.pageSize,
    );

    setPokemons(() => [...pokemons]);
  }, [filteredPokemons, pagination, searchQuery]);

  if (isLoading) {
    return (
      <Spin
        spinning={true}
        fullscreen
        indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />}
      />
    );
  }

  const handlePagination = (page: number, pageSize: number) => {
    setPagination((prev) => ({ ...prev, page, pageSize }));
  };

  const handleCancelSearch = () => {
    setSearchQuery("");
  };

  const handleSearch = (value: string) => {
    setSearchQuery(value);
    setPagination((prev) => ({ ...prev, page: 1 }));
  };

  return (
    <S.Space direction="vertical" align="center">
      <S.SearchRow>
        <p>
          Total of <strong>{totalOfPokemons}</strong> pokemons
        </p>
        <Search
          placeholder="Search pokemons by name or number..."
          enterButton="Catch them all!"
          size="large"
          onSearch={handleSearch}
          suffix={
            <Tooltip
              title="Clear search"
              color={theme?.pokemon.colors.main.primary}
            >
              <Button onClick={handleCancelSearch} type="text">
                <CloseCircleFilled style={{ color: "gray" }} />
              </Button>
            </Tooltip>
          }
        />
      </S.SearchRow>
      <PokemonsList
        isLoading={isLoading}
        pokemons={pokemons}
        page={pagination.page}
        pageSize={pagination.pageSize}
        total={totalOfPokemons}
        handlePagination={handlePagination}
      />
    </S.Space>
  );
};
