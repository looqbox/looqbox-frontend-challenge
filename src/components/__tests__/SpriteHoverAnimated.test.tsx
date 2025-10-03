import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { SpriteHoverAnimated } from '../SpriteHoverAnimated'
import type { Pokemon } from '../../api/pokemon'
import * as getSpriteUrlModule from '../../utils/getSpriteUrl'

vi.mock('../../utils/getSpriteUrl', () => ({
  getSpriteUrl: vi.fn(),
}))

describe('SpriteHoverAnimated', () => {
  const mockPokemon: Pokemon = {
    id: 25,
    name: 'pikachu',
    sprites: {
      front_default: '/static.png',
      versions: {
        'generation-v': {
          'black-white': {
            animated: {
              front_default: '/animated.gif',
            },
          },
        },
      },
    },
  } as Pokemon

  const mockGetSpriteUrl = vi.mocked(getSpriteUrlModule.getSpriteUrl)

  beforeEach(() => {
    mockGetSpriteUrl.mockReturnValue({
      staticSprite: '/static.png',
      animatedSprite: '/animated.gif',
    })
  })

  it('renders with static sprite initially', () => {
    render(<SpriteHoverAnimated pokemon={mockPokemon} />)
    const img = screen.getByAltText('pikachu') as HTMLImageElement
    expect(img).toBeInTheDocument()
    expect(img.src).toContain('/static.png')
  })

  it('changes to animated sprite on mouse enter', async () => {
    const user = userEvent.setup()
    render(<SpriteHoverAnimated pokemon={mockPokemon} />)
    const img = screen.getByAltText('pikachu') as HTMLImageElement

    await user.hover(img)
    expect(img.src).toContain('/animated.gif')
  })

  it('changes back to static sprite on mouse leave', async () => {
    const user = userEvent.setup()
    render(<SpriteHoverAnimated pokemon={mockPokemon} />)
    const img = screen.getByAltText('pikachu') as HTMLImageElement

    await user.hover(img)
    expect(img.src).toContain('/animated.gif')

    await user.unhover(img)
    expect(img.src).toContain('/static.png')
  })

  it('applies scale-100 class initially', () => {
    render(<SpriteHoverAnimated pokemon={mockPokemon} />)
    const img = screen.getByAltText('pikachu')
    expect(img).toHaveClass('scale-100')
    expect(img).not.toHaveClass('scale-105')
  })

  it('applies scale-105 class on hover', async () => {
    const user = userEvent.setup()
    render(<SpriteHoverAnimated pokemon={mockPokemon} />)
    const img = screen.getByAltText('pikachu')

    await user.hover(img)
    expect(img).toHaveClass('scale-105')
    expect(img).not.toHaveClass('scale-100')
  })

  it('applies custom className when provided', () => {
    render(
      <SpriteHoverAnimated pokemon={mockPokemon} className="custom-class" />,
    )
    const img = screen.getByAltText('pikachu')
    expect(img).toHaveClass('custom-class')
  })

  it('formats alt text correctly by replacing hyphens with spaces', () => {
    const pokemonWithHyphen: Pokemon = {
      ...mockPokemon,
      name: 'mr-mime',
    }
    render(<SpriteHoverAnimated pokemon={pokemonWithHyphen} />)
    expect(screen.getByAltText('mr mime')).toBeInTheDocument()
  })

  it('applies all base classes', () => {
    render(<SpriteHoverAnimated pokemon={mockPokemon} />)
    const img = screen.getByAltText('pikachu')
    expect(img).toHaveClass('w-full')
    expect(img).toHaveClass('h-auto')
    expect(img).toHaveClass('object-contain')
    expect(img).toHaveClass('transition-transform')
    expect(img).toHaveClass('duration-300')
  })

  it('calls getSpriteUrl with correct pokemon', () => {
    render(<SpriteHoverAnimated pokemon={mockPokemon} />)
    expect(mockGetSpriteUrl).toHaveBeenCalledWith(mockPokemon)
  })
})
