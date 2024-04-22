import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
  isLoading: false
}

export const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload
    }
  }
})

export const { setLoading } = loadingSlice.actions

export const loading = (state: boolean) => state

export default loadingSlice.reducer
