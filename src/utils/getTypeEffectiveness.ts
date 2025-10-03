import type { TypeDetail } from '../api/types'

type TypeEffectivenessMap = Record<string, number>

export const calculateTypeEffectiveness = (
  types: TypeDetail[],
): TypeEffectivenessMap => {
  const effectivenessMap: TypeEffectivenessMap = {}

  types.forEach((type) => {
    type.damage_relations.double_damage_from.forEach((t) => {
      effectivenessMap[t.name] = (effectivenessMap[t.name] || 1) * 2
    })

    type.damage_relations.half_damage_from.forEach((t) => {
      effectivenessMap[t.name] = (effectivenessMap[t.name] || 1) * 0.5
    })

    type.damage_relations.no_damage_from.forEach((t) => {
      effectivenessMap[t.name] = 0
    })
  })

  return effectivenessMap
}
