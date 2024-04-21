import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from 'recharts';

import { DefinedPokemonType } from '@/@types/pokemon';
import { definedColor } from '@/components/PokemonCard/PokemonImage';

export type ChartStat = {
  name: string;
  value: number;
};

type PokemonBaseStatisticsChartProps = {
  stats: ChartStat[];
  type: DefinedPokemonType;
};

export function PokemonBaseStatisticsRadarChart({
  stats,
  type,
}: PokemonBaseStatisticsChartProps) {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={stats}>
        <PolarGrid />
        <PolarAngleAxis dataKey="name" />
        <PolarRadiusAxis />
        <Radar
          name="Stats"
          dataKey="value"
          fill={definedColor[type]}
          fillOpacity={0.6}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
}
