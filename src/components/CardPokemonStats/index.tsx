import { Fragment } from "react/jsx-runtime";
import { Flex, Typography, Progress } from "antd";
import { Stat } from "../../models/PokemonInfo";
import { CardStats } from "./styles";

const { Text } = Typography;

type Props = {
  stats: Stat[];
  mini?: boolean;
};

const CardPokemonStats = ({ stats, mini }: Props) => {
  const renderStatsProgress = () =>
    stats.map((item) => {
      const { stat, base_stat } = item;

      return (
        <Fragment key={stat.name}>
          <Text>{stat.name}</Text>
          <Progress
            size={mini ? "small" : 4}
            percent={base_stat}
            steps={100}
            format={(percent) => percent}
          />
        </Fragment>
      );
    });

  return (
    <CardStats title="Stats">
      <Flex vertical justify="space-between" gap={10}>
        {renderStatsProgress()}
      </Flex>
    </CardStats>
  );
};

export default CardPokemonStats;
