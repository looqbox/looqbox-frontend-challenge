import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

import { DefinedPokemonType } from '@/@types/pokemon';
import { definedColor } from '@/components/PokemonCard/PokemonImage';

import { ChartStat } from './PokemonBaseStatisticsRadarChart';

type PokemonBaseStatisticsChartProps = {
  stats: ChartStat[];
  type: DefinedPokemonType;
};

export function PokemonBaseStatisticsBarChart({
  stats,
  type,
}: PokemonBaseStatisticsChartProps) {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={stats}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="value" fill={definedColor[type]} />
      </BarChart>
    </ResponsiveContainer>
  );
}
