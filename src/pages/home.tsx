import { Card, Flex, Input, Layout } from "antd";
import {
  useGetPokemonByNameQuery,
  useGetPokemonListQuery,
} from "../services/pokemon";
import { Link, useSubmit } from "react-router-dom";
import { useEffect, useState } from "react";
const { Search } = Input;
const { Content } = Layout;
import { message } from "antd";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [messageApi, contextHolder] = message.useMessage();

  const { data, isLoading, error } = useGetPokemonListQuery();

  const {
    data: pokemon,
    error: pokemonError,
    isLoading: pokemonLoading,
  } = useGetPokemonByNameQuery(searchTerm, { skip: searchTerm === "" });

  const submit = useSubmit();

  const goToPokemon = (nameOrId: string) => {
    setSearchTerm(nameOrId);
  };

  useEffect(() => {
    if (pokemon) {
      submit(searchTerm, {
        method: "post",
        action: `pokemon/${searchTerm}`,
        encType: "text/plain",
      });
    }
    if (pokemonError) {
      messageApi.open({
        type: "error",
        content:
          "Pokémon not found. Check your spelling\nor try a different one.",
      });
    }
  }, [messageApi, pokemon, pokemonError, searchTerm, submit]);

  if (isLoading) return <p>Loading pókemons...</p>;
  if (error)
    return (
      <p>
        Error fetching pokémons. Check your internet connection and reload the
        page.
      </p>
    );

  return (
    <Layout>
      <Content style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <Search
          placeholder="input search text"
          enterButton="Search"
          size="large"
          loading={pokemonLoading}
          onSearch={(e) => goToPokemon(e)}
          onPressEnter={(e) =>
            goToPokemon((e?.target as HTMLInputElement)?.value)
          }
        />
        <Flex wrap="wrap" justify="center" gap="24px">
          {data?.results?.map((poke) => {
            return <PokemonCard name={poke?.name} key={poke.name} />;
          })}
        </Flex>
      </Content>
      {contextHolder}
    </Layout>
  );
}

function PokemonCard({ name }: { name: string }) {
  const { data: pokemon, error, isLoading } = useGetPokemonByNameQuery(name);

  if (isLoading) return <div>Loading {name}...</div>;
  if (error) return <div>Error: failed to fetch {name}</div>;

  return (
    <Link to={`pokemon/${pokemon?.name}`}>
      <Card title={pokemon?.name} style={{ width: "376px" }}>
        <p>{pokemon?.name}</p>
      </Card>
    </Link>
  );
}
