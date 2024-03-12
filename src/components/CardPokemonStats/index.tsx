import { Flex, Typography } from "antd";
import Progress from "antd/es/progress";
import PokemonInfo from "../../models/PokemonInfo";
import { CardStats } from "./styles";

const { Text, Title } = Typography;

type Props = {
  pokemon: PokemonInfo;
};

const CardPokemonStats = ({ pokemon }: Props) => {
  return (
    <CardStats>
      <Title level={3}>Stats</Title>
      <Flex vertical justify="space-between" gap={10}>
        {
          pokemon.stats.map(item => (
            <>
              <Text>{item.stat.name}</Text>
              <Progress
                size={4}
                percent={item.base_stat}
                steps={100}
                format={(percent) => percent}
              />
            </>
          ))
        }
      </Flex>
    </CardStats>
  );
};

export default CardPokemonStats;