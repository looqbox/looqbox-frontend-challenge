import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import { useTheme } from '../../hooks/useTheme';

interface Props {
  stats: { base_stat: number; stat: { name: string } }[];
  color: string;
}

export const PokemonStats: React.FC<Props> = ({ stats, color }) => {
  const { isDarkMode } = useTheme();

  const data = stats.map((s) => ({
    subject: s.stat.name.replace('special-', 'Sp. ').toUpperCase(),
    A: s.base_stat,
  }));

  return (
    <div style={{ width: '100%', height: 250 }}>
      <ResponsiveContainer>
        <RadarChart cx='50%' cy='50%' outerRadius='70%' data={data}>
          <PolarGrid stroke={isDarkMode ? '#333' : '#eee'} />
          <PolarAngleAxis
            dataKey='subject'
            tick={{
              fill: isDarkMode ? 'rgba(255,255,255,0.45)' : 'rgba(0,0,0,0.45)',
              fontSize: 10,
            }}
          />
          <Radar dataKey='A' stroke={color} fill={color} fillOpacity={0.5} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};
