import { describe, it, expect, vi, beforeEach } from 'vitest'
import { getPokemonTypes, type TypeDetail } from '../types'
import type { Types } from '../pokemon'

describe('getPokemonTypes', () => {
  beforeEach(() => {
    vi.restoreAllMocks()
    vi.spyOn(global, 'fetch')
  })

  it('should fetch and return type details successfully', async () => {
    const mockTypes: Types[] = [
      {
        slot: 1,
        type: { name: 'grass', url: 'https://pokeapi.co/api/v2/type/12/' },
      },
      {
        slot: 2,
        type: { name: 'poison', url: 'https://pokeapi.co/api/v2/type/4/' },
      },
    ]

    const mockGrass: TypeDetail = {
      id: 12,
      name: 'grass',
      damage_relations: {
        double_damage_from: [{ name: 'fire', url: '.../type/10/' }],
        double_damage_to: [{ name: 'water', url: '.../type/11/' }],
        half_damage_from: [],
        half_damage_to: [],
        no_damage_from: [],
        no_damage_to: [],
      },
    }

    const mockPoison: TypeDetail = {
      id: 4,
      name: 'poison',
      damage_relations: {
        double_damage_from: [{ name: 'psychic', url: '.../type/14/' }],
        double_damage_to: [{ name: 'grass', url: '.../type/12/' }],
        half_damage_from: [],
        half_damage_to: [],
        no_damage_from: [],
        no_damage_to: [],
      },
    }

    vi.mocked(global.fetch)
      .mockResolvedValueOnce({
        json: vi.fn().mockResolvedValueOnce(mockGrass),
      } as unknown as Response)
      .mockResolvedValueOnce({
        json: vi.fn().mockResolvedValueOnce(mockPoison),
      } as unknown as Response)

    const result = await getPokemonTypes(mockTypes)

    expect(global.fetch).toHaveBeenCalledTimes(2)
    expect(global.fetch).toHaveBeenCalledWith(
      'https://pokeapi.co/api/v2/type/12/',
    )
    expect(global.fetch).toHaveBeenCalledWith(
      'https://pokeapi.co/api/v2/type/4/',
    )
    expect(result).toEqual([mockGrass, mockPoison])
  })

  it('should return empty array when passed no types', async () => {
    const result = await getPokemonTypes([])

    expect(global.fetch).not.toHaveBeenCalled()
    expect(result).toEqual([])
  })

  it('should throw error if fetch fails', async () => {
    const mockTypes: Types[] = [
      {
        slot: 1,
        type: { name: 'dragon', url: 'https://pokeapi.co/api/v2/type/16/' },
      },
    ]

    vi.mocked(global.fetch).mockRejectedValueOnce(new Error('Network error'))

    await expect(getPokemonTypes(mockTypes)).rejects.toThrow('Network error')
  })

  it('should throw error if json parsing fails', async () => {
    const mockTypes: Types[] = [
      {
        slot: 1,
        type: { name: 'ghost', url: 'https://pokeapi.co/api/v2/type/8/' },
      },
    ]

    vi.mocked(global.fetch).mockResolvedValueOnce({
      json: vi.fn().mockRejectedValueOnce(new Error('Invalid JSON')),
    } as unknown as Response)

    await expect(getPokemonTypes(mockTypes)).rejects.toThrow('Invalid JSON')
  })
})
