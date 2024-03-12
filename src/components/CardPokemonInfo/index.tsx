import { Flex, Divider, Tag, Image } from "antd";
import Title from "antd/es/typography/Title";
import PokemonInfo from "../../models/PokemonInfo";
import pokemonTypes from "../../constants/pokemonTypes";
import { CardInfo } from "./styles";

type Props = {
  pokemon: PokemonInfo
};

const CardPokemonInfo = ({ pokemon }: Props) => {
  const { name, types, sprites } = pokemon;
  
  const renderTags = () => {
    return types.map(item => {
      const { name: typeName } = item.type;
      const color = pokemonTypes[typeName].color;

      return (
        <Tag key={typeName} bordered color={color}>{typeName}</Tag>
      );
    });
  };

  return (
    <CardInfo>
      <Flex vertical justify="space-between">
        <Image
          width={250}
          preview={false}
          src={sprites.other["official-artwork"].front_default}
        />

        <Divider />
        
        <Title>{name}</Title>

        <Flex justify="center">{renderTags()}</Flex>
      </Flex>
    </CardInfo>
  );
};

export default CardPokemonInfo;