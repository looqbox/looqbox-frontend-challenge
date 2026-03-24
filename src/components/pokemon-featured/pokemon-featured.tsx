import type { PokemonFeaturedProps } from './pokemon-featured.types'

import './pokemon-featured.css'

export function PokemonFeatured({ name, image, type }: PokemonFeaturedProps) {
  return (
    <div className={`pokemon-featured pokemon-featured-${type}`}>
      <img src={image} alt={name} />
    </div>
  )
}
