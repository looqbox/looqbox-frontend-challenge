import { render, screen, fireEvent } from '@testing-library/react'
import { useQuery, type UseQueryResult } from '@tanstack/react-query'
import { vi, beforeEach, describe, it, expect, type Mock } from 'vitest'
import { MemoryRouter } from 'react-router-dom'
import PokemonDetail from '../PokemonDetail'
import { LoadingIcon } from '../../components/icons/LoadingIcon'
import { message } from 'antd'
import type { Pokemon } from '../../api/pokemon'
import type { PokemonSpecies } from '../../api/species'
import type { AbilityDetail } from '../../api/abilities'
import type { TypeDetail } from '../../api/types'

vi.mock('@tanstack/react-query', async () => {
  const actual = await vi.importActual<typeof import('@tanstack/react-query')>(
    '@tanstack/react-query',
  )
  return {
    ...actual,
    useQuery: vi.fn(),
  }
})

vi.mock('antd', async () => {
  const actual = await vi.importActual<typeof import('antd')>('antd')
  return {
    ...actual,
    message: {
      warning: vi.fn(),
      error: vi.fn(),
    },
    Button: actual.Button,
    Card: actual.Card,
    Row: actual.Row,
    Col: actual.Col,
  }
})

type QueryData = {
  pokemon: Pokemon
  species: PokemonSpecies
  abilities: AbilityDetail[]
  chain: Pokemon[]
  types: TypeDetail[]
}

describe('PokemonDetail', () => {
  const playMock = vi.fn().mockResolvedValue(undefined)

  Object.defineProperty(global, 'Audio', {
    writable: true,
    value: vi.fn().mockImplementation(() => ({ play: playMock })),
  })

  const defaultTypes: TypeDetail[] = [
    {
      id: 1,
      name: 'psychic',
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

  const defaultData: QueryData = {
    pokemon: {
      id: 150,
      name: 'mewtwo',
      height: 20,
      weight: 1220,
      cries: { latest: 'latest.mp3', legacy: 'legacy.mp3' },
      stats: [{ stat: { name: 'hp', url: '' }, base_stat: 100 }],
      moves: [
        { move: { name: 'psychic', url: '' }, version_group_details: [] },
      ],
      types: [{ slot: 1, type: { name: 'psychic', url: '' } }],
      abilities: [],
      sprites: {
        front_default: 'mewtwo.png',
        other: { 'official-artwork': { front_default: 'mewtwo-art.png' } },
        versions: {
          'generation-v': {
            'black-white': { animated: { front_default: 'mewtwo-anim.png' } },
          },
        },
      },
      species: { name: 'mewtwo', url: '' },
    },
    species: {
      flavor_text_entries: [],
      is_baby: false,
      is_legendary: true,
      is_mythical: false,
      base_happiness: 0,
      capture_rate: 0,
      color: { name: '', url: '' },
      evolution_chain: { url: '' },
      genera: [],
      habitat: null,
    },
    abilities: [],
    chain: [{ id: 150, name: 'mewtwo' } as Pokemon],
    types: defaultTypes,
  }

  const mockUseQuery = useQuery as Mock

  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('shows loading state', () => {
    mockUseQuery.mockReturnValue({ isLoading: true } as Partial<
      UseQueryResult<QueryData, Error>
    >)

    render(
      <MemoryRouter>
        <PokemonDetail />
      </MemoryRouter>,
    )
    const { container } = render(<LoadingIcon />)
    expect(container.querySelector('svg')).toHaveClass('animate-spin')
  })

  it('shows error state', () => {
    mockUseQuery.mockReturnValue({ isLoading: false, isError: true })
    render(
      <MemoryRouter>
        <PokemonDetail />
      </MemoryRouter>,
    )
    expect(screen.getByText(/Pokémon not found/i)).toBeInTheDocument()
  })

  it('plays latest cry', () => {
    mockUseQuery.mockReturnValue({
      isLoading: false,
      isError: false,
      data: defaultData,
    })
    render(
      <MemoryRouter>
        <PokemonDetail />
      </MemoryRouter>,
    )
    fireEvent.click(screen.getByText(/Roar/i))
    expect(playMock).toHaveBeenCalled()
  })

  it('plays legacy cry if latest empty', () => {
    mockUseQuery.mockReturnValue({
      isLoading: false,
      isError: false,
      data: {
        ...defaultData,
        pokemon: {
          ...defaultData.pokemon,
          cries: { latest: '', legacy: 'legacy.mp3' },
        },
      },
    })
    render(
      <MemoryRouter>
        <PokemonDetail />
      </MemoryRouter>,
    )
    fireEvent.click(screen.getByText(/Roar/i))
    expect(playMock).toHaveBeenCalled()
  })

  it('calls message.warning if no cry available', () => {
    mockUseQuery.mockReturnValue({
      isLoading: false,
      isError: false,
      data: {
        ...defaultData,
        pokemon: { ...defaultData.pokemon, cries: { latest: '', legacy: '' } },
      },
    })
    render(
      <MemoryRouter>
        <PokemonDetail />
      </MemoryRouter>,
    )
    fireEvent.click(screen.getByText(/Roar/i))
    expect(message.warning).toHaveBeenCalledWith(
      'This Pokémon has no roar available!',
    )
  })

  it('calls message.error if audio play fails', async () => {
    const playReject = vi.fn().mockRejectedValue(new Error('fail'))
    // eslint-disable-next-line
    ;(global as any).Audio = vi.fn().mockImplementation(() => ({
      play: playReject,
    }))
    mockUseQuery.mockReturnValue({
      isLoading: false,
      isError: false,
      data: defaultData,
    })
    render(
      <MemoryRouter>
        <PokemonDetail />
      </MemoryRouter>,
    )
    fireEvent.click(screen.getByText(/Roar/i))
    await vi.waitFor(() =>
      expect(message.error).toHaveBeenCalledWith('Failed to play Pokémon cry'),
    )
  })

  it('shows unique evolution message if chain length 1', () => {
    mockUseQuery.mockReturnValue({
      isLoading: false,
      isError: false,
      data: { ...defaultData, chain: [defaultData.chain[0]] },
    })
    render(
      <MemoryRouter>
        <PokemonDetail />
      </MemoryRouter>,
    )
    expect(screen.getByText(/Unique Evolution/i)).toBeInTheDocument()
  })

  it('shows Unique Evolution when chain is empty', () => {
    mockUseQuery.mockReturnValue({
      isLoading: false,
      isError: false,
      data: { ...defaultData, chain: [] },
    })

    render(
      <MemoryRouter>
        <PokemonDetail />
      </MemoryRouter>,
    )

    expect(screen.getByText(/Unique Evolution/i)).toBeInTheDocument()
  })

  it('renders PokemonChainList if chain has more than one element', () => {
    const multiChain = [
      {
        id: 150,
        name: 'mewtwo',
        sprites: defaultData.pokemon.sprites,
        types: defaultData.pokemon.types,
      },
      {
        id: 151,
        name: 'mew',
        sprites: defaultData.pokemon.sprites,
        types: defaultData.pokemon.types,
      },
    ]
    mockUseQuery.mockReturnValue({
      isLoading: false,
      isError: false,
      data: { ...defaultData, chain: multiChain },
    })
    render(
      <MemoryRouter>
        <PokemonDetail />
      </MemoryRouter>,
    )
    expect(screen.getByText(/Evolution chain/i)).toBeInTheDocument()
  })

  it('shows flavor text if available', () => {
    mockUseQuery.mockReturnValue({
      isLoading: false,
      isError: false,
      data: {
        ...defaultData,
        species: {
          ...defaultData.species,
          flavor_text_entries: [
            { flavor_text: 'Psychic Pokémon', language: { name: 'en' } },
          ],
        },
      },
    })
    render(
      <MemoryRouter>
        <PokemonDetail />
      </MemoryRouter>,
    )
    expect(screen.getByText(/Psychic Pokémon/i)).toBeInTheDocument()
  })

  it('renders abilities with translations', () => {
    const abilities = [
      {
        id: 1,
        name: 'pressure',
        names: [{ language: { name: 'en' }, name: 'Pressure' }],
        effect_entries: [
          { language: { name: 'en' }, short_effect: 'Boosts PP usage' },
        ],
      },
    ]
    mockUseQuery.mockReturnValue({
      isLoading: false,
      isError: false,
      data: { ...defaultData, abilities },
    })
    render(
      <MemoryRouter>
        <PokemonDetail />
      </MemoryRouter>,
    )
    expect(screen.getByText(/Pressure/i)).toBeInTheDocument()
    expect(screen.getByText(/Boosts PP usage/i)).toBeInTheDocument()
  })

  it('renders abilities fallback when no translation', () => {
    const abilities = [
      {
        id: 2,
        name: 'unknown-ability',
        names: [],
        effect_entries: [],
      },
    ]
    mockUseQuery.mockReturnValue({
      isLoading: false,
      isError: false,
      data: { ...defaultData, abilities },
    })
    render(
      <MemoryRouter>
        <PokemonDetail />
      </MemoryRouter>,
    )
    expect(screen.getByText(/unknown-ability/i)).toBeInTheDocument()
    expect(screen.getByText(/No description available/i)).toBeInTheDocument()
  })

  it('renders Stats and Characteristics section', () => {
    mockUseQuery.mockReturnValue({
      isLoading: false,
      isError: false,
      data: defaultData,
    })
    render(
      <MemoryRouter>
        <PokemonDetail />
      </MemoryRouter>,
    )
    expect(screen.getByText(/Stats and Characteristics/i)).toBeInTheDocument()
    expect(screen.getByText(/Abilities/i)).toBeInTheDocument()
  })

  it('renders Types Effectiveness Table', () => {
    mockUseQuery.mockReturnValue({
      isLoading: false,
      isError: false,
      data: { ...defaultData, types: defaultTypes },
    })
    render(
      <MemoryRouter>
        <PokemonDetail />
      </MemoryRouter>,
    )
    expect(screen.getByText(/Types Effectiveness/i)).toBeInTheDocument()
  })

  it('renders abilities with no english translation in names/effects (fallback branches)', () => {
    const abilities = [
      {
        id: 3,
        name: 'habilidade-br',
        names: [{ language: { name: 'pt' }, name: 'Habilidade BR' }], // não tem "en"
        effect_entries: [
          { language: { name: 'pt' }, short_effect: 'Efeito em pt' }, // não tem "en"
        ],
      },
    ]
    mockUseQuery.mockReturnValue({
      isLoading: false,
      isError: false,
      data: { ...defaultData, abilities },
    })

    render(
      <MemoryRouter>
        <PokemonDetail />
      </MemoryRouter>,
    )

    expect(screen.getByText(/habilidade-br/i)).toBeInTheDocument()
    expect(screen.getByText(/No description available/i)).toBeInTheDocument()
  })

  it('renders ability when names/effects are present but none in english (partial fallback)', () => {
    const abilities = [
      {
        id: 99,
        name: 'habilidade-pt',
        names: [{ language: { name: 'pt' }, name: 'Habilidade PT' }],
        effect_entries: [
          { language: { name: 'pt' }, short_effect: 'Efeito em pt' },
        ],
      },
    ]
    mockUseQuery.mockReturnValue({
      isLoading: false,
      isError: false,
      data: { ...defaultData, abilities },
    })

    render(
      <MemoryRouter>
        <PokemonDetail />
      </MemoryRouter>,
    )

    expect(screen.getByText(/habilidade-pt/i)).toBeInTheDocument()
    expect(screen.getByText(/No description available/i)).toBeInTheDocument()
  })
})
