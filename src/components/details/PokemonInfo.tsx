import React from 'react';
import { Tag, Typography, Descriptions } from 'antd';
import { useTranslation } from 'react-i18next';
import type { PokemonDetails } from '../../types/pokemon.types';
import { POKEMON_TYPE_COLORS } from '../../config/colors';

const { Title, Text } = Typography;

interface PokemonInfoProps {
  pokemon: PokemonDetails;
}

export const PokemonInfo: React.FC<PokemonInfoProps> = ({ pokemon }) => {
  const { t } = useTranslation();

  return (
    <>
      <Title level={2} style={{ textTransform: 'capitalize', margin: 0 }}>
        {pokemon.name} <Text type="secondary">#{String(pokemon.id).padStart(3, '0')}</Text>
      </Title>
      <div style={{ marginTop: 8, marginBottom: 16 }}>
        {pokemon.types.map(({ type }) => (
          <Tag key={type.name} color={POKEMON_TYPE_COLORS[type.name] || '#ccc'}>
            {t(`pokemonTypes.${type.name}`)}
          </Tag>
        ))}
      </div>
      <Descriptions bordered column={1} size="small">
        <Descriptions.Item label={t('details.height')}>{pokemon.height / 10} m</Descriptions.Item>
        <Descriptions.Item label={t('details.weight')}>{pokemon.weight / 10} kg</Descriptions.Item>
      </Descriptions>
    </>
  );
};
