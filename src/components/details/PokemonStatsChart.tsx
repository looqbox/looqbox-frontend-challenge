import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { theme } from 'antd';
import { Radar } from '@ant-design/plots';
import type { PokemonStat } from '../../types/pokemon.types';
import { useTheme } from '../../contexts/theme';

interface PokemonStatsChartProps {
  stats: PokemonStat[];
}

const statNameMap: { [key: string]: string } = {
  hp: 'hp',
  attack: 'attack',
  defense: 'defense',
  'special-attack': 'special-attack',
  'special-defense': 'special-defense',
  speed: 'speed',
};

export const PokemonStatsChart: React.FC<PokemonStatsChartProps> = ({ stats }) => {
  const { t } = useTranslation();
  const { token } = theme.useToken();
  const { themeMode } = useTheme();

  const chartData = useMemo(() => {
    return stats.map(({ stat, base_stat }) => {
      const safeStatName = statNameMap[stat.name] || stat.name;
      const translationKey = `details.stats.${safeStatName}` as const;
      return {
        item: t(translationKey),
        score: base_stat,
      };
    });
  }, [stats, t]);

  const config = {
    data: chartData,
    xField: 'item',
    yField: 'score',
    yAxis: {
      min: 0,
      max: 200,
    },
    lineStyle: {
      stroke: token.colorPrimary,
    },
    point: {
      size: 4,
      style: {
        fill: token.colorPrimary,
      },
    },
    area: {
      style: {
        fill: token.colorPrimary,
        fillOpacity: 0.2,
      },
    },
    theme: themeMode === 'dark' ? 'dark' : 'light',
  };

  return <Radar {...config} />;
};
