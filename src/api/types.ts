import type { Types } from './pokemon'

interface DamageRelations {
  double_damage_from: Array<{ name: string; url: string }>
  double_damage_to: Array<{ name: string; url: string }>
  half_damage_from: Array<{ name: string; url: string }>
  half_damage_to: Array<{ name: string; url: string }>
  no_damage_from: Array<{ name: string; url: string }>
  no_damage_to: Array<{ name: string; url: string }>
}

export interface TypeDetail {
  id: number
  name: string
  damage_relations: DamageRelations
}

export const getPokemonTypes = async (
  types: Types[],
): Promise<TypeDetail[]> => {
  const typeDetailsPromises = types.map((t) =>
    fetch(t.type.url).then((res) => res.json()),
  )

  const typeDetails: TypeDetail[] = await Promise.all(typeDetailsPromises)

  return typeDetails
}
