import { pokemonTypeColors } from '@/utils'

import type { PokemonFeaturedProps } from './pokemon-featured.types'

import './pokemon-featured.css'

export function PokemonFeatured({ name, image, type }: PokemonFeaturedProps) {
  return (
    <div
      className='pokemon-featured'
      style={{
        background: `radial-gradient(48.52% 48.52% at 50% 50%, ${pokemonTypeColors[type]} 40%, #F6F5EE 100%)`,
      }}
    >
      <img src={image} alt={name} />
    </div>
  )
}
