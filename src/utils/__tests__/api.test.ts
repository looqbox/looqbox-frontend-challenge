import { describe, it, expect } from 'vitest'
import { api } from '../api'

describe('api', () => {
  it('should create axios instance with correct baseURL', () => {
    expect(api.defaults.baseURL).toBe('https://pokeapi.co/api/v2/')
  })

  it('should be an axios instance', () => {
    expect(api.get).toBeDefined()
    expect(api.post).toBeDefined()
    expect(api.put).toBeDefined()
    expect(api.delete).toBeDefined()
  })
})
