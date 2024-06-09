import { PokeAPIPokemon } from "@/@types/Pokemon";
import PokemonStats from "@/components/PokemonStats";
import PokemonType from "@/components/PokemonType";
import {
  Card,
  Col,
  Flex,
  FloatButton,
  Image,
  Input,
  Row,
  Typography,
} from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { Link, useLocation } from "react-router-dom";

interface LocationState {
  pokemon: PokeAPIPokemon;
}

export default function DetailsPage() {
  const location = useLocation();
  const { pokemon } = location.state as LocationState;
  return (
    <>
      <Link to="/" replace>
        <FloatButton
          icon={<ArrowLeftOutlined />}
          style={{ top: 16, left: 16, width: 64, height: 64 }}
        />
      </Link>
      <Row align="middle" style={{ height: "100vh" }}>
        <Col
          md={{ span: 10, offset: 7 }}
          lg={{ span: 8, offset: 8 }}
          xl={{ span: 6, offset: 9 }}
        >
          <Card>
            <Flex vertical align="center">
              <Image
                preview={false}
                width={256}
                src={pokemon.sprites.front_default}
              />
              <Typography.Paragraph
                style={{
                  color: "#44628d",
                  marginTop: 8,
                  marginBottom: 8,
                }}
              >
                #{pokemon.id}
              </Typography.Paragraph>
              <Typography.Title style={{ marginTop: 8, marginBottom: 8 }}>
                {pokemon.name.toUpperCase()}
              </Typography.Title>
              <Flex justify="center">
                {pokemon.types.map(({ type }, index) => (
                  <PokemonType key={index} type={type.name} />
                ))}
              </Flex>
              <Typography.Title level={3} style={{ textAlign: "center" }}>
                Stats
              </Typography.Title>
              <PokemonStats stats={pokemon.stats} />
              <Flex gap={32} justify="center">
                <Flex vertical align="center">
                  <Typography.Title level={3}>Height</Typography.Title>
                  <Input
                    placeholder={`${pokemon.height.toString()} M`}
                    variant="filled"
                  />
                </Flex>
                <Flex vertical align="center">
                  <Typography.Title level={3}>Width</Typography.Title>
                  <Input
                    placeholder={`${pokemon.weight.toString()} KG`}
                    variant="filled"
                  />
                </Flex>
              </Flex>
            </Flex>
          </Card>
        </Col>
      </Row>
    </>
  );
}
