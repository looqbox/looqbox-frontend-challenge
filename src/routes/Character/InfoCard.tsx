import React from "react";
import { Typography, Flex } from "antd";
import getAbilities from "../../utils/getAttributesList";
import "./styles.css";
import { Pokemon } from "./types";
import { capitalizeString } from "../../utils";

const { Text } = Typography;

const InfoCard: React.FC<Pokemon> = ({ character }) => {
  const { height, weight, abilities } = character;
  const abilitiesList = getAbilities(abilities, "ability");

  return (
    <div className="info-card">
      <Flex className="info-group">
        <Text type="secondary">Height: </Text>
        <Text strong className="info-text">
          {height}
        </Text>
      </Flex>

      <Flex className="info-group">
        <Text type="secondary">Weight: </Text>
        <Text strong className="info-text">
          {weight}
        </Text>
      </Flex>

      <Flex className="info-group">
        <Text type="secondary">Abilities: </Text>
        <div className="info-text">
          {abilitiesList.map((ability, index) => (
            <Text strong key={ability}>
              {capitalizeString(ability)}
              {index === abilitiesList.length - 1 ? "" : `, `}
            </Text>
          ))}
        </div>
      </Flex>
    </div>
  );
};

export default InfoCard;
