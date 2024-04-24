import { Flex, Layout } from "antd";
import {
  useGetPokemonHabitatByNameQuery,
  useGetPokemonListQuery,
} from "../state/services/pokemon";
import { useEffect, useState } from "react";
const { Content } = Layout;
import { Pagination } from "antd";
import { ReferenceToEndpoint } from "../models/pokemon.model";
import usePagination from "../hooks/usePagination";
import PokemonCard from "../components/PokemonCard";
import ListSorter from "../components/ListSorter";
import SearchBar from "../components/SearchBar";

export default function Home() {
  const { qParams, onPageChange, queryOnlyPageSize } = usePagination();

  const [selectedHabitat, setSelectedHabitat] = useState("");
  const { data: habitatInfo, error: habitatInfoError } =
    useGetPokemonHabitatByNameQuery(selectedHabitat, {
      skip: selectedHabitat === "",
    });

  const {
    data: pokemonList,
    isLoading: loadingPokemonList,
    error: pokemonListError,
  } = useGetPokemonListQuery(qParams);

  const [pokemons, setPokemons] = useState<{
    renderPokemons: ReferenceToEndpoint[];
    totalCount: number;
  }>({
    renderPokemons: pokemonList?.results ?? [],
    totalCount: pokemonList?.count ?? 0,
  });

  useEffect(() => {
    if (selectedHabitat !== "") {
      const pokesToQuery = queryOnlyPageSize(habitatInfo?.pokemon_species);
      setPokemons({
        renderPokemons: pokesToQuery,
        totalCount: habitatInfo?.pokemon_species?.length ?? 0,
      });
    } else {
      setPokemons({
        renderPokemons: pokemonList?.results ?? [],
        totalCount: pokemonList?.count ?? 0,
      });
    }
  }, [
    habitatInfo?.pokemon_species,
    pokemonList,
    queryOnlyPageSize,
    selectedHabitat,
  ]);

  if (loadingPokemonList) return <p>Loading pókemons...</p>;
  if (pokemonListError)
    return (
      <p>
        Error fetching pokémons. Check your internet connection and reload the
        page.
      </p>
    );

  return (
    <Layout>
      <Content style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <ListSorter setSelectedHabitat={setSelectedHabitat} />
        <SearchBar />
        <Flex wrap="wrap" justify="center" gap="24px">
          {pokemons?.renderPokemons.map((poke) => {
            return <PokemonCard name={poke?.name} key={poke.name} />;
          })}
        </Flex>
        <Pagination
          pageSizeOptions={[12, 24, 36, 60, 96]}
          defaultPageSize={12}
          defaultCurrent={1}
          total={pokemons?.totalCount}
          onChange={onPageChange}
          showSizeChanger
        />
      </Content>
    </Layout>
  );
}
