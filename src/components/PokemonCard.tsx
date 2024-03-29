import React from "react";
import { Card, Image, Typography, Flex } from "antd";
import emptyImg from "../../assets/no-pictures.png";

const { Title, Text } = Typography;

export type PokemonBaseInfo = {
  character: {
    id: number;
    name: string;
  };
  isDesktop?: boolean;
};

const PokemonCard: React.FC<PokemonBaseInfo> = ({ character, isDesktop }) => {
  const { id, name } = character;
  return (
    <Card
      style={{
        width: isDesktop ? 300 : "90vw",
        minHeight: "100%",
        textAlign: "center",
      }}
      hoverable
    >
      <Image
        preview={false}
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
        fallback={emptyImg}
      />
      <Flex justify="center" align="center" vertical>
        <Text type="secondary" style={{ marginTop: "8px" }}>
          #{id}
        </Text>
        <Title
          level={4}
          style={{
            margin: "0",
            textTransform: "capitalize",
            fontWeight: 700,
            color: "#515052",
          }}
        >
          {name}
        </Title>
      </Flex>
    </Card>
  );
};

export default PokemonCard;
