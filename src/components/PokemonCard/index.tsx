import React from "react";
import { Card, Image, Typography, Flex } from "antd";
import { Link } from "react-router-dom";
import emptyImg from "../../../assets/no-pictures.png";
import "./styles.css";

const { Title, Text } = Typography;

export type PokemonCardProps = {
  character: {
    id: number;
    name: string;
  };
};

const PokemonCard: React.FC<PokemonCardProps> = ({ character }) => {
  const { id, name } = character;
  return (
    <Link to={`/pokemon/${name}`}>
      <Card className="pokemon-card" hoverable>
        <Image
          preview={false}
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
          fallback={emptyImg}
        />
        <Flex justify="center" align="center" vertical>
          <Text type="secondary">#{id}</Text>
          <Title level={4} className="pokemon-card-name">
            {name}
          </Title>
        </Flex>
      </Card>
    </Link>
  );
};

export default PokemonCard;
