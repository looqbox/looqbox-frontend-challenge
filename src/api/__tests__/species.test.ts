import { describe, it, expect, vi, beforeEach } from 'vitest'
import {
  getPokemonSpecies,
  getPokemonSpeciesEvolution,
  type PokemonSpecies,
} from '../species'
import type { Pokemon } from '../pokemon'
import { api } from '../../utils/api'

vi.mock('../../utils/api', () => ({
  api: {
    get: vi.fn(),
  },
}))

describe('getPokemonSpecies', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('should fetch and return species details successfully', async () => {
    const mockUrl = 'https://pokeapi.co/api/v2/pokemon-species/1/'

    const mockSpecies: PokemonSpecies = {
      base_happiness: 70,
      capture_rate: 45,
      color: {
        name: 'green',
        url: 'https://pokeapi.co/api/v2/pokemon-color/5/',
      },
      evolution_chain: { url: 'https://pokeapi.co/api/v2/evolution-chain/1/' },
      flavor_text_entries: [
        {
          flavor_text: 'A strange seed was planted on its back at birth.',
          language: {
            name: 'en',
            url: 'https://pokeapi.co/api/v2/language/9/',
          },
          version: { name: 'red', url: 'https://pokeapi.co/api/v2/version/1/' },
        },
      ],
      genera: [{ genus: 'Seed Pokémon', language: { name: 'en' } }],
      habitat: {
        name: 'grassland',
        url: 'https://pokeapi.co/api/v2/pokemon-habitat/3/',
      },
      is_legendary: false,
      is_mythical: false,
      is_baby: false,
    }

    vi.mocked(api.get).mockResolvedValueOnce({ data: mockSpecies })

    const result = await getPokemonSpecies(mockUrl)

    expect(api.get).toHaveBeenCalledTimes(1)
    expect(api.get).toHaveBeenCalledWith(mockUrl)
    expect(result).toEqual(mockSpecies)
    expect(result.is_legendary).toBe(false)
    expect(result.base_happiness).toBe(70)
  })

  it('should handle legendary pokemon correctly', async () => {
    const mockUrl = 'https://pokeapi.co/api/v2/pokemon-species/150/'

    const mockLegendary: PokemonSpecies = {
      base_happiness: 0,
      capture_rate: 3,
      color: {
        name: 'purple',
        url: 'https://pokeapi.co/api/v2/pokemon-color/7/',
      },
      evolution_chain: { url: 'https://pokeapi.co/api/v2/evolution-chain/63/' },
      flavor_text_entries: [],
      genera: [{ genus: 'Genetic Pokémon', language: { name: 'en' } }],
      habitat: null,
      is_legendary: true,
      is_mythical: false,
      is_baby: false,
    }

    vi.mocked(api.get).mockResolvedValueOnce({ data: mockLegendary })

    const result = await getPokemonSpecies(mockUrl)

    expect(result.is_legendary).toBe(true)
    expect(result.habitat).toBeNull()
  })

  it('should throw error when API request fails', async () => {
    const mockUrl = 'https://pokeapi.co/api/v2/pokemon-species/99999/'
    const mockError = new Error('Request failed with status code 404')

    vi.mocked(api.get).mockRejectedValueOnce(mockError)

    await expect(getPokemonSpecies(mockUrl)).rejects.toThrow('404')
  })
})

describe('getPokemonSpeciesEvolution', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('should return empty array when evolution_chain is missing', async () => {
    const mockSpecies = {
      evolution_chain: { url: '' },
    } as PokemonSpecies

    const result = await getPokemonSpeciesEvolution(mockSpecies)

    expect(result).toEqual([])
    expect(api.get).not.toHaveBeenCalled()
  })

  it('should fetch and return single evolution (no evolutions)', async () => {
    const mockSpecies: PokemonSpecies = {
      evolution_chain: {
        url: 'https://pokeapi.co/api/v2/evolution-chain/101/',
      },
    } as PokemonSpecies

    const mockEvolutionChain = {
      chain: {
        species: {
          name: 'ditto',
          url: 'https://pokeapi.co/api/v2/pokemon-species/132/',
        },
        evolves_to: [],
      },
    }

    const mockDitto: Pokemon = {
      id: 132,
      name: 'ditto',
      height: 3,
      weight: 40,
      abilities: [],
      types: [{ slot: 1, type: { name: 'normal', url: '' } }],
      stats: [],
      moves: [],
      sprites: {
        front_default: 'https://raw.githubusercontent.com/.../132.png',
        other: { 'official-artwork': { front_default: '' } },
        versions: {
          'generation-v': {
            'black-white': { animated: { front_default: '' } },
          },
        },
      },
      species: { name: 'ditto', url: '' },
      cries: { latest: '', legacy: '' },
    }

    vi.mocked(api.get)
      .mockResolvedValueOnce({ data: mockEvolutionChain }) // evolution-chain
      .mockResolvedValueOnce({ data: mockDitto }) // pokemon/ditto

    const result = await getPokemonSpeciesEvolution(mockSpecies)

    expect(api.get).toHaveBeenCalledTimes(2)
    expect(result).toHaveLength(1)
    expect(result[0].name).toBe('ditto')
  })

  it('should fetch and return full evolution chain (3 stages)', async () => {
    const mockSpecies: PokemonSpecies = {
      evolution_chain: { url: 'https://pokeapi.co/api/v2/evolution-chain/1/' },
    } as PokemonSpecies

    const mockEvolutionChain = {
      chain: {
        species: {
          name: 'bulbasaur',
          url: 'https://pokeapi.co/api/v2/pokemon-species/1/',
        },
        evolves_to: [
          {
            species: {
              name: 'ivysaur',
              url: 'https://pokeapi.co/api/v2/pokemon-species/2/',
            },
            evolves_to: [
              {
                species: {
                  name: 'venusaur',
                  url: 'https://pokeapi.co/api/v2/pokemon-species/3/',
                },
                evolves_to: [],
              },
            ],
          },
        ],
      },
    }

    const mockBulbasaur: Pokemon = {
      id: 1,
      name: 'bulbasaur',
      height: 7,
      weight: 69,
    } as Pokemon

    const mockIvysaur: Pokemon = {
      id: 2,
      name: 'ivysaur',
      height: 10,
      weight: 130,
    } as Pokemon

    const mockVenusaur: Pokemon = {
      id: 3,
      name: 'venusaur',
      height: 20,
      weight: 1000,
    } as Pokemon

    // Mock das chamadas (1 evolution-chain + 3 pokemon)
    vi.mocked(api.get)
      .mockResolvedValueOnce({ data: mockEvolutionChain })
      .mockResolvedValueOnce({ data: mockBulbasaur })
      .mockResolvedValueOnce({ data: mockIvysaur })
      .mockResolvedValueOnce({ data: mockVenusaur })

    const result = await getPokemonSpeciesEvolution(mockSpecies)

    expect(api.get).toHaveBeenCalledTimes(4)
    expect(api.get).toHaveBeenNthCalledWith(
      1,
      'https://pokeapi.co/api/v2/evolution-chain/1/',
    )
    expect(api.get).toHaveBeenNthCalledWith(2, 'pokemon/bulbasaur')
    expect(api.get).toHaveBeenNthCalledWith(3, 'pokemon/ivysaur')
    expect(api.get).toHaveBeenNthCalledWith(4, 'pokemon/venusaur')

    expect(result).toHaveLength(3)
    expect(result[0].name).toBe('bulbasaur')
    expect(result[1].name).toBe('ivysaur')
    expect(result[2].name).toBe('venusaur')
  })

  it('should handle branching evolutions (Eevee)', async () => {
    const mockSpecies: PokemonSpecies = {
      evolution_chain: { url: 'https://pokeapi.co/api/v2/evolution-chain/67/' },
    } as PokemonSpecies

    const mockEvolutionChain = {
      chain: {
        species: {
          name: 'eevee',
          url: 'https://pokeapi.co/api/v2/pokemon-species/133/',
        },
        evolves_to: [
          {
            species: {
              name: 'vaporeon',
              url: 'https://pokeapi.co/api/v2/pokemon-species/134/',
            },
            evolves_to: [],
          },
          {
            species: {
              name: 'jolteon',
              url: 'https://pokeapi.co/api/v2/pokemon-species/135/',
            },
            evolves_to: [],
          },
          {
            species: {
              name: 'flareon',
              url: 'https://pokeapi.co/api/v2/pokemon-species/136/',
            },
            evolves_to: [],
          },
        ],
      },
    }

    const mockEevee: Pokemon = { id: 133, name: 'eevee' } as Pokemon
    const mockVaporeon: Pokemon = { id: 134, name: 'vaporeon' } as Pokemon
    const mockJolteon: Pokemon = { id: 135, name: 'jolteon' } as Pokemon
    const mockFlareon: Pokemon = { id: 136, name: 'flareon' } as Pokemon

    vi.mocked(api.get)
      .mockResolvedValueOnce({ data: mockEvolutionChain })
      .mockResolvedValueOnce({ data: mockEevee })
      .mockResolvedValueOnce({ data: mockVaporeon })
      .mockResolvedValueOnce({ data: mockJolteon })
      .mockResolvedValueOnce({ data: mockFlareon })

    const result = await getPokemonSpeciesEvolution(mockSpecies)

    expect(result).toHaveLength(4)
    expect(result.map((p) => p.name)).toEqual([
      'eevee',
      'vaporeon',
      'jolteon',
      'flareon',
    ])
  })

  it('should throw error when evolution chain request fails', async () => {
    const mockSpecies: PokemonSpecies = {
      evolution_chain: {
        url: 'https://pokeapi.co/api/v2/evolution-chain/999/',
      },
    } as PokemonSpecies

    const mockError = new Error('Request failed with status code 404')

    vi.mocked(api.get).mockRejectedValueOnce(mockError)

    await expect(getPokemonSpeciesEvolution(mockSpecies)).rejects.toThrow('404')
  })

  it('should throw error when pokemon details request fails', async () => {
    const mockSpecies: PokemonSpecies = {
      evolution_chain: { url: 'https://pokeapi.co/api/v2/evolution-chain/1/' },
    } as PokemonSpecies

    const mockEvolutionChain = {
      chain: {
        species: { name: 'bulbasaur', url: '' },
        evolves_to: [],
      },
    }

    vi.mocked(api.get)
      .mockResolvedValueOnce({ data: mockEvolutionChain })
      .mockRejectedValueOnce(new Error('Pokemon not found'))

    await expect(getPokemonSpeciesEvolution(mockSpecies)).rejects.toThrow(
      'Pokemon not found',
    )
  })
})
