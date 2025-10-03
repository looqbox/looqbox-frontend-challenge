import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import { PokemonChainList } from '../PokemonChainList'
import type { Pokemon } from '../../api/pokemon'
import * as getSpriteUrlModule from '../../utils/getSpriteUrl'

vi.mock('../../utils/getSpriteUrl', () => ({
  getSpriteUrl: vi.fn(),
}))

const mockGetSpriteUrl = vi.mocked(getSpriteUrlModule.getSpriteUrl)

describe('PokemonChainList', () => {
  const mockChain: Pokemon[] = [
    {
      id: 1,
      name: 'bulbasaur',
      height: 7,
      weight: 69,
      abilities: [],
      types: [],
      stats: [],
      moves: [],
      sprites: {
        front_default: '/bulba.png',
        other: { 'official-artwork': { front_default: '/bulba-art.png' } },
        versions: {
          'generation-v': {
            'black-white': {
              animated: { front_default: '/bulba-anim.gif' },
            },
          },
        },
      },
      species: { name: 'bulbasaur', url: '/species/bulba' },
      cries: { latest: '', legacy: '' },
    },
    {
      id: 2,
      name: 'ivysaur',
      height: 10,
      weight: 130,
      abilities: [],
      types: [],
      stats: [],
      moves: [],
      sprites: {
        front_default: '/ivy.png',
        other: { 'official-artwork': { front_default: '/ivy-art.png' } },
        versions: {
          'generation-v': {
            'black-white': {
              animated: { front_default: '/ivy-anim.gif' },
            },
          },
        },
      },
      species: { name: 'ivysaur', url: '/species/ivy' },
      cries: { latest: '', legacy: '' },
    },
  ]

  beforeEach(() => {
    mockGetSpriteUrl.mockImplementation((pokemon: Pokemon) => ({
      staticSprite: pokemon.sprites.front_default,
      animatedSprite:
        pokemon.sprites.versions['generation-v']['black-white'].animated
          .front_default,
    }))
  })

  it('renders a list of pokemon links', () => {
    render(
      <MemoryRouter>
        <PokemonChainList chain={mockChain} />
      </MemoryRouter>,
    )

    const links = screen.getAllByRole('link')
    expect(links).toHaveLength(2)
    expect(links[0]).toHaveAttribute('href', '/pokemon/1')
    expect(links[1]).toHaveAttribute('href', '/pokemon/2')
  })

  it('renders each pokemon sprite', () => {
    render(
      <MemoryRouter>
        <PokemonChainList chain={mockChain} />
      </MemoryRouter>,
    )

    const bulba = screen.getByAltText('bulbasaur') as HTMLImageElement
    const ivy = screen.getByAltText('ivysaur') as HTMLImageElement

    expect(bulba).toBeInTheDocument()
    expect(ivy).toBeInTheDocument()
    expect(bulba.src).toContain('/bulba.png')
    expect(ivy.src).toContain('/ivy.png')
  })

  it('switches to animated sprite on hover and back on unhover', async () => {
    const user = userEvent.setup()
    render(
      <MemoryRouter>
        <PokemonChainList chain={mockChain} />
      </MemoryRouter>,
    )

    const bulba = screen.getByAltText('bulbasaur') as HTMLImageElement
    expect(bulba.src).toContain('/bulba.png')
    expect(bulba).toHaveClass('scale-100')

    await user.hover(bulba)
    expect(bulba.src).toContain('/bulba-anim.gif')
    expect(bulba).toHaveClass('scale-105')

    await user.unhover(bulba)
    expect(bulba.src).toContain('/bulba.png')
    expect(bulba).toHaveClass('scale-100')
  })

  it('formats alt text correctly replacing hyphens', () => {
    const chain = [{ ...mockChain[0], id: 99, name: 'mr-mime' }]
    render(
      <MemoryRouter>
        <PokemonChainList chain={chain} />
      </MemoryRouter>,
    )
    expect(screen.getByAltText('mr mime')).toBeInTheDocument()
  })

  it('calls getSpriteUrl with each pokemon', () => {
    render(
      <MemoryRouter>
        <PokemonChainList chain={mockChain} />
      </MemoryRouter>,
    )

    expect(mockGetSpriteUrl).toHaveBeenCalledWith(mockChain[0])
    expect(mockGetSpriteUrl).toHaveBeenCalledWith(mockChain[1])
  })
})
