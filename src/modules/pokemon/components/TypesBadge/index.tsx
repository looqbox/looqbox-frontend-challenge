import{ Tag } from 'antd/lib';

export type BadgeProps = {
    types: string[];
}

const badgeColors: {[key: string]: string} = {
  bug: '#A2CE6F',
  dark: '#002E4E',
  dragon: '#53a4cf',
  electric: '#FFF050',
  fairy: '#FFB3C6',
  fighting: '#F79D65',
  fire: '#DD393C',
  flying: '#CAF0F8',
  ghost: '#542650',
  grass: '#52B788',
  ground: '#B08968',
  ice: '#ADE8F4',
  normal: '#E3D5CA',
  poison: '#C77DFF',
  psychic: '#FB6F92',
  rock: '#575757',
  steel: '#E5E5E5',
  water: '#48CAE4'
};

export default function TypesBadge({types}: BadgeProps) {
  return <div style={{display: 'flex', justifyContent: 'center', textTransform: 'capitalize'}}>
    {types.map((type) => (
      <Tag key={type} color={badgeColors[type]}>{type}</Tag>
    ))}
  </div>;
}