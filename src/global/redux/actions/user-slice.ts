import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Pokemon } from 'global/interfaces/Pokemon.interface'

interface UserState {
  username: string
  wishlist: Pokemon[]
}

const initialState: UserState = {
  username: '',
  wishlist: []
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<string>) => {
      state.username = action.payload
    },
    clearUser: (state) => {
      state.username = ''
      state.wishlist = []
    },
    addPokemonOnWishlist: (state, action: PayloadAction<Pokemon>) => {
      const pokemonAlreadyExists = state.wishlist.findIndex(
        (pokemon) => pokemon.ID === action.payload.ID
      )

      if (pokemonAlreadyExists !== -1) {
        state.wishlist.splice(pokemonAlreadyExists, 1)
        return
      }

      state.wishlist.push(action.payload)
    }
  }
})

export const { setUser, clearUser, addPokemonOnWishlist } = userSlice.actions
export const userReducer = userSlice.reducer
