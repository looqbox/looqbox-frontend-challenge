import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { FAVOURITES_SLICE } from '../constants'
import { Pokemon } from '../../interfaces/pokemon.model';
import { FavouritesState } from '..';

const initialState: Array<Pokemon> = [];

export const favouritesSlice = createSlice({
    name: FAVOURITES_SLICE,
    initialState: {
        favouritePokemons: initialState,
    },
    reducers: {
        addFavourite: (state, action: PayloadAction<Pokemon>) => {
            state.favouritePokemons.push(action.payload);
        },
        removeFavourite: (state, action: PayloadAction<number>) => {
            state.favouritePokemons = state.favouritePokemons.filter(x => x.id !== action.payload);
        }
    },
})

export const { addFavourite, removeFavourite } = favouritesSlice.actions
export const selectCount = (state: FavouritesState) => state.favourites
export default favouritesSlice.reducer