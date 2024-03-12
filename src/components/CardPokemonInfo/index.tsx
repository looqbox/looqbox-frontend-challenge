import { Flex, Divider, Tag, Image } from "antd";
import Title from "antd/es/typography/Title";
import PokemonInfo from "../../models/PokemonInfo";
import pokemonTypes from "../../constants/pokemonTypes";
import { CardInfo } from "./styles";

type Props = {
    pokemon: PokemonInfo
};

const CardPokemonInfo = ({ pokemon }: Props) => {
  const renderTags = () => {
    return pokemon.types.map(item => (
      <Tag
        bordered
        key={item.type.name}
        color={pokemonTypes[item.type.name].color}
      >
        {item.type.name}
      </Tag>
    ));
  };

  return (
    <CardInfo>
      <Flex vertical justify="space-between">
        <Image
          width={250}
          preview={false}
          src={pokemon.sprites.other["official-artwork"].front_default}
        />

        <Divider />
        
        <Title>{pokemon.name}</Title>
        
        <Flex justify="center">
          {renderTags()}
        </Flex>
      </Flex>
    </CardInfo>
  );
};

export default CardPokemonInfo;