import type { Pokemon } from '../api/pokemon'

export const getSpriteUrl = (pokemon: Pokemon) => {
  const staticSprite =
    pokemon?.sprites?.front_default ||
    pokemon?.sprites?.other?.['official-artwork']?.front_default ||
    '/pokemon-svg.svg'

  const animatedSprite =
    pokemon?.sprites?.versions?.['generation-v']?.['black-white']?.animated
      ?.front_default || staticSprite

  return { staticSprite, animatedSprite }
}
