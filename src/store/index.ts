import type { TypedUseSelectorHook } from 'react-redux'
import { useSelector, useDispatch } from 'react-redux'

import { configureStore } from '@reduxjs/toolkit'

import { pokedex } from './slices/pokedex'

export const store = configureStore({
  reducer: {
    pokedex,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useApDispatch: () => AppDispatch = useDispatch
