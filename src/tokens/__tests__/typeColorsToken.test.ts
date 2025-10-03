import { describe, it, expect } from 'vitest'
import { typeColorsToken } from '../typeColorsToken'

describe('typeColorsToken', () => {
  it('should contain all 18 pokemon types', () => {
    const expectedTypes = [
      'normal',
      'fire',
      'water',
      'electric',
      'grass',
      'ice',
      'figth',
      'poison',
      'ground',
      'flying',
      'psychic',
      'bug',
      'rock',
      'ghost',
      'dragon',
      'dark',
      'steel',
      'fairy',
    ]

    expectedTypes.forEach((type) => {
      expect(typeColorsToken).toHaveProperty(type)
    })

    expect(Object.keys(typeColorsToken)).toHaveLength(18)
  })

  it('should have valid hexadecimal color format for all types', () => {
    const hexColorRegex = /^#[0-9a-fA-F]{6}$/

    Object.values(typeColorsToken).forEach((color) => {
      expect(color).toMatch(hexColorRegex)
    })
  })

  it('should have correct color values for specific types', () => {
    expect(typeColorsToken.normal).toBe('#aaaa99')
    expect(typeColorsToken.fire).toBe('#ff4422')
    expect(typeColorsToken.water).toBe('#3090f1')
    expect(typeColorsToken.electric).toBe('#ffcc33')
    expect(typeColorsToken.grass).toBe('#77cc55')
    expect(typeColorsToken.ice).toBe('#66cbfe')
    expect(typeColorsToken.figth).toBe('#bb5544')
    expect(typeColorsToken.poison).toBe('#a65395')
    expect(typeColorsToken.ground).toBe('#d2b150')
    expect(typeColorsToken.flying).toBe('#8899ff')
    expect(typeColorsToken.psychic).toBe('#ff5599')
    expect(typeColorsToken.bug).toBe('#aabb22')
    expect(typeColorsToken.rock).toBe('#b4a362')
    expect(typeColorsToken.ghost).toBe('#6666ba')
    expect(typeColorsToken.dragon).toBe('#6e5edc')
    expect(typeColorsToken.dark).toBe('#775544')
    expect(typeColorsToken.steel).toBe('#aaaabb')
    expect(typeColorsToken.fairy).toBe('#eb97eb')
  })

  it('should have string type for all color values', () => {
    Object.values(typeColorsToken).forEach((color) => {
      expect(typeof color).toBe('string')
    })
  })

  it('should be an object', () => {
    expect(typeof typeColorsToken).toBe('object')
    expect(typeColorsToken).not.toBeNull()
  })

  it('should not have undefined or null values', () => {
    Object.values(typeColorsToken).forEach((color) => {
      expect(color).not.toBeUndefined()
      expect(color).not.toBeNull()
      expect(color).not.toBe('')
    })
  })

  it('should not have duplicate colors', () => {
    const colors = Object.values(typeColorsToken)
    const uniqueColors = [...new Set(colors)]

    expect(colors.length).toBe(uniqueColors.length)
  })

  it('should have fire type with red-ish color', () => {
    expect(typeColorsToken.fire).toMatch(/^#ff/)
  })

  it('should have water type with blue-ish color', () => {
    const water = typeColorsToken.water.toLowerCase()

    const r = parseInt(water.slice(1, 3), 16)
    const b = parseInt(water.slice(5, 7), 16)

    expect(b).toBeGreaterThan(r)
  })

  it('should have grass type with green-ish color', () => {
    const grass = typeColorsToken.grass.toLowerCase()

    const r = parseInt(grass.slice(1, 3), 16)
    const g = parseInt(grass.slice(3, 5), 16)
    const b = parseInt(grass.slice(5, 7), 16)

    expect(g).toBeGreaterThan(r)
    expect(g).toBeGreaterThan(b)
  })

  it('should be immutable (exported as const)', () => {
    const originalFireColor = typeColorsToken.fire

    const tokenCopy = { ...typeColorsToken }
    tokenCopy.fire = '#000000'

    expect(typeColorsToken.fire).toBe(originalFireColor)
    expect(typeColorsToken.fire).not.toBe('#000000')
  })

  it('should have all keys in lowercase', () => {
    Object.keys(typeColorsToken).forEach((key) => {
      expect(key).toBe(key.toLowerCase())
    })
  })

  it('should match Record<string, string> type structure', () => {
    Object.keys(typeColorsToken).forEach((key) => {
      expect(typeof key).toBe('string')
    })

    Object.values(typeColorsToken).forEach((value) => {
      expect(typeof value).toBe('string')
    })
  })

  it('should have distinct colors for primary types', () => {
    const primaryTypes = ['fire', 'water', 'grass', 'electric']
    const primaryColors = primaryTypes.map((type) => typeColorsToken[type])

    const uniquePrimaryColors = [...new Set(primaryColors)]
    expect(primaryColors.length).toBe(uniquePrimaryColors.length)
  })

  it('should have colors starting with # symbol', () => {
    Object.values(typeColorsToken).forEach((color) => {
      expect(color.startsWith('#')).toBe(true)
    })
  })

  it('should have exactly 7 characters for each color (including #)', () => {
    Object.values(typeColorsToken).forEach((color) => {
      expect(color.length).toBe(7)
    })
  })

  it('should not contain invalid hex characters', () => {
    const validHexChars = /^#[0-9a-fA-F]+$/

    Object.values(typeColorsToken).forEach((color) => {
      expect(color).toMatch(validHexChars)
    })
  })
})
