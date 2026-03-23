import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { PokemonStat } from '../types'
import { formatStatName } from '../utils.ts';

interface StatusChartsProps {
  stats: PokemonStat[];
  color: string;
}

const StatusChart: React.FC<StatusChartsProps> = ({ stats, color }) => {
  const data = stats.map((s) => ({
    stat: formatStatName(s.stat.name),
    value: s.base_stat,
    fullmark: 255
  }))

  return (
    <ResponsiveContainer width="100%" height={260}>
      <RadarChart
        data={data}
        margin={{
          top: 10,
          right: 30,
          bottom: 10,
          left: 30,
        }}
      >
        <PolarGrid stroke={`${color}33`} />
        <PolarAngleAxis
          dataKey="stat"
          tick={{ fontSize: 12, fontFamily: "'Space Mono', monospace", fontWeight: 700 }}
          fill='#555'
        />
        <Radar name="Base Stats" dataKey="value" stroke={color} fill={color} fillOpacity={0.3} strokeWidth={2} />
        <Tooltip
          formatter={(value: number, name: string) => [value, name]}
          contentStyle={{
            borderRadius: 12,
            border: `2px solid ${color} `,
            fontFamily: "'Nunito', sans-serif",
            fontWeight: 700
          }}
        />
      </RadarChart>
    </ ResponsiveContainer>
  )
}

export default StatusChart;