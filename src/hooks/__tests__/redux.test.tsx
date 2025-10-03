import { renderHook, act } from '@testing-library/react'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import { describe, it, expect } from 'vitest'

import { useAppDispatch, useAppSelector } from '../redux'
import pokemonReducer, {
  setCurrentPage,
  setItemsPerPage,
  setSearchTerm,
} from '../../store/pokemonSlice'
import type { RootState } from '../../store'

const createTestStore = () =>
  configureStore({
    reducer: {
      pokemon: pokemonReducer,
    },
  })

describe('redux hooks', () => {
  it('useAppSelector deve retornar estado inicial do slice', () => {
    const store = createTestStore()

    const { result } = renderHook(
      () => useAppSelector((state: RootState) => state.pokemon),
      {
        wrapper: ({ children }) => (
          <Provider store={store}>{children}</Provider>
        ),
      },
    )

    expect(result.current).toEqual({
      currentPage: 1,
      itemsPerPage: 20,
      searchTerm: '',
    })
  })

  it('useAppDispatch deve permitir disparar ações', () => {
    const store = createTestStore()

    const { result } = renderHook(
      () => {
        const dispatch = useAppDispatch()
        return {
          state: useAppSelector((state: RootState) => state.pokemon),
          dispatch,
        }
      },
      {
        wrapper: ({ children }) => (
          <Provider store={store}>{children}</Provider>
        ),
      },
    )

    expect(result.current.state.currentPage).toBe(1)

    act(() => {
      result.current.dispatch(setCurrentPage(5))
    })

    expect(store.getState().pokemon.currentPage).toBe(5)

    act(() => {
      result.current.dispatch(setSearchTerm('pikachu'))
    })

    expect(store.getState().pokemon.searchTerm).toBe('pikachu')

    act(() => {
      result.current.dispatch(setItemsPerPage(50))
    })

    expect(store.getState().pokemon.itemsPerPage).toBe(50)
  })
})
