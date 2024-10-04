// src/hooks/usePokemonSearch.ts
import { useState } from "react";
import useFetchPokemons from "./useFetchPokemons";
import { Pokemon } from "../types/Pokemon";
import { RootState } from "../store/store";
import { useSelector } from "react-redux";

const usePokemonSearch = () => {
  const { nextPage, prevPage, pagination, itemsPerPage, totalPages } = useFetchPokemons();
  const [searchValue, setSearchValue] = useState("");
  const { pokemons: data, loading } = useSelector((data: RootState) => data.pokemon)

  const handleSearch = (value: string) => {
    setSearchValue(value.trim().toLowerCase());
  };

  const handlePageChange = (page: number) => {
    if (page > pagination) {
      nextPage();
    } else {
      prevPage();
    }
  };

  // Filtrar pokémons pelo valor da pesquisa
  const filteredPokemons = data.filter((pokemon: Pokemon) =>
    pokemon.name.toLowerCase().includes(searchValue)
  );

  const pokemonsToShow = filteredPokemons;

  return {
    pokemonsToShow,
    handleSearch,
    handlePageChange,
    pagination,
    itemsPerPage,
    loading,
    totalPages,
    searchValue,
  };
};

export default usePokemonSearch;
