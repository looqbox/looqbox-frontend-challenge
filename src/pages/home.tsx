import { Card, Flex, Input, Layout } from "antd";
import { useState } from "react";
import { useGetPokemonByNameQuery } from "../services/pokemon";
const { Search } = Input;
const { Content } = Layout;

export default function Home() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const { data, isLoading } = useGetPokemonByNameQuery(searchTerm);

  return (
    <Layout>
      <Content style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <Search
          placeholder="input search text"
          enterButton="Search"
          size="large"
          onSearch={(e) => setSearchTerm(e)}
          onPressEnter={(e) =>
            setSearchTerm((e?.target as HTMLInputElement)?.value)
          }
          loading={isLoading}
        />
        <Flex wrap="wrap" justify="center" gap="24px">
          {data?.results?.map((poke) => {
            return (
              <Card
                title={poke.name}
                key={poke.name}
                style={{ width: "376px" }}
              >
                <p>{poke.name}</p>
              </Card>
            );
          })}
        </Flex>
      </Content>
    </Layout>
  );
}
