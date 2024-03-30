import React from "react";
import { Typography, Flex } from "antd";
import { Pokemon } from "./types";
import getAttributesList from "../../utils/getAttributesList";
import "./styles.css";
import getTypeColor from "../../utils/getTypeColor";

const { Title, Text } = Typography;

const PokemonTypes: React.FC<Pokemon> = ({ character }) => {
  const { types } = character;
  const typesList = getAttributesList(types, "type");

  return (
    <Flex vertical align="flex-start">
      <Title level={3}>Types</Title>
      <div>
        {typesList.map((item) => (
          <Text
            className="type-badge"
            style={{ backgroundColor: getTypeColor(item) }}
            key={item}
          >
            {item}
          </Text>
        ))}
      </div>
    </Flex>
  );
};

export default PokemonTypes;
