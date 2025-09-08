import { useMemo } from 'react';
import {
  Legend,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';
import { typeColors } from '../models/consts/pokemon-type-color';
import type { PokemonDetailProps } from '../models/types/pokemon-detail.type';

type ChartDataItem = {
  stat: string;
  a: number;
  b: number;
};

type ComparisonChartProps = {
  mainPokemon: PokemonDetailProps;
  secondaryPokemon: PokemonDetailProps;
};

export const ComparisonChart = ({ mainPokemon, secondaryPokemon }: ComparisonChartProps) => {
  const colorA = typeColors[mainPokemon.types?.[0]?.type.name ?? 'normal'] ?? '#8884d8';
  const colorB = typeColors[secondaryPokemon.types?.[0]?.type.name ?? 'normal'] ?? '#82ca9d';

  const data: ChartDataItem[] = useMemo(() => {
    const statsA = mainPokemon.stats.map((s) => s.stat.name);
    const statsB = secondaryPokemon.stats.map((s) => s.stat.name);
    const allStats = Array.from(new Set([...statsA, ...statsB]));

    return allStats.map((statName) => {
      const a = mainPokemon.stats.find((s) => s.stat.name === statName)?.base_stat ?? 0;
      const b = secondaryPokemon.stats.find((s) => s.stat.name === statName)?.base_stat ?? 0;
      return { stat: statName, a, b };
    });
  }, [mainPokemon, secondaryPokemon]);

  const maxStatValue = useMemo(() => {
    const maxFound = data.reduce((acc, cur) => Math.max(acc, cur.a, cur.b), 0);
    const roundUp = Math.ceil(Math.max(maxFound, 50) / 10) * 10;
    return roundUp;
  }, [data]);

  return (
    <div className="flex-1 flex min-w-60 max-w-60">
      <ResponsiveContainer height={240}>
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="stat" tick={{ fontSize: 12 }} />
          <PolarRadiusAxis angle={30} domain={[0, maxStatValue]} />
          <Tooltip />
          <Legend />
          <Radar
            name={mainPokemon.name}
            dataKey="a"
            stroke={colorA}
            fill={colorA}
            fillOpacity={0.6}
          />
          <Radar
            name={secondaryPokemon.name}
            dataKey="b"
            stroke={colorB}
            fill={colorB}
            fillOpacity={0.6}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ComparisonChart;
