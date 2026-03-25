import { Tag } from 'antd'

import type { PokemonTitleProps } from './pokemon-title.types'

import './pokemon-title.css'

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
          <Tag
            key={type}
            color='default'
            variant='outlined'
            className='pokemon-title-tag'
          >
            {type}
          </Tag>
        ))}
      </div>
    </div>
  )
}
