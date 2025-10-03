import { describe, it, expect } from 'vitest'
import pokemonReducer, {
  setCurrentPage,
  setItemsPerPage,
  setSearchTerm,
  type PokemonState,
} from '../pokemonSlice'

describe('pokemonSlice', () => {
  const initialState: PokemonState = {
    currentPage: 1,
    itemsPerPage: 20,
    searchTerm: '',
  }

  describe('initial state', () => {
    it('should return the initial state', () => {
      const result = pokemonReducer(undefined, { type: 'unknown' })
      expect(result).toEqual(initialState)
    })
  })

  describe('setCurrentPage', () => {
    it('should update currentPage', () => {
      const result = pokemonReducer(initialState, setCurrentPage(5))
      expect(result.currentPage).toBe(5)
    })

    it('should not modify other properties', () => {
      const result = pokemonReducer(initialState, setCurrentPage(3))
      expect(result.itemsPerPage).toBe(20)
      expect(result.searchTerm).toBe('')
    })
  })

  describe('setItemsPerPage', () => {
    it('should update itemsPerPage and reset currentPage to 1', () => {
      const previousState = { ...initialState, currentPage: 5 }
      const result = pokemonReducer(previousState, setItemsPerPage(50))

      expect(result.itemsPerPage).toBe(50)
      expect(result.currentPage).toBe(1)
    })

    it('should not modify searchTerm', () => {
      const previousState = { ...initialState, searchTerm: 'pikachu' }
      const result = pokemonReducer(previousState, setItemsPerPage(40))

      expect(result.searchTerm).toBe('pikachu')
    })
  })

  describe('setSearchTerm', () => {
    it('should update searchTerm and reset currentPage to 1', () => {
      const previousState = { ...initialState, currentPage: 5 }
      const result = pokemonReducer(previousState, setSearchTerm('charizard'))

      expect(result.searchTerm).toBe('charizard')
      expect(result.currentPage).toBe(1)
    })

    it('should not modify itemsPerPage', () => {
      const previousState = { ...initialState, itemsPerPage: 50 }
      const result = pokemonReducer(previousState, setSearchTerm('bulbasaur'))

      expect(result.itemsPerPage).toBe(50)
    })

    it('should handle empty string', () => {
      const previousState = {
        ...initialState,
        searchTerm: 'pikachu',
        currentPage: 3,
      }
      const result = pokemonReducer(previousState, setSearchTerm(''))

      expect(result.searchTerm).toBe('')
      expect(result.currentPage).toBe(1)
    })
  })

  describe('action sequences', () => {
    it('should handle multiple actions correctly', () => {
      let state = pokemonReducer(initialState, setSearchTerm('fire'))
      state = pokemonReducer(state, setItemsPerPage(30))
      state = pokemonReducer(state, setCurrentPage(2))

      expect(state).toEqual({
        currentPage: 2,
        itemsPerPage: 30,
        searchTerm: 'fire',
      })
    })
  })
})
