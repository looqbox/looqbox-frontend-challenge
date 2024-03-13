import { Flex, Divider, Tag, Image, Typography } from "antd";
import PokemonInfo from "../../models/PokemonInfo";
import pokemonTypes from "../../constants/pokemonTypes";
import { CardInfo } from "./styles";

export type CardPokemonInfoProps = {
  pokemon: PokemonInfo;
};

const CardPokemonInfo = ({ pokemon }: CardPokemonInfoProps) => {
  const { name, types, sprites } = pokemon;

  const renderTags = () => {
    return types.map((item) => {
      const { name: typeName } = item.type;
      const color = pokemonTypes[typeName].color;

      return (
        <Tag key={typeName} bordered color={color}>
          {typeName}
        </Tag>
      );
    });
  };

  return (
    <CardInfo>
      <Flex vertical justify="space-between">
        <Image
          preview={false}
          src={sprites.other["official-artwork"].front_default}
        />

        <Divider />

        <Typography.Title>{name}</Typography.Title>

        <Flex justify="center">{renderTags()}</Flex>
      </Flex>
    </CardInfo>
  );
};

export default CardPokemonInfo;
