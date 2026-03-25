import { configureStore } from '@reduxjs/toolkit'

import searchReducer from '../store/slices/searchSlice'

export const reduxStore = configureStore({
  reducer: {
    search: searchReducer,
  },
})

export type RootState = ReturnType<typeof reduxStore.getState>

export type AppDispatch = typeof reduxStore.dispatch
