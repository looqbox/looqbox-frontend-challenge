/* eslint-disable no-unused-vars */
import CardPokemon from "../CardPokemon";
import { PokemonList } from "../../types";
import { Flex, Pagination } from 'antd/lib';
import Searchbar from "@components/ui/Searchbar";
import Loading from "@components/ui/Loading";
import PaginationComponent from "@/components/ui/Pagination";

type ListPokemonProps = {
    data: PokemonList;
    onSearch: (_name: string) => void;
    onSearchList: (_pageNumber: number, pageSize?: number) => void;
}

export default function ListPokemon({data, onSearch, onSearchList}: ListPokemonProps) {

  if(!data || !data.results) return (
    <Flex vertical align="center">
      <Loading />
    </Flex>
  );

  return(
    <Flex vertical align="center">
      <Searchbar placeholder="Search by name or ID" onSearch={onSearch} />
      <PaginationComponent total={data.count} onSearchList={onSearchList} />
      <Flex wrap="wrap" gap="large" justify="center" style={{ margin: '10px 0' }}>
        { data.results.map((pokemon) => (
          <CardPokemon key={pokemon.id} pokemon={pokemon} />
        ))}
      </Flex>
      <PaginationComponent total={data.count} onSearchList={onSearchList} />
    </Flex>
  );
}