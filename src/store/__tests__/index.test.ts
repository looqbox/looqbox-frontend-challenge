import { describe, it, expect, beforeEach } from 'vitest'
import { configureStore } from '@reduxjs/toolkit'
import { store } from '../index'
import type { RootState, AppDispatch } from '../index'
import pokemonReducer, {
  setCurrentPage,
  setItemsPerPage,
  setSearchTerm,
} from '../pokemonSlice'

const createTestStore = () => {
  return configureStore({
    reducer: {
      pokemon: pokemonReducer,
    },
  })
}

type TestStore = ReturnType<typeof createTestStore>

describe('Redux Store', () => {
  describe('store/index.ts', () => {
    it('should create the store properly', () => {
      const state = store.getState()
      expect(state).toHaveProperty('pokemon')
    })

    it('should have correct initial state', () => {
      const state = store.getState()
      expect(state.pokemon).toEqual({
        currentPage: 1,
        itemsPerPage: 20,
        searchTerm: '',
      })
    })

    it('should allow dispatching with AppDispatch type', () => {
      const dispatch: AppDispatch = store.dispatch
      expect(typeof dispatch).toBe('function')
    })

    it('should expose RootState type correctly', () => {
      const state: RootState = store.getState()
      expect(state.pokemon).toBeDefined()
      expect(state.pokemon.currentPage).toBeDefined()
      expect(state.pokemon.itemsPerPage).toBeDefined()
      expect(state.pokemon.searchTerm).toBeDefined()
    })
  })

  describe('pokemon slice actions', () => {
    let testStore: TestStore

    beforeEach(() => {
      testStore = createTestStore()
    })

    it('should update current page', () => {
      testStore.dispatch(setCurrentPage(5))
      expect(testStore.getState().pokemon.currentPage).toBe(5)
    })

    it('should update items per page and reset to page 1', () => {
      testStore.dispatch(setCurrentPage(3))
      testStore.dispatch(setItemsPerPage(50))

      const state = testStore.getState().pokemon
      expect(state.itemsPerPage).toBe(50)
      expect(state.currentPage).toBe(1)
    })

    it('should update search term and reset to page 1', () => {
      testStore.dispatch(setCurrentPage(3))
      testStore.dispatch(setSearchTerm('pikachu'))

      const state = testStore.getState().pokemon
      expect(state.searchTerm).toBe('pikachu')
      expect(state.currentPage).toBe(1)
    })

    it('should handle multiple dispatches', () => {
      testStore.dispatch(setSearchTerm('charizard'))
      testStore.dispatch(setItemsPerPage(30))
      testStore.dispatch(setCurrentPage(3))

      const state = testStore.getState().pokemon
      expect(state).toEqual({
        currentPage: 3,
        itemsPerPage: 30,
        searchTerm: 'charizard',
      })
    })
  })

  describe('immutability', () => {
    let testStore: TestStore

    beforeEach(() => {
      testStore = createTestStore()
    })

    it('should create new state reference on dispatch', () => {
      const stateBefore = testStore.getState()
      testStore.dispatch(setCurrentPage(5))
      const stateAfter = testStore.getState()

      expect(stateAfter).not.toBe(stateBefore)
      expect(stateAfter.pokemon).not.toBe(stateBefore.pokemon)
    })
  })
})
