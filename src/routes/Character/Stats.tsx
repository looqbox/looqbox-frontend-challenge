import React from "react";
import { Typography, Flex, Grid } from "antd";
import { getStatsList } from "../../utils";

type StatsProps = {
  stats: Array<{
    base_stat: number;
    stat: {
      name: string;
    };
  }>;
};

const { Text, Title } = Typography;
const { useBreakpoint } = Grid;

const Stats: React.FC<StatsProps> = ({ stats }) => {
  const statsList = getStatsList(stats);
  const screens = useBreakpoint();
  const isDesktop = screens.md;

  return (
    <div className="stats-wrapper">
      <Title level={3}>Base Stats</Title>

      {statsList.map((stat) => (
        <div key={stat.name}>
          <Text type="secondary">{stat.name.toUpperCase()}</Text>
          <Flex>
            <div
              className="stat-range"
              style={{
                width: `calc(${stat.value}px * ${isDesktop ? "5" : "3"})`,
              }}
            />
            <Text strong>{stat.value}</Text>
          </Flex>
        </div>
      ))}
    </div>
  );
};

export default Stats;
