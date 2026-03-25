import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

type SearchState = {
  value: string
}

const getInitialSearch = (): string => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('search_value') || ''
  }

  return ''
}

const initialState: SearchState = {
  value: getInitialSearch(),
}

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.value = action.payload

      localStorage.setItem('search_value', action.payload)
    },
    clearSearch: state => {
      state.value = ''
      localStorage.removeItem('search_value')
    },
  },
})

export const { setSearch, clearSearch } = searchSlice.actions

export default searchSlice.reducer
