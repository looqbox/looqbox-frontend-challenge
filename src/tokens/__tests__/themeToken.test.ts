import { describe, it, expect } from 'vitest'
import { themeToken } from '../themeToken'

describe('themeToken', () => {
  it('should have all required properties', () => {
    const requiredProperties = [
      'colorPrimary',
      'colorPrimaryHover',
      'colorPrimaryBorder',
      'colorPrimaryHoverBorder',
      'controlOutline',
      'controlOutlineWidth',
    ]

    requiredProperties.forEach((prop) => {
      expect(themeToken).toHaveProperty(prop)
    })
  })

  it('should have correct color values', () => {
    expect(themeToken.colorPrimary).toBe('#40da62')
    expect(themeToken.colorPrimaryHover).toBe('#53d893')
    expect(themeToken.colorPrimaryBorder).toBe('#ffffff')
    expect(themeToken.colorPrimaryHoverBorder).toBe('#ffffff')
    expect(themeToken.controlOutline).toBe('#ffffff')
  })

  it('should have valid hexadecimal color format', () => {
    const hexColorRegex = /^#[0-9a-fA-F]{6}$/

    expect(themeToken.colorPrimary).toMatch(hexColorRegex)
    expect(themeToken.colorPrimaryHover).toMatch(hexColorRegex)
    expect(themeToken.colorPrimaryBorder).toMatch(hexColorRegex)
    expect(themeToken.colorPrimaryHoverBorder).toMatch(hexColorRegex)
    expect(themeToken.controlOutline).toMatch(hexColorRegex)
  })

  it('should have correct controlOutlineWidth value', () => {
    expect(themeToken.controlOutlineWidth).toBe(2)
    expect(typeof themeToken.controlOutlineWidth).toBe('number')
  })

  it('should have string type for color properties', () => {
    expect(typeof themeToken.colorPrimary).toBe('string')
    expect(typeof themeToken.colorPrimaryHover).toBe('string')
    expect(typeof themeToken.colorPrimaryBorder).toBe('string')
    expect(typeof themeToken.colorPrimaryHoverBorder).toBe('string')
    expect(typeof themeToken.controlOutline).toBe('string')
  })

  it('should be an object', () => {
    expect(typeof themeToken).toBe('object')
    expect(themeToken).not.toBeNull()
  })

  it('should have exactly 6 properties', () => {
    const keys = Object.keys(themeToken)
    expect(keys).toHaveLength(6)
  })

  it('should not have undefined or null values', () => {
    Object.values(themeToken).forEach((value) => {
      expect(value).not.toBeUndefined()
      expect(value).not.toBeNull()
    })
  })

  it('should be immutable (exported as const)', () => {
    const originalPrimary = themeToken.colorPrimary

    const tokenCopy = { ...themeToken }
    tokenCopy.colorPrimary = '#000000'

    expect(themeToken.colorPrimary).toBe(originalPrimary)
    expect(themeToken.colorPrimary).not.toBe('#000000')
  })

  it('should have white color for borders and outline', () => {
    expect(themeToken.colorPrimaryBorder).toBe('#ffffff')
    expect(themeToken.colorPrimaryHoverBorder).toBe('#ffffff')
    expect(themeToken.controlOutline).toBe('#ffffff')
  })

  it('should have green-ish primary colors', () => {
    const primary = themeToken.colorPrimary.toLowerCase()
    const hover = themeToken.colorPrimaryHover.toLowerCase()

    const primaryR = parseInt(primary.slice(1, 3), 16)
    const primaryG = parseInt(primary.slice(3, 5), 16)
    const primaryB = parseInt(primary.slice(5, 7), 16)

    const hoverR = parseInt(hover.slice(1, 3), 16)
    const hoverG = parseInt(hover.slice(3, 5), 16)
    const hoverB = parseInt(hover.slice(5, 7), 16)

    expect(primaryG).toBeGreaterThan(primaryR)
    expect(primaryG).toBeGreaterThan(primaryB)
    expect(hoverG).toBeGreaterThan(hoverR)
    expect(hoverG).toBeGreaterThan(hoverB)
  })
})
