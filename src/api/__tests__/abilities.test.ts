import { describe, it, expect, vi, beforeEach } from 'vitest'
import { getPokemonAbilities } from '../abilities'
import { api } from '../../utils/api'
import type { Abilities } from '../pokemon'

vi.mock('../../utils/api', () => ({
  api: {
    get: vi.fn(),
  },
}))

describe('getPokemonAbilities', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('should fetch and return ability details for all abilities', async () => {
    const mockAbilities: Abilities[] = [
      {
        ability: {
          name: 'overgrow',
          url: 'https://pokeapi.co/api/v2/ability/65/',
        },
        is_hidden: false,
        slot: 1,
      },
      {
        ability: {
          name: 'chlorophyll',
          url: 'https://pokeapi.co/api/v2/ability/34/',
        },
        is_hidden: true,
        slot: 3,
      },
    ]

    const mockAbilityDetail1 = {
      id: 65,
      name: 'overgrow',
      is_main_series: true,
      generation: { name: 'generation-iii', url: 'https://...' },
      names: [
        {
          name: 'Overgrow',
          language: { name: 'en', url: 'https://...' },
        },
      ],
      effect_entries: [
        {
          effect: 'Boosts Grass moves in a pinch.',
          short_effect: 'Boosts Grass moves in a pinch.',
          language: { name: 'en', url: 'https://...' },
        },
      ],
      flavor_text_entries: [],
      pokemon: [],
    }

    const mockAbilityDetail2 = {
      id: 34,
      name: 'chlorophyll',
      is_main_series: true,
      generation: { name: 'generation-iii', url: 'https://...' },
      names: [
        {
          name: 'Chlorophyll',
          language: { name: 'en', url: 'https://...' },
        },
      ],
      effect_entries: [
        {
          effect: 'Doubles Speed in sunshine.',
          short_effect: 'Doubles Speed in sunshine.',
          language: { name: 'en', url: 'https://...' },
        },
      ],
      flavor_text_entries: [],
      pokemon: [],
    }

    vi.mocked(api.get)
      .mockResolvedValueOnce({ data: mockAbilityDetail1 })
      .mockResolvedValueOnce({ data: mockAbilityDetail2 })

    const result = await getPokemonAbilities(mockAbilities)

    expect(api.get).toHaveBeenCalledTimes(2)
    expect(api.get).toHaveBeenCalledWith(
      'https://pokeapi.co/api/v2/ability/65/',
    )
    expect(api.get).toHaveBeenCalledWith(
      'https://pokeapi.co/api/v2/ability/34/',
    )

    expect(result).toEqual([mockAbilityDetail1, mockAbilityDetail2])
  })

  it('should return empty array when no abilities are provided', async () => {
    const result = await getPokemonAbilities([])

    expect(api.get).not.toHaveBeenCalled()
    expect(result).toEqual([])
  })

  it('should handle API errors gracefully', async () => {
    const mockAbilities: Abilities[] = [
      {
        ability: {
          name: 'overgrow',
          url: 'https://pokeapi.co/api/v2/ability/65/',
        },
        is_hidden: false,
        slot: 1,
      },
    ]

    vi.mocked(api.get).mockRejectedValueOnce(new Error('Network error'))

    await expect(getPokemonAbilities(mockAbilities)).rejects.toThrow(
      'Network error',
    )
  })
})
