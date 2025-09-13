import { createSlice, createAsyncThunk, type PayloadAction } from '@reduxjs/toolkit';
import { getPokemons, getPokemonDetails } from '../../services/pokeApi';
import type { PokemonListItem, PokemonDetails } from '../../types/pokemon.types';

interface PokemonState {
    list: PokemonListItem[];
    details: PokemonDetails | null;
    total: number;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState: PokemonState = {
    list: [],
    details: null,
    total: 0,
    status: 'idle',
    error: null,
};

export const fetchPokemons = createAsyncThunk(
    'pokemon/fetchPokemons',
    async ({ limit, offset }: { limit: number; offset: number }) => {
        const response = await getPokemons(limit, offset);
        return response;
    }
);

export const fetchPokemonDetails = createAsyncThunk(
    'pokemon/fetchPokemonDetails',
    async (nameOrId: string) => {
        const response = await getPokemonDetails(nameOrId);
        return response;
    }
);

const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPokemons.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(fetchPokemons.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.list = action.payload.results;
                state.total = action.payload.count;
            })
            .addCase(fetchPokemons.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || 'Failed to fetch pokemons';
            })
            .addCase(fetchPokemonDetails.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(fetchPokemonDetails.fulfilled, (state, action: PayloadAction<PokemonDetails>) => {
                state.status = 'succeeded';
                state.details = action.payload;
            })
            .addCase(fetchPokemonDetails.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || 'Failed to fetch details';
            });
    },
});

export default pokemonSlice.reducer;