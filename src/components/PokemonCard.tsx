import React, { useEffect, useState } from 'react';
import { Pokemon } from '@/typings/pokemon';
import { Link } from 'react-router-dom';
import PokemonTypeIcon from './PokemonTypeIcon';
import { Skeleton } from 'antd';
import { getHexColor, getTextColor } from '@/utils/styles';
import PokemonType from './PokemonType';

type PokemonCardProps = {
  pokemon: Pokemon;
  innerRef?: React.Ref<HTMLAnchorElement>;
};

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon, innerRef }) => {
  const [loadingImg, setLoadingImg] = useState(true);
  const [visible, setVisible] = useState(false);

  const { name, sprites, color, types, id, weight, height } = pokemon;

  const hexColor = getHexColor(color.name);
  const lightColor = `${hexColor}a0`;
  const darkColor = `${hexColor}d0`;
  const textColor = getTextColor(darkColor);

  // Animation for displaying the card on first render
  useEffect(() => {
    setTimeout(() => setVisible(true), 1 * 100);
  }, []);

  return (
    <Link
      ref={innerRef}
      to={`/${name}`}
      className={`w-full shadow-[2px_5px_10px_rgba(0,0,0,0.2)] rounded-2xl overflow-clip transition-all duration-300 hover:scale-105 min-h-[300px]  bg-gradient-to-bl from-gray-950 to-gray-600 ${visible ? 'opacity-1' : 'opacity-0'}`}
    >
      <div
        className="shadow-md w-full flex-1 h-full flex flex-col items-center justify-between border-none relative"
        style={{
          backgroundColor: lightColor,
        }}
      >
        <PokemonTypeIcon
          className="absolute top-4 right-4"
          type={types[0].type.name}
          width={60}
          height={60}
          color={darkColor}
        />
        <div
          className="w-full rounded-b-3xl flex flex-1 items-center justify-center translate-y-7 relative"
          style={{ color: darkColor }}
        >
          {loadingImg && (
            <Skeleton.Button
              active
              style={{
                width: 120,
                height: 120,
                position: 'absolute',
                top: 0,
                borderRadius: '100%',
              }}
            />
          )}
          <img
            src={sprites.other?.dream_world?.front_default || sprites.front_default}
            alt={`${name}'s image`}
            className="w-[120px] h-[120px]"
            onLoad={() => setLoadingImg(false)}
          />
        </div>
        {/* ---- White Card */}
        <div className="px-3 pb-3 w-full">
          <div className="bg-[#fafafa] w-full rounded-xl p-4 pt-6 flex flex-col gap-2">
            <h3 className="font-bold text-lg capitalize flex items-center justify-between">
              {name}
              <span className="text-gray-300 text-sm">#{id}</span>
            </h3>
            {/* ---- Pokemon Types ---- */}
            <ul className="flex gap-2 flex-wrap">
              {types.map((t) => (
                <li key={t.type.name} style={{ color: textColor }}>
                  <PokemonType color={darkColor} type={t.type.name} />
                </li>
              ))}
            </ul>
            {/* ---- Pokemon Infos ---- */}
            <div className="flex justify-between flex-1 flex-wrap gap-2">
              <div className="flex items-center gap-1">
                <div className="rounded-full p-2 bg-gray-200">
                  <img src="/height-icon.png" className="w-4 h-4" />
                </div>
                {height / 10} m
              </div>
              <div className="flex items-center gap-1">
                <div className="rounded-full p-2 bg-gray-200">
                  <img src="/weight-icon.png" className="w-4 h-4" />
                </div>
                {weight / 10} kg
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PokemonCard;
