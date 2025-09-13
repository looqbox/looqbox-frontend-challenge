import React from 'react';
import { theme } from 'antd';
import type { PokemonDetails } from '../../types/pokemon.types';

interface PokemonImageProps {
  pokemon: PokemonDetails;
}

export const PokemonImage: React.FC<PokemonImageProps> = ({ pokemon }) => {
  const { token } = theme.useToken();

  return (
    <div
      style={{
        textAlign: 'center',
        backgroundColor: token.colorBgLayout,
        borderRadius: token.borderRadiusLG,
        padding: 16,
      }}
    >
      <img
        src={pokemon.sprites.other['official-artwork'].front_default}
        alt={pokemon.name}
        style={{ width: '100%', maxWidth: '300px', height: 'auto' }}
      />
    </div>
  );
};
