import React from 'react';
import { Card, Tag, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
import type { PokemonDetail } from '../../types/pokemon';
import { typeColors } from '../../utils/typeColors';
import { formatPokemonName } from '../../utils/formatName';
import { useTheme } from '../../hooks/useTheme';

const { Title, Text } = Typography;

interface PokemonCardProps {
  pokemon: PokemonDetail;
}

export const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon }) => {
  const navigate = useNavigate();
  const { isDarkMode } = useTheme();

  const mainType = pokemon.types[0].type.name;
  const solidColor = typeColors[mainType];

  const topBackground = isDarkMode
    ? `linear-gradient(${solidColor}26, ${solidColor}26), #242424`
    : `${solidColor}26`;
  const surfaceColor = isDarkMode ? '#1F1F1F' : '#FFFFFF';
  const primaryTextColor = isDarkMode ? 'rgba(255,255,255,0.85)' : 'rgba(0,0,0,0.85)';

  return (
    <Card
      hoverable
      style={{
        width: '100%',
        borderRadius: 8,
        overflow: 'hidden',
        border: 'none',
        backgroundColor: surfaceColor,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
      bodyStyle={{ padding: 0, flex: 1, display: 'flex', flexDirection: 'column' }}
      onClick={() => navigate(`/pokemon/${pokemon.name}`)}
    >
      <div
        style={{
          height: 160,
          background: topBackground,
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div style={{ position: 'absolute', top: 12, right: 16 }}>
          <Text
            style={{
              color: isDarkMode ? 'rgba(255,255,255,0.45)' : 'rgba(0,0,0,0.45)',
              fontWeight: 400,
              fontSize: 12,
            }}
          >
            #{String(pokemon.id).padStart(3, '0')}
          </Text>
        </div>

        <img
          src={pokemon.sprites.other['official-artwork'].front_default}
          alt={pokemon.name}
          loading='lazy'
          style={{
            width: '140px',
            height: '140px',
            objectFit: 'contain',
            zIndex: 1,
            filter: 'drop-shadow(0 5px 10px rgba(0,0,0,0.1))',
          }}
        />
      </div>

      <div style={{ padding: '20px 16px', flex: 1, backgroundColor: surfaceColor }}>
        <Title
          level={3}
          style={{
            margin: '0 0 12px 0',
            fontSize: 16,
            fontWeight: 500,
            color: primaryTextColor,
          }}
        >
          {formatPokemonName(pokemon.name)}
        </Title>

        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {pokemon.types.map((typeInfo) => (
            <Tag
              key={typeInfo.type.name}
              style={{
                backgroundColor: typeColors[typeInfo.type.name],
                color: '#FFF',
                borderRadius: 6,
                border: 'none',
                fontWeight: 600,
              }}
            >
              {typeInfo.type.name.toUpperCase()}
            </Tag>
          ))}
        </div>
      </div>
    </Card>
  );
};
