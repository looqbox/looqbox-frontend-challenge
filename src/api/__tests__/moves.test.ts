import { describe, it, expect, vi, beforeEach } from 'vitest'
import { getPokemonMove, type MoveDetail } from '../moves'
import { api } from '../../utils/api'

vi.mock('../../utils/api', () => ({
  api: {
    get: vi.fn(),
  },
}))

describe('getPokemonMove', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('should fetch and return move details successfully', async () => {
    const mockUrl = 'https://pokeapi.co/api/v2/move/1/'

    const mockMoveDetail: MoveDetail = {
      id: 1,
      name: 'pound',
      accuracy: 100,
      effect_chance: null,
      pp: 35,
      priority: 0,
      power: 40,
      damage_class: {
        name: 'physical',
        url: 'https://pokeapi.co/api/v2/move-damage-class/2/',
      },
      effect_entries: [
        {
          effect: 'Inflicts regular damage with no additional effect.',
          short_effect: 'Inflicts regular damage.',
          language: {
            name: 'en',
            url: 'https://pokeapi.co/api/v2/language/9/',
          },
        },
      ],
      flavor_text_entries: [
        {
          flavor_text: 'Pounds with forelegs or tail.',
          language: {
            name: 'en',
            url: 'https://pokeapi.co/api/v2/language/9/',
          },
          version_group: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/',
          },
        },
      ],
      type: {
        name: 'normal',
        url: 'https://pokeapi.co/api/v2/type/1/',
      },
      target: {
        name: 'selected-pokemon',
        url: 'https://pokeapi.co/api/v2/move-target/10/',
      },
    }

    vi.mocked(api.get).mockResolvedValueOnce({ data: mockMoveDetail })

    const result = await getPokemonMove(mockUrl)

    expect(api.get).toHaveBeenCalledTimes(1)

    expect(api.get).toHaveBeenCalledWith(mockUrl)

    expect(result).toEqual(mockMoveDetail)

    expect(result.name).toBe('pound')
    expect(result.power).toBe(40)
    expect(result.accuracy).toBe(100)
    expect(result.type.name).toBe('normal')
  })

  it('should handle moves with null values correctly', async () => {
    const mockUrl = 'https://pokeapi.co/api/v2/move/45/'

    const mockStatusMove: MoveDetail = {
      id: 45,
      name: 'growl',
      accuracy: 100,
      effect_chance: null,
      pp: 40,
      priority: 0,
      power: null,
      damage_class: {
        name: 'status',
        url: 'https://pokeapi.co/api/v2/move-damage-class/1/',
      },
      effect_entries: [
        {
          effect: "Lowers the target's Attack by one stage.",
          short_effect: "Lowers the target's Attack by one stage.",
          language: {
            name: 'en',
            url: 'https://pokeapi.co/api/v2/language/9/',
          },
        },
      ],
      flavor_text_entries: [],
      type: {
        name: 'normal',
        url: 'https://pokeapi.co/api/v2/type/1/',
      },
      target: {
        name: 'all-opponents',
        url: 'https://pokeapi.co/api/v2/move-target/11/',
      },
    }

    vi.mocked(api.get).mockResolvedValueOnce({ data: mockStatusMove })

    const result = await getPokemonMove(mockUrl)

    expect(result.power).toBeNull()
    expect(result.damage_class.name).toBe('status')
    expect(result.name).toBe('growl')
  })

  it('should throw error when API request fails', async () => {
    const mockUrl = 'https://pokeapi.co/api/v2/move/999999/'
    const mockError = new Error('Request failed with status code 404')

    vi.mocked(api.get).mockRejectedValueOnce(mockError)

    await expect(getPokemonMove(mockUrl)).rejects.toThrow(
      'Request failed with status code 404',
    )

    expect(api.get).toHaveBeenCalledWith(mockUrl)
  })

  it('should handle network errors', async () => {
    const mockUrl = 'https://pokeapi.co/api/v2/move/1/'
    const networkError = new Error('Network Error')

    vi.mocked(api.get).mockRejectedValueOnce(networkError)

    await expect(getPokemonMove(mockUrl)).rejects.toThrow('Network Error')
  })

  it('should handle malformed URLs', async () => {
    const invalidUrl = 'not-a-valid-url'
    const mockError = new Error('Invalid URL')

    vi.mocked(api.get).mockRejectedValueOnce(mockError)

    await expect(getPokemonMove(invalidUrl)).rejects.toThrow('Invalid URL')
    expect(api.get).toHaveBeenCalledWith(invalidUrl)
  })
})
