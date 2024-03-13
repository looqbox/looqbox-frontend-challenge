import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Layout, Flex, Button } from "antd";
import { AppstoreAddOutlined } from "@ant-design/icons";

import NotFoundPage from "../NotFound";
import PokemonInfo from "../../models/PokemonInfo";
import { getPokemonByName } from "../../services/PokemonService";

import PageHeader from "../../components/PageHeader";
import CardPokemon from "../../components/CardPokemon";
import CardPokemonStats from "../../components/CardPokemonStats";
import CardPokemonAbilities from "../../components/CardPokemonAbilities";
import { Loading } from "./styles";

export default function DetailsPage() {
  const { name } = useParams();
  const [loading, setLoading] = useState<boolean>(true);
  const [pokemon, setPokemon] = useState<PokemonInfo>();

  useEffect(() => {
    if (name) getPokemon(name);
  }, [name]);

  const getPokemon = (name: string) => {
    getPokemonByName(name)
      .then((data) => {
        setPokemon(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  };

  if (loading) {
    return (
      <Flex justify="center">
        <Loading />
      </Flex>
    );
  }

  if (!pokemon) {
    return <NotFoundPage />;
  }

  return (
    <Layout>
      <PageHeader>
        <Button
          icon={<AppstoreAddOutlined />}
          onClick={() => console.log("oi")}
          type="default">
          Add to list
        </Button>
      </PageHeader>
      <Layout.Content>
        <Flex wrap="wrap" gap={30} align="stretch" justify="space-between">
          <CardPokemon
            name={pokemon.name}
            title={pokemon.name}
            src={pokemon.sprites.other["official-artwork"].front_default}
            tags={pokemon.types}
          />
          <CardPokemonStats stats={pokemon.stats} />
          <CardPokemonAbilities abilities={pokemon.abilities} />
        </Flex>
      </Layout.Content>
    </Layout>
  );
}
