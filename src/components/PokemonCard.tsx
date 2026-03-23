import React from 'react'
import { Card, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
import { Pokemon } from '../types';
import { getTypeColor, formatPokemonId } from '../utils.ts';
import TypeBadge from './TypeBadge';

const { Title, Text } = Typography;

interface PokemonCardProps {
  pokemon: Pokemon
}

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon }) => {
  const navigate = useNavigate();

  const primaryType = pokemon.types[0]?.type.name || 'normal';
  const color = getTypeColor(primaryType);

  const image = pokemon.sprites.other['official-artwork'].front_default || pokemon.sprites.front_default;

  return (
    <Card
      onClick={() => navigate(`/details/${pokemon.name}`)}
      hoverable
      style={{
        borderRadius: 20,
        overflow: 'hidden',
        border: 'none',
        background: `linear-gradient(145deg, ${color}22 0%, ${color}44 100%)`,
        boxShadow: `0 8px 32px ${color}33`,
        cursor: 'pointer',
        position: 'relative',
        transition: 'all 0.3s, cubic-bezier(0.4, 1.5, 0.5, 1)'
      }}
      styles={{ body: { padding: '16px' } }}
      className='pokemon-card'
    >

      <div style={{
        position: 'absolute',
        top: -20,
        right: -20,
        width: 100,
        height: 100,
        borderRadius: '50%',
        background: `${color}22`,
      }} />
      <div style={{
        position: 'absolute',
        bottom: -30,
        left: -10,
        width: 80,
        height: 80,
        borderRadius: '50%',
        background: `${color}15`,
      }} />

      <Text style={{
        fontSize: 11,
        fontWeight: 700,
        color: `${color}`,
        fontFamily: "'Space Mono', monospace",
        opacity: 0.8,
        letterSpacing: 1,
      }}>
        {formatPokemonId(pokemon.id)}
      </Text>
      <div style={{ textAlign: 'center', margin: '8px 0' }}>
        {image ? (<img
          src={image || "imagem indisponível"}
          alt={pokemon.name}
          style={{
            width: 120,
            height: 120,
            objectFit: 'contain',
            transition: 'transform 0.3s ease',
          }}
          className='pokemon-img'
          loading='lazy'
        />) : (
          <Text style={{ display: 'block', color: '#000', fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 0.8 }}>Imagem indisponível</Text>
        )}
      </div>
      <Title
        level={5}
        style={{
          margin: '4px 0 8px',
          fontFamily: "'Nunito', sans-serif",
          color: '#333',
          fontSize: 15,
          textTransform: 'capitalize',
          textAlign: 'center',
          fontWeight: 900,
        }}>
        {pokemon.name}
      </Title>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
      }}>
        {pokemon.types.map((t) => (
          <TypeBadge key={t.type.name} type={t.type.name} size={'small'} />
        ))}
      </div>

    </Card>
  )
}

export default PokemonCard