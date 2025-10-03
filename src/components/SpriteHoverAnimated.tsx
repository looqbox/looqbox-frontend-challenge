import { useState } from 'react'
import type { Pokemon } from '../api/pokemon'
import { getSpriteUrl } from '../utils/getSpriteUrl'

export const SpriteHoverAnimated = ({
  pokemon,
  className,
}: {
  pokemon: Pokemon
  className?: string
}) => {
  const [isHovered, setIsHovered] = useState(false)

  const { staticSprite, animatedSprite } = getSpriteUrl(pokemon)

  return (
    <img
      src={isHovered ? animatedSprite : staticSprite}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      alt={pokemon.name.split('-').join(' ')}
      className={
        `w-full h-auto object-contain transition-transform duration-300 ${
          isHovered ? 'scale-105' : 'scale-100'
        }` + ` ${className}`
      }
    />
  )
}
