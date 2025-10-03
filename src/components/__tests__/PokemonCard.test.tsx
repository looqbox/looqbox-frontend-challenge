import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { PokemonCard } from '../PokemonCard'
import type { Pokemon } from '../../api/pokemon'
import * as getSpriteUrlModule from '../../utils/getSpriteUrl'
import { MemoryRouter } from 'react-router-dom'

vi.mock('../../utils/getSpriteUrl', () => ({
  getSpriteUrl: vi.fn(),
}))

vi.mock('../BadgeType', () => ({
  BadgeType: ({ type }: { type: string }) => (
    <span data-testid="badge">{type}</span>
  ),
}))

describe('PokemonCard', () => {
  const mockPokemon: Pokemon = {
    id: 25,
    name: 'pikachu',
    height: 4,
    weight: 60,
    abilities: [],
    types: [
      { slot: 1, type: { name: 'electric', url: '/type/electric' } },
      { slot: 2, type: { name: 'normal', url: '/type/normal' } },
    ],
    stats: [],
    moves: [],
    sprites: {
      front_default: '/static.png',
      other: { 'official-artwork': { front_default: '/artwork.png' } },
      versions: {
        'generation-v': {
          'black-white': {
            animated: { front_default: '/animated.gif' },
          },
        },
      },
    },
    species: { name: 'pikachu', url: '/species/pikachu' },
    cries: { latest: '', legacy: '' },
  }

  const mockGetSpriteUrl = vi.mocked(getSpriteUrlModule.getSpriteUrl)

  beforeEach(() => {
    mockGetSpriteUrl.mockReturnValue({
      staticSprite: '/static.png',
      animatedSprite: '/animated.gif',
    })
  })

  it('renders with static sprite initially', () => {
    render(
      <MemoryRouter>
        <PokemonCard pokemon={mockPokemon} />
      </MemoryRouter>,
    )
    const img = screen.getByAltText('pikachu') as HTMLImageElement
    expect(img).toBeInTheDocument()
    expect(img.src).toContain('/static.png')
  })

  it('changes to animated sprite on hover', async () => {
    const user = userEvent.setup()
    render(
      <MemoryRouter>
        <PokemonCard pokemon={mockPokemon} />
      </MemoryRouter>,
    )
    const img = screen.getByAltText('pikachu') as HTMLImageElement

    await user.hover(img)
    expect(img.src).toContain('/animated.gif')
  })

  it('changes back to static sprite on mouse leave', async () => {
    const user = userEvent.setup()
    render(
      <MemoryRouter>
        <PokemonCard pokemon={mockPokemon} />
      </MemoryRouter>,
    )
    const img = screen.getByAltText('pikachu') as HTMLImageElement

    await user.hover(img)
    expect(img.src).toContain('/animated.gif')

    await user.unhover(img)
    expect(img.src).toContain('/static.png')
  })

  it('renders fallback when no sprites exist', () => {
    mockGetSpriteUrl.mockReturnValueOnce({
      staticSprite: '',
      animatedSprite: '',
    })
    render(
      <MemoryRouter>
        <PokemonCard pokemon={mockPokemon} />
      </MemoryRouter>,
    )
    expect(screen.getByText('not exist')).toBeInTheDocument()
  })

  it('formats alt text correctly by replacing hyphens with spaces', () => {
    const pokemonWithHyphen = { ...mockPokemon, name: 'mr-mime' }
    render(
      <MemoryRouter>
        <PokemonCard pokemon={pokemonWithHyphen} />
      </MemoryRouter>,
    )
    expect(screen.getByAltText('mr mime')).toBeInTheDocument()
  })

  it('displays formatted id with leading zeros', () => {
    render(
      <MemoryRouter>
        <PokemonCard pokemon={mockPokemon} />
      </MemoryRouter>,
    )
    expect(screen.getByText('#0025')).toBeInTheDocument()
  })

  it('renders BadgeType for each pokemon type', () => {
    render(
      <MemoryRouter>
        <PokemonCard pokemon={mockPokemon} />
      </MemoryRouter>,
    )
    const badges = screen.getAllByTestId('badge')
    expect(badges).toHaveLength(2)
    expect(badges[0]).toHaveTextContent('electric')
    expect(badges[1]).toHaveTextContent('normal')
  })

  it('applies scale-100 initially and scale-105 on hover', async () => {
    const user = userEvent.setup()
    render(
      <MemoryRouter>
        <PokemonCard pokemon={mockPokemon} />
      </MemoryRouter>,
    )
    const img = screen.getByAltText('pikachu')
    expect(img).toHaveClass('scale-100')

    await user.hover(img)
    expect(img).toHaveClass('scale-105')
  })

  it('renders link with correct href', () => {
    render(
      <MemoryRouter>
        <PokemonCard pokemon={mockPokemon} />
      </MemoryRouter>,
    )
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', '/pokemon/25')
  })

  it('calls getSpriteUrl with correct pokemon', () => {
    render(
      <MemoryRouter>
        <PokemonCard pokemon={mockPokemon} />
      </MemoryRouter>,
    )
    expect(mockGetSpriteUrl).toHaveBeenCalledWith(mockPokemon)
  })
})
