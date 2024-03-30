/* eslint-disable no-unused-vars */
import { useState } from 'react';
import CardPokemon from "../CardPokemon";
import { PokemonList } from "../../types";
import { Flex, Pagination } from 'antd/lib';
import Searchbar from "@components/ui/Searchbar";
import Loading from "@components/ui/Loading";

type ListPokemonProps = {
    data: PokemonList;
    onSearch: (_name: string) => void;
    onSearchList: (_pageNumber: number, pageSize?: number) => void;
}

export default function ListPokemon({data, onSearch, onSearchList}: ListPokemonProps) {
  const [current, setCurrent] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(20);

  const handleChangePagination = (page: number, size: number) => {
    setCurrent(page);
    onSearchList(page, size);
  };

  const handleChangeSize = (current: number, size: number) => {
    setCurrent(current);
    setPageSize(size);
    onSearchList(current, size);
  };

  if(!data || !data.results) return (
    <Flex vertical align="center">
      <Loading />
    </Flex>
  );

  return(
    <Flex vertical align="center">
      <Searchbar placeholder="Search by name or ID" onSearch={onSearch} />
      <Pagination
        current={current}
        onChange={handleChangePagination}
        pageSize={pageSize}
        onShowSizeChange={handleChangeSize}
        responsive
        total={data.count}
      />
      <Flex wrap="wrap" gap="large" justify="center" style={{ margin: '10px 0' }}>
        { data.results.map((pokemon) => (
          <CardPokemon key={pokemon.id} pokemon={pokemon} />
        ))}
      </Flex>
      <Pagination current={current} onChange={handleChangePagination} responsive total={data.count} />
    </Flex>
  );
}