import React from 'react';
import PokemonTypeIcon from './PokemonTypeIcon';
import { getTextColor } from '@/utils/styles';

export type PokemonTypeProps = {
  type: string;
  color: string;
  textColor?: string;
  iconBg?: string;
  iconColor?: string;
};

const PokemonType: React.FC<PokemonTypeProps> = ({ type, color, iconBg, textColor, iconColor }) => {
  textColor = textColor || getTextColor(color);

  return (
    <div
      style={{ backgroundColor: color, color: textColor }}
      className="w-max capitalize text-sm flex items-center px-2 py-1 gap-1 rounded-2xl"
    >
      <div
        className="rounded-full p-1"
        style={{
          backgroundColor: iconBg ? iconBg : textColor === '#2c2c2c' ? '#2c2c2c' : textColor,
        }}
      >
        <PokemonTypeIcon type={type} width={18} height={18} color={iconColor || color} />
      </div>
      {type}
    </div>
  );
};

export default PokemonType;
