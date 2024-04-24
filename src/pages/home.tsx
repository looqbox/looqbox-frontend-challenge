import { Card, Flex, Input, Layout } from "antd";
import {
  useGetPokemonByNameQuery,
  useGetPokemonListQuery,
} from "../services/pokemon";
const { Search } = Input;
const { Content } = Layout;

export default function Home() {
  const { data, isLoading } = useGetPokemonListQuery();

  return (
    <Layout>
      <Content style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <Search
          placeholder="input search text"
          enterButton="Search"
          size="large"
        //   onSearch={(e) => setSearchTerm(e)}
        //   onPressEnter={(e) =>
        //     setSearchTerm((e?.target as HTMLInputElement)?.value)
        //   }
          loading={isLoading}
        />
        <Flex wrap="wrap" justify="center" gap="24px">
          {data?.results?.map((poke) => {
            return <PokemonCard name={poke?.name} key={poke.name} />;
          })}
        </Flex>
      </Content>
    </Layout>
  );
}

function PokemonCard({ name }: { name: string }) {
  const { data: pokemon, error, isLoading } = useGetPokemonByNameQuery(name);

  if (isLoading) return <div>Loading {name}...</div>;
  if (error) return <div>Error: {error?.message}</div>;

  return (
    <Card title={pokemon?.name} style={{ width: "376px" }}>
      <p>{pokemon?.name}</p>
    </Card>
  );
}
