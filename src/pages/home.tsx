import { Flex, Layout, Spin, message } from "antd";
import {
  useGetPokemonHabitatByNameQuery,
  useGetPokemonListQuery,
} from "../state/services/pokemon";
import { useEffect, useState } from "react";
const { Content } = Layout;
import { ReferenceToEndpoint } from "../models/pokemon.model";
import ListSorter from "../components/ListSorter";
import SearchBar from "../components/SearchBar";
import ListPagination from "../components/ListPagination";
import useQueryParams from "../hooks/useQueryParams";
import PokemonCard from "../components/PokemonCard";

export default function Home() {
  const { page, pageSize, habitat } = useQueryParams();
  const { data: habitatInfo } = useGetPokemonHabitatByNameQuery(
    habitat!,
    {
      skip: habitat === "",
    }
  );

  const offset = (page - 1) * pageSize;

  const queryParams = new URLSearchParams({
    offset: offset.toString(),
    limit: pageSize.toString(),
  }).toString();

  const {
    data: pokemonList,
    isLoading: loadingPokemonList,
    error: pokemonListError,
  } = useGetPokemonListQuery(queryParams);

  const [pokemons, setPokemons] = useState<{
    renderPokemons: ReferenceToEndpoint[];
    totalCount: number;
  }>({
    renderPokemons: pokemonList?.results ?? [],
    totalCount: pokemonList?.count ?? 0,
  });

  useEffect(() => {
    if (habitat !== "") {
      const pokesToQuery =
        habitatInfo?.pokemon_species.slice(offset, offset + pageSize) ?? [];
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
    offset,
    pageSize,
    pokemonList,
    habitat,
  ]);

  const [messageApi, contextHolder] = message.useMessage();
  if (loadingPokemonList || pokemonListError) {
    if (pokemonListError) {
      messageApi.open({
        type: "error",
        content:
          "Failed to load pokémon. Check your connection and refresh the page.",
      });
    }
    return (
      <div
        style={{
          width: `100vw`,
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Spin size="large" />
        {contextHolder}
      </div>
    );
  }

  return (
    <Layout>
      <Content
        style={{
          maxWidth: "1200px",
          margin: "40px auto",
          display: "flex",
          alignItems: `center`,
          gap: "48px",
          flexDirection: "column",
          minHeight: `${(pokemons.renderPokemons.length / 3) * 400}px`,
        }}
      >
        <ListSorter />
        <SearchBar />
        <Flex wrap="wrap" justify="center" gap="24px">
          {pokemons?.renderPokemons.map((poke, i) => {
            return <PokemonCard name={poke?.name} key={poke.name + i} />;
          })}
        </Flex>
        <ListPagination pokemonsCount={pokemons?.totalCount} />
      </Content>
    </Layout>
  );
}
