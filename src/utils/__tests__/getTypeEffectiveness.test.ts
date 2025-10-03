import { describe, it, expect } from 'vitest'
import { calculateTypeEffectiveness } from '../getTypeEffectiveness'
import type { TypeDetail } from '../../api/types'

describe('calculateTypeEffectiveness', () => {
  it('should calculate double damage correctly', () => {
    const mockTypes: TypeDetail[] = [
      {
        id: 12,
        name: 'grass',
        damage_relations: {
          double_damage_from: [
            { name: 'fire', url: '' },
            { name: 'ice', url: '' },
          ],
          half_damage_from: [],
          no_damage_from: [],
          double_damage_to: [],
          half_damage_to: [],
          no_damage_to: [],
        },
      },
    ]

    const result = calculateTypeEffectiveness(mockTypes)

    expect(result.fire).toBe(2)
    expect(result.ice).toBe(2)
  })

  it('should calculate half damage correctly', () => {
    const mockTypes: TypeDetail[] = [
      {
        id: 12,
        name: 'grass',
        damage_relations: {
          double_damage_from: [],
          half_damage_from: [
            { name: 'water', url: '' },
            { name: 'electric', url: '' },
          ],
          no_damage_from: [],
          double_damage_to: [],
          half_damage_to: [],
          no_damage_to: [],
        },
      },
    ]

    const result = calculateTypeEffectiveness(mockTypes)

    expect(result.water).toBe(0.5)
    expect(result.electric).toBe(0.5)
  })

  it('should calculate no damage (immunity) correctly', () => {
    const mockTypes: TypeDetail[] = [
      {
        id: 8,
        name: 'ghost',
        damage_relations: {
          double_damage_from: [],
          half_damage_from: [],
          no_damage_from: [
            { name: 'normal', url: '' },
            { name: 'fighting', url: '' },
          ],
          double_damage_to: [],
          half_damage_to: [],
          no_damage_to: [],
        },
      },
    ]

    const result = calculateTypeEffectiveness(mockTypes)

    expect(result.normal).toBe(0)
    expect(result.fighting).toBe(0)
  })

  it('should combine effectiveness from multiple types', () => {
    const mockTypes: TypeDetail[] = [
      {
        id: 12,
        name: 'grass',
        damage_relations: {
          double_damage_from: [{ name: 'fire', url: '' }],
          half_damage_from: [{ name: 'water', url: '' }],
          no_damage_from: [],
          double_damage_to: [],
          half_damage_to: [],
          no_damage_to: [],
        },
      },
      {
        id: 4,
        name: 'poison',
        damage_relations: {
          double_damage_from: [{ name: 'psychic', url: '' }],
          half_damage_from: [{ name: 'fighting', url: '' }],
          no_damage_from: [],
          double_damage_to: [],
          half_damage_to: [],
          no_damage_to: [],
        },
      },
    ]

    const result = calculateTypeEffectiveness(mockTypes)

    expect(result.fire).toBe(2)
    expect(result.water).toBe(0.5)
    expect(result.psychic).toBe(2)
    expect(result.fighting).toBe(0.5)
  })

  it('should stack effectiveness when same type appears in both types', () => {
    const mockTypes: TypeDetail[] = [
      {
        id: 6,
        name: 'rock',
        damage_relations: {
          double_damage_from: [{ name: 'water', url: '' }],
          half_damage_from: [],
          no_damage_from: [],
          double_damage_to: [],
          half_damage_to: [],
          no_damage_to: [],
        },
      },
      {
        id: 5,
        name: 'ground',
        damage_relations: {
          double_damage_from: [{ name: 'water', url: '' }],
          half_damage_from: [],
          no_damage_from: [],
          double_damage_to: [],
          half_damage_to: [],
          no_damage_to: [],
        },
      },
    ]

    const result = calculateTypeEffectiveness(mockTypes)

    expect(result.water).toBe(4)
  })

  it('should handle immunity overriding other effectiveness', () => {
    const mockTypes: TypeDetail[] = [
      {
        id: 9,
        name: 'steel',
        damage_relations: {
          double_damage_from: [{ name: 'fire', url: '' }],
          half_damage_from: [],
          no_damage_from: [{ name: 'poison', url: '' }],
          double_damage_to: [],
          half_damage_to: [],
          no_damage_to: [],
        },
      },
    ]

    const result = calculateTypeEffectiveness(mockTypes)

    expect(result.fire).toBe(2)
    expect(result.poison).toBe(0)
  })

  it('should return empty object when no types provided', () => {
    const result = calculateTypeEffectiveness([])

    expect(result).toEqual({})
  })

  it('should handle types with no damage relations', () => {
    const mockTypes: TypeDetail[] = [
      {
        id: 1,
        name: 'normal',
        damage_relations: {
          double_damage_from: [],
          half_damage_from: [],
          no_damage_from: [],
          double_damage_to: [],
          half_damage_to: [],
          no_damage_to: [],
        },
      },
    ]

    const result = calculateTypeEffectiveness(mockTypes)

    expect(result).toEqual({})
  })
})
