import { Tag } from 'antd'
import type { TagProps } from 'antd'

import type { PokemonType } from '../pokemon-featured/pokemon-featured.types'
import type { PokemonTitleProps } from './pokemon-title.types'

import './pokemon-title.css'

const TYPE_COLORS: Record<PokemonType, TagProps['color']> = {
  normal: 'default',
  fighting: 'volcano',
  flying: 'blue',
  poison: 'red',
  ground: 'orange',
  rock: 'gold',
  bug: 'lime',
  ghost: 'purple',
  steel: 'default',
  fire: 'volcano',
  water: 'cyan',
  grass: 'green',
  electric: 'gold',
  psychic: 'magenta',
  ice: 'cyan',
  dragon: 'geekblue',
  dark: 'default',
  fairy: 'magenta',
  stellar: 'blue',
  unknown: 'default',
}

export function PokemonTitle({ name, number, types }: PokemonTitleProps) {
  const formattedNumber = `#${String(number).padStart(3, '0')}`

  return (
    <div className='pokemon-title'>
      <div className='pokemon-title-header'>
        <h1 className='pokemon-title-name'>{name}</h1>
        <span className='pokemon-title-number'>{formattedNumber}</span>
      </div>
      <div className='pokemon-title-tags'>
        {types.map(type => (
          <Tag key={type} color={TYPE_COLORS[type]} className='pokemon-title-tag'>
            {type}
          </Tag>
        ))}
      </div>
    </div>
  )
}
