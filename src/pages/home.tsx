import { Card, Flex, Input, Layout } from "antd";
import { useEffect, useState } from "react";
import Pokemon from "../models/pokemon.model";
const { Search } = Input;
const { Content } = Layout;

export default function Home() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon/").then(
        (res) => res.json()
      );
      setPokemons(response.results);
    };

    fetchData();
  }, []);

  return (
    <Layout>
      <Content style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <Search
          placeholder="input search text"
          enterButton="Search"
          size="large"
        />
        <Flex wrap="wrap" justify="center" gap="24px">
          {pokemons?.map((poke) => {
            return (
              <Card
                title={poke.name}
                extra={poke.id}
                key={poke.id}
                style={{ width: "376px" }}
              >
                <p>{poke.name}</p>
                <p>{poke.base_experience}</p>
              </Card>
            );
          })}
        </Flex>
      </Content>
    </Layout>
  );
}
