import React from 'react';
import { Progress, Typography, theme } from 'antd';
import { useTranslation } from 'react-i18next';
import type { PokemonStat } from '../../types/pokemon.types';

const { Text } = Typography;

const statNameMap: { [key: string]: string } = {
  hp: 'hp',
  attack: 'attack',
  defense: 'defense',
  'special-attack': 'special-attack',
  'special-defense': 'special-defense',
  speed: 'speed',
};

interface PokemonStatsProps {
  stats: PokemonStat[];
}

export const PokemonStats: React.FC<PokemonStatsProps> = ({ stats }) => {
  const { t } = useTranslation();
  const { token } = theme.useToken();

  return (
    <>
      {stats.map(({ stat, base_stat }) => {
        const safeStatName = statNameMap[stat.name];
        const translationKey = `details.stats.${safeStatName}` as const;
        return (
          <div key={stat.name}>
            <Text style={{ textTransform: 'capitalize' }}>
              {safeStatName ? t(translationKey) : stat.name}
            </Text>
            <Progress
              percent={Math.round((base_stat / 255) * 100)}
              strokeColor={token.colorPrimary}
            />
          </div>
        );
      })}
    </>
  );
};
