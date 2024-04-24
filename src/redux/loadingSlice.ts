import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface LoadingState {
  isLoading: boolean
  calls: number
}

const initialState: LoadingState = {
  isLoading: false,
  calls: 0
}

export const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload
    },
    incrementCalls: (state) => {
      state.calls += 1
    },
    decrementCalls: (state) => {
      state.calls -= 1
    },
    resetCalls: (state) => {
      state.calls = 0
    }
  }
})

export const { setLoading, incrementCalls, decrementCalls, resetCalls } =
  loadingSlice.actions

export const loading = (state: boolean) => state

export default loadingSlice.reducer
