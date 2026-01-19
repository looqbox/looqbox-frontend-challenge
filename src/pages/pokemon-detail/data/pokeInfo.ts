import type { PokemonProps, PokemonTypes } from '../../../types/pokemonTypes'
import type { SpeciesProps } from '../../../types/speciesTypes'

export const formatPokeInfo = (
  pokeData: PokemonProps,
  speciesData: SpeciesProps
) => {
  return {
    id: pokeData.id,
    name: pokeData.name.split('-').join(' '),
    types: pokeData.types.map(type => type.type.name) as PokemonTypes[],
    cry: pokeData.cries.latest,
    sprite:
      pokeData.sprites.versions['generation-v']['black-white'].animated
        .front_default || pokeData.sprites.front_default,
    shinySprite:
      pokeData.sprites.versions['generation-v']['black-white'].animated
        .front_shiny || pokeData.sprites.front_shiny,
    description:
      speciesData?.flavor_text_entries
        .find(entry => entry.language.name === 'en')
        ?.flavor_text.replace(/\f/g, ' ') || ''
  }
}
