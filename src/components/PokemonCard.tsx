import React from "react";
import { Card, Image, Typography, Flex } from "antd";

const { Title, Text } = Typography;

export interface PokemonBaseInfo {
  character: {
    id: number;
    name: string;
  };
  isDesktop?: boolean;
}

const PokemonCard: React.FC<PokemonBaseInfo> = ({ character, isDesktop }) => {
  const { id, name } = character;
  return (
    <Card style={{ width: isDesktop ? 300 : "90vw" }} hoverable>
      <Image
        preview={false}
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
      />
      <Flex justify="center" align="center" gap="small">
        <Text type="secondary">#{id}</Text>
        <Title
          level={3}
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
