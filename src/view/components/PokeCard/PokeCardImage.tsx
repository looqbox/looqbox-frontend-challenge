import { type IPokemonData } from '../../../types/Pokemon.types'

import ProgressiveImage from '../ProgressiveImage'

interface IPokeCardImageProps {
  pokemon: IPokemonData
}

export default function PokeCardImage ({ pokemon }: IPokeCardImageProps) {
  return (
    <ProgressiveImage
      src={pokemon.sprites.other.dream_world.front_default}
      alt={`Image of ${pokemon.name}`}
      width={72}
      height={72}
    />
  )
}
