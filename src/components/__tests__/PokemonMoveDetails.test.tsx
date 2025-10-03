import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi, type Mock } from 'vitest'
import { PokemonMoveDetails } from '../PokemonMoveDetails'
import { useQuery } from '@tanstack/react-query'

vi.mock('@tanstack/react-query', () => ({
  useQuery: vi.fn(),
}))

vi.mock('../icons/LoadingIcon', () => ({
  LoadingIcon: () => <div data-testid="loading-icon">Loading...</div>,
}))
vi.mock('../BadgeType', () => ({
  BadgeType: ({ type }: { type: string }) => (
    <div data-testid="badge">{type}</div>
  ),
}))
vi.mock('../InfoBlock', () => ({
  InfoBlock: ({ label, value }: { label: string; value: string | number }) => (
    <div data-testid="info-block">{`${label}:${value}`}</div>
  ),
}))

const mockedUseQuery = useQuery as unknown as Mock

describe('PokemonMoveDetails', () => {
  const mockUrl = '/mock-move'
  const mockVersionDetails = [
    {
      level_learned_at: 10,
      move_learn_method: { name: 'level-up' },
      version_group: { name: 'red-blue' },
    },
  ]

  it('renders loading state', () => {
    mockedUseQuery.mockReturnValue({ isLoading: true })
    render(
      <PokemonMoveDetails url={mockUrl} versionDetails={mockVersionDetails} />,
    )
    expect(screen.getByTestId('loading-icon')).toBeInTheDocument()
  })

  it('renders error state', () => {
    mockedUseQuery.mockReturnValue({ isLoading: false, isError: true })
    render(
      <PokemonMoveDetails url={mockUrl} versionDetails={mockVersionDetails} />,
    )
    expect(screen.getByText(/failed to load move details/i)).toBeInTheDocument()
  })

  it('renders error state when no data returned', () => {
    mockedUseQuery.mockReturnValue({
      isLoading: false,
      isError: false,
      data: undefined,
    })
    render(
      <PokemonMoveDetails url={mockUrl} versionDetails={mockVersionDetails} />,
    )
    expect(screen.getByText(/failed to load move details/i)).toBeInTheDocument()
  })

  it('renders success state with move info', () => {
    mockedUseQuery.mockReturnValue({
      isLoading: false,
      isError: false,
      data: {
        damage_class: { name: 'physical' },
        type: { name: 'fire' },
        power: 90,
        accuracy: 100,
        pp: 15,
        effect_entries: [
          { language: { name: 'en' }, short_effect: 'Burns the target.' },
        ],
      },
    })

    render(
      <PokemonMoveDetails url={mockUrl} versionDetails={mockVersionDetails} />,
    )

    expect(screen.getByText(/physical/i)).toBeInTheDocument()
    expect(screen.getByTestId('badge')).toHaveTextContent('fire')
    expect(screen.getByText(/Power:90/i)).toBeInTheDocument()
    expect(screen.getByText(/Accuracy:100/i)).toBeInTheDocument()
    expect(screen.getByText(/PP:15/i)).toBeInTheDocument()
    expect(screen.getByText(/burns the target/i)).toBeInTheDocument()

    // version learn details
    const learnMethodNode = document.querySelector('.capitalize.font-bold')
    expect(
      learnMethodNode?.textContent?.replace(/\s+/g, ' ').trim().toLowerCase(),
    ).toContain('level up (red blue)')

    const levelNode = learnMethodNode?.closest('div')
    expect(levelNode?.textContent).toMatch(/Level:\s*10/)
  })

  it('renders the correct level when level_learned_at is greater than 0', () => {
    mockedUseQuery.mockReturnValue({
      isLoading: false,
      isError: false,
      data: {
        damage_class: { name: 'special' },
        type: { name: 'psychic' },
        power: 70,
        accuracy: 100,
        pp: 20,
        effect_entries: [
          { language: { name: 'en' }, short_effect: 'Confuses target.' },
        ],
      },
    })

    const versionDetails = [
      {
        level_learned_at: 25,
        move_learn_method: { name: 'machine' },
        version_group: { name: 'emerald' },
      },
    ]

    render(<PokemonMoveDetails url={mockUrl} versionDetails={versionDetails} />)

    const learnMethodNode = document.querySelector('.capitalize.font-bold')
    expect(
      learnMethodNode?.textContent?.replace(/\s+/g, ' ').trim().toLowerCase(),
    ).toContain('machine (emerald)')

    const levelNode = learnMethodNode?.closest('div')
    expect(levelNode?.textContent).toMatch(/Level:\s*25/)
  })

  it('renders "N/A" when level_learned_at is 0', () => {
    mockedUseQuery.mockReturnValue({
      isLoading: false,
      isError: false,
      data: {
        damage_class: { name: 'status' },
        type: { name: 'grass' },
        power: 0,
        accuracy: 0,
        pp: 40,
        effect_entries: [
          { language: { name: 'en' }, short_effect: 'Status effect' },
        ],
      },
    })

    const versionDetails = [
      {
        level_learned_at: 0,
        move_learn_method: { name: 'egg' },
        version_group: { name: 'gold-silver' },
      },
    ]

    render(<PokemonMoveDetails url={mockUrl} versionDetails={versionDetails} />)

    const learnMethodNode = document.querySelector('.capitalize.font-bold')
    expect(
      learnMethodNode?.textContent?.replace(/\s+/g, ' ').trim().toLowerCase(),
    ).toContain('egg (gold silver)')

    const levelNode = learnMethodNode?.closest('div')
    expect(levelNode?.textContent).toMatch(/Level:\s*N\/A/)
  })

  it('falls back to "No description available" if missing', () => {
    mockedUseQuery.mockReturnValue({
      isLoading: false,
      isError: false,
      data: {
        damage_class: { name: 'special' },
        type: { name: 'water' },
        power: null,
        accuracy: null,
        pp: 20,
        effect_entries: [],
      },
    })

    render(
      <PokemonMoveDetails url={mockUrl} versionDetails={mockVersionDetails} />,
    )
    expect(screen.getByText(/no description available/i)).toBeInTheDocument()
    expect(screen.getByText(/Power:N\/A/i)).toBeInTheDocument()
    expect(screen.getByText(/Accuracy:N\/A/i)).toBeInTheDocument()
  })

  it('renders "N/A" for PP when pp is undefined', () => {
    mockedUseQuery.mockReturnValue({
      isLoading: false,
      isError: false,
      data: {
        damage_class: { name: 'special' },
        type: { name: 'electric' },
        power: 50,
        accuracy: 95,
        pp: undefined,
        effect_entries: [
          { language: { name: 'en' }, short_effect: 'Stuns target.' },
        ],
      },
    })

    render(
      <PokemonMoveDetails url={mockUrl} versionDetails={mockVersionDetails} />,
    )

    const ppNode = screen
      .getAllByTestId('info-block')
      .find((n) => n.textContent?.startsWith('PP:'))
    expect(ppNode?.textContent).toMatch(/PP:N\/A/i)
  })

  it('renders "N/A" when level_learned_at is undefined', () => {
    mockedUseQuery.mockReturnValue({
      isLoading: false,
      isError: false,
      data: {
        damage_class: { name: 'fairy' },
        type: { name: 'fairy' },
        power: 40,
        accuracy: 100,
        pp: 30,
        effect_entries: [
          { language: { name: 'en' }, short_effect: 'Charm the target.' },
        ],
      },
    })

    const versionDetails = [
      {
        level_learned_at: undefined,
        move_learn_method: { name: 'tutor' },
        version_group: { name: 'sword-shield' },
      },
    ]

    render(<PokemonMoveDetails url={mockUrl} versionDetails={versionDetails} />)

    const learnMethodNode = document.querySelector('.capitalize.font-bold')
    expect(
      learnMethodNode?.textContent?.replace(/\s+/g, ' ').trim().toLowerCase(),
    ).toContain('tutor (sword shield)')

    const levelNode = learnMethodNode?.closest('div')
    expect(levelNode?.textContent).toMatch(/Level:\s*N\/A/)
  })
})
