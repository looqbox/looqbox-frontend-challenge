import { createAsyncThunk, createSlice, PayloadAction  } from '@reduxjs/toolkit';
import { IPokemonDetailsState, IPokemon } from '../interfaces/pokemon-types';
import { fetchPokemonDetailServiceByName } from '../services/pokemon-services';

export const fetchPokemonDetail = createAsyncThunk<IPokemon, string, { rejectValue: string }>(
    'pokemon/fetchPokemonDetail',
    async (name: String, thunkAPI) => {
        try {
            return fetchPokemonDetailServiceByName(name)
        } catch (error) {
            return thunkAPI.rejectWithValue("Failed to fetch Pokémons.");
        }
    }
);

const initialState: IPokemonDetailsState = {
    pokemon: undefined,
    loading: false,
    error: null,
};

export const pokemonDetailslice: any = createSlice({
    name: 'pokemon/details',
    initialState,
    reducers: {
        pokemonAdd(state, action: PayloadAction<IPokemon>) {
            state.pokemon = action.payload
            state.loading = false;
            state.error   = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPokemonDetail.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchPokemonDetail.fulfilled, (state, action) => {
                state.loading = false;
                state.pokemon = { ...action.payload };
            })
            .addCase(fetchPokemonDetail.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Something went wrong';
            });
    },
});

export default pokemonDetailslice.reducer;
export const { pokemonAdd } = pokemonDetailslice.actions;
