import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

type FavoritesState = {
    items: Pokemon[]
}

const initialState: FavoritesState = {
    items: []
}

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        toggleFavorite: (state, action: PayloadAction<Pokemon>) => {
            const idx = state.items.findIndex(p => p.id === action.payload.id)
            if (idx >= 0) {
                state.items.splice(idx, 1)
            } else {
                state.items.push(action.payload)
            }
        },
        clearFavorites: (state) => { state.items = [] }
    },
})

export const { toggleFavorite, clearFavorites } = favoritesSlice.actions
export default favoritesSlice.reducer
