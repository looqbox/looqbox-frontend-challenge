import { Flex, Divider } from "antd";
import Title from "antd/es/typography/Title";
import PokemonInfo from "../../models/PokemonInfo";
import { AbilityTag, CardInfo } from "./styles";

type Props = {
  pokemon: PokemonInfo
};

const CardPokemonAbilities = ({ pokemon }: Props) => {
  return (
    <CardInfo>
      <Flex vertical justify="space-around">
        <Title level={3}>Abilities</Title>
        <Divider />
        <Flex vertical justify="center" gap={10}>
          {
            pokemon.abilities.map(item => (
              <AbilityTag
                color="blue"
                bordered
                key={item.ability.name}
              >
                {item.ability.name}
              </AbilityTag>
            ))
          }
        </Flex>
      </Flex>
    </CardInfo>
  );
};

export default CardPokemonAbilities;