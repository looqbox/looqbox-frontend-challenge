import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Divider, Layout, Flex, Button } from "antd";
import { Content } from "antd/es/layout/layout";
import PageHeader from "../../components/PageHeader";
import CardPokemonInfo from "../../components/CardPokemonInfo";
import CardPokemonStats from "../../components/CardPokemonStats";
import CardPokemonAbilities from "../../components/CardPokemonAbilities";
import { getPokemonByName } from "../../services/PokemonService";
import PokemonInfo from "../../models/PokemonInfo";
import { AppstoreAddOutlined } from "@ant-design/icons";

export default function DetailsPage() {
  const {name} = useParams();
  const [pokemon, setPokemon] = useState<PokemonInfo>();

  useEffect(() => {
    if (name) getPokemon(name);
  }, [name]);

  const getPokemon = (name: string) => {
    getPokemonByName(name)
      .then(data => setPokemon(data))
      .catch(err => console.log(err));
  };

  if (!pokemon) {
    return;
  }

  return (
    <Layout >
      <PageHeader>
        <Button
          icon={<AppstoreAddOutlined />}
          onClick={() => console.log("oi")}
          type="default"
        >
          Add to list
        </Button>
      </PageHeader>
      <Divider />
      <Content>
        <Flex wrap="wrap" gap={30} align="stretch" justify="space-between">
          <CardPokemonInfo pokemon={pokemon} />
          <CardPokemonStats stats={pokemon.stats} />
          <CardPokemonAbilities abilities={pokemon.abilities} />
        </Flex>
      </Content>
    </Layout>
  );
}