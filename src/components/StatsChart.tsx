import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import type { PokemonStat, PokemonType } from '../types/pokemon';
import { POKEMON_STATS, POKEMON_TYPE_COLORS } from '../constants/pokemon';

interface PokemonStatsChartProps {
  stats: PokemonStat[];
  types: PokemonType[];
}

const PokemonStatsChart = ({ stats, types }: PokemonStatsChartProps) => {
  const data = stats.map((stat) => ({
    stat: POKEMON_STATS[stat.stat.name] ?? stat.stat.name.toUpperCase(),
    value: stat.base_stat,
  }));

  return (
    <div className="h-72 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart outerRadius="70%" data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="stat" />
          <Radar
            name="Base Stats"
            dataKey="value"
            stroke={POKEMON_TYPE_COLORS[types[0].type.name] || '#8884d8'}
            fill={POKEMON_TYPE_COLORS[types[0].type.name] || '#8884d8'}
            fillOpacity={0.7}
          />
          <Tooltip />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PokemonStatsChart;
