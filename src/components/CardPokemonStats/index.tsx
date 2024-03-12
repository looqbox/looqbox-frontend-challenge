import { Flex, Typography } from "antd";
import Progress from "antd/es/progress";
import { Stat } from "../../models/PokemonInfo";
import { CardStats } from "./styles";

const { Text, Title } = Typography;

type Props = {
  stats: Stat[];
};

const CardPokemonStats = ({ stats }: Props) => {
  const renderStatsProgress = () => (
    stats.map(item => {
      const { stat, base_stat } = item;

      return (
        <>
          <Text>{stat.name}</Text>
          <Progress
            size={4}
            percent={base_stat}
            steps={100}
            format={(percent) => percent}
          />
        </>
      );
    })
  );

  return (
    <CardStats>
      <Title level={3}>Stats</Title>
      <Flex vertical justify="space-between" gap={10}>
        {renderStatsProgress()}
      </Flex>
    </CardStats>
  );
};

export default CardPokemonStats;