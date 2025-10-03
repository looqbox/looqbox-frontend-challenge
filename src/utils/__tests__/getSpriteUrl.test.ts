import { describe, it, expect } from 'vitest'
import { getSpriteUrl } from '../getSpriteUrl'
import type { Pokemon } from '../../api/pokemon'

describe('getSpriteUrl', () => {
  it('should return front_default sprite when available', () => {
    const mockPokemon: Pokemon = {
      id: 1,
      name: 'bulbasaur',
      sprites: {
        front_default: 'https://example.com/bulbasaur.png',
        other: {
          'official-artwork': {
            front_default: 'https://example.com/artwork.png',
          },
        },
        versions: {
          'generation-v': {
            'black-white': {
              animated: {
                front_default: 'https://example.com/animated.gif',
              },
            },
          },
        },
      },
    } as Pokemon

    const result = getSpriteUrl(mockPokemon)

    expect(result.staticSprite).toBe('https://example.com/bulbasaur.png')
    expect(result.animatedSprite).toBe('https://example.com/animated.gif')
  })

  it('should use official-artwork as fallback when front_default is null', () => {
    const mockPokemon: Pokemon = {
      id: 1,
      name: 'bulbasaur',
      sprites: {
        front_default: null as unknown as string,
        other: {
          'official-artwork': {
            front_default: 'https://example.com/artwork.png',
          },
        },
        versions: {
          'generation-v': {
            'black-white': {
              animated: {
                front_default: null as unknown as string,
              },
            },
          },
        },
      },
    } as Pokemon

    const result = getSpriteUrl(mockPokemon)

    expect(result.staticSprite).toBe('https://example.com/artwork.png')
    expect(result.animatedSprite).toBe('https://example.com/artwork.png')
  })

  it('should use SVG fallback when all sprites are null', () => {
    const mockPokemon: Pokemon = {
      id: 1,
      name: 'bulbasaur',
      sprites: {
        front_default: null as unknown as string,
        other: {
          'official-artwork': {
            front_default: null as unknown as string,
          },
        },
        versions: {
          'generation-v': {
            'black-white': {
              animated: {
                front_default: null as unknown as string,
              },
            },
          },
        },
      },
    } as Pokemon

    const result = getSpriteUrl(mockPokemon)

    expect(result.staticSprite).toBe('/pokemon-svg.svg')
    expect(result.animatedSprite).toBe('/pokemon-svg.svg')
  })

  it('should use static sprite as fallback when animated is null', () => {
    const mockPokemon: Pokemon = {
      id: 1,
      name: 'bulbasaur',
      sprites: {
        front_default: 'https://example.com/bulbasaur.png',
        other: {
          'official-artwork': {
            front_default: 'https://example.com/artwork.png',
          },
        },
        versions: {
          'generation-v': {
            'black-white': {
              animated: {
                front_default: null as unknown as string,
              },
            },
          },
        },
      },
    } as Pokemon

    const result = getSpriteUrl(mockPokemon)

    expect(result.staticSprite).toBe('https://example.com/bulbasaur.png')
    expect(result.animatedSprite).toBe('https://example.com/bulbasaur.png')
  })

  it('should handle empty string sprites', () => {
    const mockPokemon: Pokemon = {
      id: 1,
      name: 'bulbasaur',
      sprites: {
        front_default: '',
        other: {
          'official-artwork': {
            front_default: '',
          },
        },
        versions: {
          'generation-v': {
            'black-white': {
              animated: {
                front_default: '',
              },
            },
          },
        },
      },
    } as Pokemon

    const result = getSpriteUrl(mockPokemon)

    expect(result.staticSprite).toBe('/pokemon-svg.svg')
    expect(result.animatedSprite).toBe('/pokemon-svg.svg')
  })
})
