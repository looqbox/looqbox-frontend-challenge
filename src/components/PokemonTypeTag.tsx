import { Tag } from 'antd';
import type { PokemonType } from '../shared/pokemon/types';
import { typeIconSrc } from '../shared/pokemon/typeIcons';
import { formatPokemonName } from '../shared/utils/formatPokemonName';

type Props = { type: PokemonType };

export function PokemonTypeTag({ type }: Props) {
  return (
    <Tag className={`type-tag type-tag--${type}`}>
      <img className="type-tag__icon" src={typeIconSrc[type]} alt="" aria-hidden="true" />
      <span className="type-tag__text">{formatPokemonName(type)}</span>
    </Tag>
  );
}
