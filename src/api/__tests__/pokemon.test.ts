import { describe, it, expect, vi, beforeEach } from 'vitest'
import { getPokemonPagination, getPokemon, type Pokemon } from '../pokemon'
import { api } from '../../utils/api'
import { getPokemonAbilities, type AbilityDetail } from '../abilities'
import {
  getPokemonSpecies,
  getPokemonSpeciesEvolution,
  type PokemonSpecies,
} from '../species'
import { getPokemonTypes, type TypeDetail } from '../types'

vi.mock('../../utils/api', () => ({
  api: {
    get: vi.fn(),
  },
}))

vi.mock('../abilities', () => ({
  getPokemonAbilities: vi.fn(),
}))

vi.mock('../species', () => ({
  getPokemonSpecies: vi.fn(),
  getPokemonSpeciesEvolution: vi.fn(),
}))

vi.mock('../types', () => ({
  getPokemonTypes: vi.fn(),
}))

describe('getPokemonPagination', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('should fetch paginated pokemon list successfully', async () => {
    const mockApiResponse = {
      results: [
        { name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' },
        { name: 'ivysaur', url: 'https://pokeapi.co/api/v2/pokemon/2/' },
      ],
      count: 1302,
    }

    const mockBulbasaur: Pokemon = {
      id: 1,
      name: 'bulbasaur',
      height: 7,
      weight: 69,
      abilities: [],
      types: [],
      stats: [],
      moves: [],
      sprites: {
        front_default: 'https://raw.githubusercontent.com/.../1.png',
        other: { 'official-artwork': { front_default: '' } },
        versions: {
          'generation-v': {
            'black-white': { animated: { front_default: '' } },
          },
        },
      },
      species: { name: 'bulbasaur', url: '' },
      cries: { latest: '', legacy: '' },
    }

    const mockIvysaur: Pokemon = {
      id: 2,
      name: 'ivysaur',
      height: 10,
      weight: 130,
      abilities: [],
      types: [],
      stats: [],
      moves: [],
      sprites: {
        front_default: 'https://raw.githubusercontent.com/.../2.png',
        other: { 'official-artwork': { front_default: '' } },
        versions: {
          'generation-v': {
            'black-white': { animated: { front_default: '' } },
          },
        },
      },
      species: { name: 'ivysaur', url: '' },
      cries: { latest: '', legacy: '' },
    }

    vi.mocked(api.get)
      .mockResolvedValueOnce({ data: mockApiResponse })
      .mockResolvedValueOnce({ data: mockBulbasaur })
      .mockResolvedValueOnce({ data: mockIvysaur })

    const result = await getPokemonPagination(0, 2)

    expect(api.get).toHaveBeenCalledTimes(3)
    expect(api.get).toHaveBeenNthCalledWith(1, 'pokemon?offset=0&limit=2')
    expect(api.get).toHaveBeenNthCalledWith(2, 'pokemon/bulbasaur')
    expect(api.get).toHaveBeenNthCalledWith(3, 'pokemon/ivysaur')

    expect(result.pokemons).toHaveLength(2)
    expect(result.pokemons[0].name).toBe('bulbasaur')
    expect(result.pokemons[1].name).toBe('ivysaur')
    expect(result.totalCount).toBe(1302)
  })

  it('should use default offset and limit when not provided', async () => {
    const mockApiResponse = {
      results: [],
      count: 1302,
    }

    vi.mocked(api.get).mockResolvedValueOnce({ data: mockApiResponse })

    await getPokemonPagination()

    expect(api.get).toHaveBeenCalledWith('pokemon?offset=0&limit=20')
  })

  it('should search pokemon by name successfully', async () => {
    const mockPikachu: Pokemon = {
      id: 25,
      name: 'pikachu',
      height: 4,
      weight: 60,
      abilities: [],
      types: [],
      stats: [],
      moves: [],
      sprites: {
        front_default: 'https://raw.githubusercontent.com/.../25.png',
        other: { 'official-artwork': { front_default: '' } },
        versions: {
          'generation-v': {
            'black-white': { animated: { front_default: '' } },
          },
        },
      },
      species: { name: 'pikachu', url: '' },
      cries: { latest: '', legacy: '' },
    }

    vi.mocked(api.get).mockResolvedValueOnce({ data: mockPikachu })

    const result = await getPokemonPagination(0, 20, 'Pikachu')

    expect(api.get).toHaveBeenCalledTimes(1)
    expect(api.get).toHaveBeenCalledWith('pokemon/pikachu')
    expect(result.pokemons).toHaveLength(1)
    expect(result.pokemons[0].name).toBe('pikachu')
    expect(result.totalCount).toBe(1)
  })

  it('should return empty array when pokemon name not found', async () => {
    vi.mocked(api.get).mockRejectedValueOnce(
      new Error('Request failed with status code 404'),
    )

    const result = await getPokemonPagination(0, 20, 'notfound')

    expect(api.get).toHaveBeenCalledWith('pokemon/notfound')
    expect(result.pokemons).toEqual([])
    expect(result.totalCount).toBe(0)
  })

  it('should handle API errors in pagination', async () => {
    vi.mocked(api.get).mockRejectedValueOnce(new Error('Network error'))

    await expect(getPokemonPagination(0, 20)).rejects.toThrow('Network error')
  })

  it('should handle errors when fetching individual pokemon details', async () => {
    const mockApiResponse = {
      results: [
        { name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' },
      ],
      count: 1302,
    }

    vi.mocked(api.get)
      .mockResolvedValueOnce({ data: mockApiResponse })
      .mockRejectedValueOnce(new Error('Failed to fetch pokemon details'))

    await expect(getPokemonPagination(0, 1)).rejects.toThrow(
      'Failed to fetch pokemon details',
    )
  })
})

describe('getPokemon', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('should fetch complete pokemon data successfully', async () => {
    const mockPokemon: Pokemon = {
      id: 1,
      name: 'bulbasaur',
      height: 7,
      weight: 69,
      abilities: [
        {
          ability: {
            name: 'overgrow',
            url: 'https://pokeapi.co/api/v2/ability/65/',
          },
          is_hidden: false,
          slot: 1,
        },
      ],
      types: [
        {
          slot: 1,
          type: { name: 'grass', url: 'https://pokeapi.co/api/v2/type/12/' },
        },
      ],
      stats: [{ base_stat: 45, stat: { name: 'hp', url: '' } }],
      moves: [],
      sprites: {
        front_default: 'https://raw.githubusercontent.com/.../1.png',
        other: { 'official-artwork': { front_default: '' } },
        versions: {
          'generation-v': {
            'black-white': { animated: { front_default: '' } },
          },
        },
      },
      species: {
        name: 'bulbasaur',
        url: 'https://pokeapi.co/api/v2/pokemon-species/1/',
      },
      cries: { latest: '', legacy: '' },
    }

    const mockSpecies: PokemonSpecies = {
      base_happiness: 70,
      capture_rate: 45,
      color: { name: 'green', url: '' },
      evolution_chain: { url: 'https://pokeapi.co/api/v2/evolution-chain/1/' },
      flavor_text_entries: [],
      genera: [],
      habitat: null,
      is_legendary: false,
      is_mythical: false,
      is_baby: false,
    }

    const mockAbilities: AbilityDetail[] = [
      {
        id: 65,
        name: 'overgrow',
        is_main_series: true,
        generation: { name: 'generation-iii', url: '' },
        names: [],
        effect_entries: [],
        flavor_text_entries: [],
        pokemon: [],
      },
    ]

    const mockChain: Pokemon[] = [mockPokemon]

    const mockTypes: TypeDetail[] = [
      {
        id: 12,
        name: 'grass',
        damage_relations: {
          double_damage_from: [],
          double_damage_to: [],
          half_damage_from: [],
          half_damage_to: [],
          no_damage_from: [],
          no_damage_to: [],
        },
      },
    ]

    vi.mocked(api.get).mockResolvedValueOnce({ data: mockPokemon })
    vi.mocked(getPokemonSpecies).mockResolvedValueOnce(mockSpecies)
    vi.mocked(getPokemonAbilities).mockResolvedValueOnce(mockAbilities)
    vi.mocked(getPokemonSpeciesEvolution).mockResolvedValueOnce(mockChain)
    vi.mocked(getPokemonTypes).mockResolvedValueOnce(mockTypes)

    const result = await getPokemon('bulbasaur')

    expect(api.get).toHaveBeenCalledWith('pokemon/bulbasaur')
    expect(getPokemonSpecies).toHaveBeenCalledWith(
      'https://pokeapi.co/api/v2/pokemon-species/1/',
    )
    expect(getPokemonAbilities).toHaveBeenCalledWith(mockPokemon.abilities)
    expect(getPokemonSpeciesEvolution).toHaveBeenCalledWith(mockSpecies)
    expect(getPokemonTypes).toHaveBeenCalledWith(mockPokemon.types)

    expect(result.pokemon).toEqual(mockPokemon)
    expect(result.species).toEqual(mockSpecies)
    expect(result.abilities).toEqual(mockAbilities)
    expect(result.chain).toEqual(mockChain)
    expect(result.types).toEqual(mockTypes)
  })

  it('should handle errors when fetching pokemon', async () => {
    vi.mocked(api.get).mockRejectedValueOnce(
      new Error('Request failed with status code 404'),
    )

    await expect(getPokemon('notfound')).rejects.toThrow('404')
  })

  it('should handle errors when fetching species', async () => {
    const mockPokemon: Pokemon = {
      id: 1,
      name: 'bulbasaur',
      height: 7,
      weight: 69,
      abilities: [],
      types: [],
      stats: [],
      moves: [],
      sprites: {
        front_default: '',
        other: { 'official-artwork': { front_default: '' } },
        versions: {
          'generation-v': {
            'black-white': { animated: { front_default: '' } },
          },
        },
      },
      species: {
        name: 'bulbasaur',
        url: 'https://pokeapi.co/api/v2/pokemon-species/1/',
      },
      cries: { latest: '', legacy: '' },
    }

    vi.mocked(api.get).mockResolvedValueOnce({ data: mockPokemon })
    vi.mocked(getPokemonSpecies).mockRejectedValueOnce(
      new Error('Species not found'),
    )

    await expect(getPokemon('bulbasaur')).rejects.toThrow('Species not found')
  })

  it('should handle errors when fetching abilities', async () => {
    const mockPokemon: Pokemon = {
      id: 1,
      name: 'bulbasaur',
      height: 7,
      weight: 69,
      abilities: [],
      types: [],
      stats: [],
      moves: [],
      sprites: {
        front_default: '',
        other: { 'official-artwork': { front_default: '' } },
        versions: {
          'generation-v': {
            'black-white': { animated: { front_default: '' } },
          },
        },
      },
      species: {
        name: 'bulbasaur',
        url: 'https://pokeapi.co/api/v2/pokemon-species/1/',
      },
      cries: { latest: '', legacy: '' },
    }

    const mockSpecies: PokemonSpecies = {
      base_happiness: 70,
      capture_rate: 45,
      color: { name: 'green', url: '' },
      evolution_chain: { url: '' },
      flavor_text_entries: [],
      genera: [],
      habitat: null,
      is_legendary: false,
      is_mythical: false,
      is_baby: false,
    }

    vi.mocked(api.get).mockResolvedValueOnce({ data: mockPokemon })
    vi.mocked(getPokemonSpecies).mockResolvedValueOnce(mockSpecies)
    vi.mocked(getPokemonAbilities).mockRejectedValueOnce(
      new Error('Abilities not found'),
    )

    await expect(getPokemon('bulbasaur')).rejects.toThrow('Abilities not found')
  })

  it('should handle errors when fetching evolution chain', async () => {
    const mockPokemon: Pokemon = {
      id: 1,
      name: 'bulbasaur',
      height: 7,
      weight: 69,
      abilities: [],
      types: [],
      stats: [],
      moves: [],
      sprites: {
        front_default: '',
        other: { 'official-artwork': { front_default: '' } },
        versions: {
          'generation-v': {
            'black-white': { animated: { front_default: '' } },
          },
        },
      },
      species: {
        name: 'bulbasaur',
        url: 'https://pokeapi.co/api/v2/pokemon-species/1/',
      },
      cries: { latest: '', legacy: '' },
    }

    const mockSpecies: PokemonSpecies = {
      base_happiness: 70,
      capture_rate: 45,
      color: { name: 'green', url: '' },
      evolution_chain: { url: '' },
      flavor_text_entries: [],
      genera: [],
      habitat: null,
      is_legendary: false,
      is_mythical: false,
      is_baby: false,
    }

    const mockAbilities: AbilityDetail[] = []

    vi.mocked(api.get).mockResolvedValueOnce({ data: mockPokemon })
    vi.mocked(getPokemonSpecies).mockResolvedValueOnce(mockSpecies)
    vi.mocked(getPokemonAbilities).mockResolvedValueOnce(mockAbilities)
    vi.mocked(getPokemonSpeciesEvolution).mockRejectedValueOnce(
      new Error('Evolution chain not found'),
    )

    await expect(getPokemon('bulbasaur')).rejects.toThrow(
      'Evolution chain not found',
    )
  })

  it('should handle errors when fetching types', async () => {
    const mockPokemon: Pokemon = {
      id: 1,
      name: 'bulbasaur',
      height: 7,
      weight: 69,
      abilities: [],
      types: [],
      stats: [],
      moves: [],
      sprites: {
        front_default: '',
        other: { 'official-artwork': { front_default: '' } },
        versions: {
          'generation-v': {
            'black-white': { animated: { front_default: '' } },
          },
        },
      },
      species: {
        name: 'bulbasaur',
        url: 'https://pokeapi.co/api/v2/pokemon-species/1/',
      },
      cries: { latest: '', legacy: '' },
    }

    const mockSpecies: PokemonSpecies = {
      base_happiness: 70,
      capture_rate: 45,
      color: { name: 'green', url: '' },
      evolution_chain: { url: '' },
      flavor_text_entries: [],
      genera: [],
      habitat: null,
      is_legendary: false,
      is_mythical: false,
      is_baby: false,
    }

    const mockAbilities: AbilityDetail[] = []
    const mockChain: Pokemon[] = []

    vi.mocked(api.get).mockResolvedValueOnce({ data: mockPokemon })
    vi.mocked(getPokemonSpecies).mockResolvedValueOnce(mockSpecies)
    vi.mocked(getPokemonAbilities).mockResolvedValueOnce(mockAbilities)
    vi.mocked(getPokemonSpeciesEvolution).mockResolvedValueOnce(mockChain)
    vi.mocked(getPokemonTypes).mockRejectedValueOnce(
      new Error('Types not found'),
    )

    await expect(getPokemon('bulbasaur')).rejects.toThrow('Types not found')
  })
})
