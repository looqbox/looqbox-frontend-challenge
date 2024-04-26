import { Descriptions } from 'antd';
import { StatsProps } from '../../../../shared/service.interface';

interface RenderStatsProps {
  pokemonName: string;
  stats: StatsProps[];
}

export const Stats = ({ pokemonName, stats }: RenderStatsProps) => {
  return (
    <Descriptions title={`${pokemonName.toUpperCase()}'S STATS`}>
      {stats.map((item, index) => {
        return (
          <Descriptions.Item key={index} label={item.stat.name.toUpperCase()}>
            {item.base_stat}
          </Descriptions.Item>
        );
      })}
    </Descriptions>
  );
};
