import { useState } from 'react'
import { type IPokemonData } from '../../../types/Pokemon.types'

import skeletonImage from '../../../assets/icons/pokeball-gray.svg'

interface IPokeCardImageProps {
  pokemon: IPokemonData
}

export default function PokeCardImage ({ pokemon }: IPokeCardImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <>
      {!isLoaded && (
        <img
          alt={`Image of ${pokemon.name}`}
          src={skeletonImage}
          width={72}
          height={72}
        />
      )}
      <img
        style={{ display: isLoaded ? 'block' : 'none' }}
        alt={`Image of ${pokemon.name}`}
        src={pokemon.sprites.other.dream_world.front_default}
        loading='lazy'
        onLoad={() => { setIsLoaded(true) }}
        width={72}
        height={72}
      />
    </>
  )
}
