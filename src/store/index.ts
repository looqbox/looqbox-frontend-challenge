import { configureStore } from '@reduxjs/toolkit'
import {
  type TypedUseSelectorHook,
  useDispatch,
  useSelector,
} from 'react-redux'
import { pokemons } from './slices/pokemon'

export const store = configureStore({
  reducer: {
    pokemons,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch: () => AppDispatch = useDispatch
