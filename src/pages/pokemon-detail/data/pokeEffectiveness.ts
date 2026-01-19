import type { PokemonTypes } from '../../../types/pokemonTypes'
import type { TypeProps } from '../../../types/typesTypes'

export const formatTypeEffectiveness = (
  typesData: TypeProps
): { [key: string]: PokemonTypes[] } => {
  return {
    double_damage_to: typesData?.damage_relations.double_damage_to.map(
      type => type.name as PokemonTypes
    ),
    double_damage_from: typesData?.damage_relations.double_damage_from.map(
      type => type.name as PokemonTypes
    )
  }
}
