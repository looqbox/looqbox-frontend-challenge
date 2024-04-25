import { Tabs, TabsProps } from 'antd';
import { PokeAPI } from 'pokeapi-types';
import React from 'react';
import PokemonType, { PokemonTypeProps } from './PokemonType';

type DetailedTypesTabProps = {
  detailedTypes: PokeAPI.Type[];
  color: string;
  pokemonTypeProps?: Partial<PokemonTypeProps>;
};

const DetailedTypesTab: React.FC<DetailedTypesTabProps> = ({
  detailedTypes,
  color,
  pokemonTypeProps,
}) => {
  const veryStrong = {
    label: 'Very Strong',
    attack: detailedTypes.flatMap((type) =>
      type.damage_relations.double_damage_to.map((d) => (
        <PokemonType type={d.name} color={color} {...pokemonTypeProps} />
      )),
    ),
    defense: detailedTypes.flatMap((type) =>
      type.damage_relations.no_damage_from.map((d) => (
        <PokemonType type={d.name} color={color} {...pokemonTypeProps} />
      )),
    ),
  };

  const strong = {
    label: 'Strong',
    attack: detailedTypes.flatMap((type) =>
      type.damage_relations.half_damage_to.map((d) => (
        <PokemonType type={d.name} color={color} {...pokemonTypeProps} />
      )),
    ),
    defense: detailedTypes.flatMap((type) =>
      type.damage_relations.half_damage_from.map((d) => (
        <PokemonType type={d.name} color={color} {...pokemonTypeProps} />
      )),
    ),
  };

  const weak = {
    label: 'Weak',
    attack: detailedTypes.flatMap((type) =>
      type.damage_relations.no_damage_to.map((d) => (
        <PokemonType type={d.name} color={color} {...pokemonTypeProps} />
      )),
    ),
    defense: detailedTypes.flatMap((type) =>
      type.damage_relations.double_damage_from.map((d) => (
        <PokemonType {...pokemonTypeProps} type={d.name} color={color} />
      )),
    ),
  };

  const allTypes = [veryStrong, strong, weak];

  const items: TabsProps['items'] = [
    {
      key: 'attack',
      label: 'Attack',
      children: (
        <div className="flex flex-col gap-2 text-white">
          {allTypes.map((type) => (
            <div key={type.label} className="flex flex-col gap-1">
              <h3>{type.label}</h3>
              {type.attack.length > 0 ? (
                <ul className="flex flex-1 gap-2 flex-wrap">{type.attack}</ul>
              ) : (
                <p className="opacity-50">No one</p>
              )}
            </div>
          ))}
        </div>
      ),
    },
    {
      key: 'defense',
      label: 'Defense',
      children: (
        <div className="flex flex-col gap-2 text-white">
          {allTypes.map((type) => (
            <div key={type.label} className="flex flex-col gap-1">
              <h3>{type.label}</h3>
              {type.defense.length > 0 ? (
                <ul className="flex flex-1 gap-2 flex-wrap">{type.defense}</ul>
              ) : (
                <p className="opacity-50">No one</p>
              )}
            </div>
          ))}
        </div>
      ),
    },
  ];

  return <Tabs items={items} rootClassName="antd-tabs-container" defaultActiveKey="attack" />;
};

export default DetailedTypesTab;
