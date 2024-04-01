import React from "react";
import { Typography, Flex } from "antd";
import { Pokemon } from "../../types/pokemon";
import { capitalizeString, getAttributesList, getTypeColor } from "../../utils";
import "./styles.css";

const { Title, Text } = Typography;

type PokemonTypesProps = {
  character: Pokemon;
};

const PokemonTypes: React.FC<PokemonTypesProps> = ({ character }) => {
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
            {capitalizeString(item)}
          </Text>
        ))}
      </div>
    </Flex>
  );
};

export default PokemonTypes;
