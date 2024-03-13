import { Flex, Divider } from "antd";
import Title from "antd/es/typography/Title";
import { Ability } from "../../models/PokemonInfo";
import { AbilityTag, CardInfo } from "./styles";

export type CardPokemonAbilitiesProps = {
  abilities: Ability[];
};

const CardPokemonAbilities = ({ abilities }: CardPokemonAbilitiesProps) => {
  const renderTags = () => (
    abilities.map(item => {
      const { name } = item.ability;

      return (
        <AbilityTag key={name} color="blue" bordered>
          {name}
        </AbilityTag>
      );
    })
  );

  return (
    <CardInfo>
      <Flex vertical justify="space-around">
        <Title level={3}>Abilities</Title>
        <Divider />
        <Flex vertical justify="center" gap={10}>
          {renderTags()}
        </Flex>
      </Flex>
    </CardInfo>
  );
};

export default CardPokemonAbilities;