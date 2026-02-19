import { Divider, Flex, Modal, Spin, Tag, Image } from 'antd';

import type { Pokemon } from '../pokemonTypes';
import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from 'recharts';
import { useState } from 'react';
import { typeColors } from '@/utils/pokemonColors';
import { TypeDetailsCard } from './TypeDetailsCard';

interface PokemonModalProps {
  open: boolean;
  loading: boolean;
  pokemon: Pokemon | null;
  onClose: () => void;
}

export function PokemonModal({
  open,
  loading,
  pokemon,
  onClose,
}: PokemonModalProps) {
  return (
    <Modal
      open={open}
      onCancel={onClose}
      centered
      footer={null}
      title={
        <span style={{ textTransform: 'capitalize', fontSize: 18 }}>
          {loading || !pokemon ? (
            <span> </span>
          ) : (
            `#${pokemon.id} - ${pokemon.name}`
          )}
        </span>
      }
    >
      {loading || !pokemon ? (
        <Flex justify="center" style={{ padding: 40 }}>
          <Spin size="large" />
        </Flex>
      ) : (
        <PokemonModalContent pokemon={pokemon} />
      )}
    </Modal>
  );
}

function PokemonModalContent({ pokemon }: { pokemon: Pokemon }) {
  const [imageUrl, setImageUrl] = useState(
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/${pokemon.id}.gif`
  );

  const handleImageError = () => {
    setImageUrl(pokemon.sprites.other['official-artwork'].front_default);
  };

  const chartData = pokemon.stats.map((stat) => ({
    stat: stat.stat.name,
    value: stat.base_stat,
    fullMark: 150,
  }));

  const mainType = pokemon.types[0].type.name;
  const color = typeColors[mainType] || '#1677ff';

  return (
    <Flex vertical align="center" gap={12}>
      <Image
        width={120}
        src={imageUrl}
        alt={pokemon.name}
        preview={false}
        onError={handleImageError}
      />

      {/* Tipos */}
      <Flex gap={8}>
        {pokemon.types.map((type, index) => (
          <Tag
            key={`${type.type.name}-${index}`}
            color={typeColors[type.type.name]}
            style={{ fontWeight: 'bold', textTransform: 'capitalize' }}
          >
            {type.type.name}
          </Tag>
        ))}
      </Flex>

      <Divider style={{ margin: '8px 0' }} />

      {/* Altura e Peso */}
      <Flex gap={32}>
        <Flex vertical align="center">
          <span style={{ color: '#888', fontSize: 12 }}>Altura</span>
          <strong>{(pokemon.height / 10).toFixed(1)}m</strong>
        </Flex>
        <Flex vertical align="center">
          <span style={{ color: '#888', fontSize: 12 }}>Peso</span>
          <strong>{(pokemon.weight / 10).toFixed(1)}kg</strong>
        </Flex>
      </Flex>

      <Divider style={{ margin: '8px 0' }} />

      {/* Gráfico Radar */}
      <Flex vertical style={{ width: '100%' }} gap={6}>
        <ResponsiveContainer width="100%" height={280}>
          <RadarChart data={chartData}>
            <PolarGrid stroke="#e0e0e0" strokeWidth={1} />
            <PolarAngleAxis
              dataKey="stat"
              tick={{ fill: '#595959', fontSize: 11, fontWeight: 600 }}
            />
            <PolarRadiusAxis
              angle={90}
              domain={[0, 150]}
              tick={{ fill: '#bfbfbf', fontSize: 10 }}
              tickCount={4}
            />
            <Radar
              name={pokemon.name}
              dataKey="value"
              stroke={color}
              fill={color}
              fillOpacity={0.3}
              strokeWidth={2.5}
            />
          </RadarChart>
        </ResponsiveContainer>

        <TypeDetailsCard />
      </Flex>
    </Flex>
  );
}
