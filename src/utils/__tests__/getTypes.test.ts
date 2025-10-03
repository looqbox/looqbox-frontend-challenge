import { describe, it, expect } from 'vitest'
import { getTypes } from '../getTypes'

describe('getTypes', () => {
  it('should contain all 18 pokemon types', () => {
    const types = getTypes
    expect(types).toHaveLength(18)
  })

  it('should contain expected type names', () => {
    const types = getTypes

    expect(types).toContain('normal')
    expect(types).toContain('fire')
    expect(types).toContain('water')
    expect(types).toContain('eletric')
    expect(types).toContain('grass')
    expect(types).toContain('ice')
    expect(types).toContain('figth')
    expect(types).toContain('poison')
    expect(types).toContain('ground')
    expect(types).toContain('flying')
    expect(types).toContain('psychic')
    expect(types).toContain('bug')
    expect(types).toContain('rock')
    expect(types).toContain('ghost')
    expect(types).toContain('dragon')
    expect(types).toContain('dark')
    expect(types).toContain('steel')
    expect(types).toContain('fairy')
  })

  it('should not contain duplicate types', () => {
    const types = getTypes
    const uniqueTypes = [...new Set(types)]

    expect(types.length).toBe(uniqueTypes.length)
  })

  it('should be an array of strings', () => {
    const types = getTypes

    expect(Array.isArray(types)).toBe(true)
    types.forEach((type) => {
      expect(typeof type).toBe('string')
    })
  })

  it('should be immutable (exported as const)', () => {
    const types = getTypes

    const typesCopy = [...types]
    typesCopy.push('new-type')

    expect(getTypes).toHaveLength(18)
    expect(getTypes).not.toContain('new-type')
  })
})
