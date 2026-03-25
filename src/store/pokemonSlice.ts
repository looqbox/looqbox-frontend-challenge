import type { PokemonState } from "../types/pokemon-state";
import { createSlice, createAsyncThunk, type PayloadAction } from "@reduxjs/toolkit";
import type { Pokemon } from "../types/pokemon";
import { pokemonService } from "../services/pokemonService";

const initialState: PokemonState = {
    pokemonList: [],
    initialPokemonList: [],
    loading: false,
    error: null,
    currentPage: 1,
    isTyping: false,
};

export const fetchInitialPokemons = createAsyncThunk<Pokemon[], number, { rejectValue: string }>(
    'pokemon/fetchInitial',
    async (page: number = 1, { rejectWithValue }) => {
        try {
            const limit = 20;
            const offset = (page - 1) * limit;
            return await pokemonService.getList(limit, offset);
        } catch (error) {
            return rejectWithValue(error instanceof Error ? error.message : "Erro ao carregar lista");
        }
    }
);

export const fetchPokemonByName = createAsyncThunk(
    'pokemon/fetchByName',
    async (name: string, { rejectWithValue }) => {
        try {
            const pokemon = await pokemonService.getById(name.toLowerCase().trim());
            return [pokemon];
        } catch(error) {
            return rejectWithValue(error instanceof Error ? error.message : "Erro desconhecido");
        }
    }
);


export const pokemonSlice = createSlice({

    name: 'pokemon',
    initialState,
    reducers: {
        setSearchResults: (state, action: PayloadAction<Pokemon[]>) => {
            state.pokemonList = action.payload;
        },
        resetToInitial: (state) => {
            state.pokemonList = state.initialPokemonList;
            state.error = null;
            state.currentPage = 1;
        },

        pokemonsFiltered: (state, action: PayloadAction<string>) => {
            const searchTerm = action.payload.toLowerCase().trim();

            if (searchTerm === '') {
                state.pokemonList = state.initialPokemonList;
            } else {
                state.pokemonList = state.initialPokemonList.filter(pokemon =>
                    pokemon.name.toLowerCase().includes(searchTerm)
                );
            }
            state.currentPage = 1;
        },
        setIsTyping: (state, action: PayloadAction<boolean>) => {
            state.isTyping = action.payload;
        },

    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchInitialPokemons.pending, (state: PokemonState) => {
            state.loading = true;
        })
        .addCase(fetchInitialPokemons.fulfilled, (state, action) => {
            state.loading = false;
            state.pokemonList = action.payload;
            state.initialPokemonList = action.payload;
            state.currentPage = action.meta.arg;

        })
        .addCase(fetchInitialPokemons.rejected, (state: PokemonState) => {
            state.loading = false;
        })
        .addCase(fetchPokemonByName.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
        .addCase(fetchPokemonByName.fulfilled, (state, action: PayloadAction<Pokemon[]>) => {
            state.loading = false;
            state.pokemonList = action.payload;
        })
        .addCase(fetchPokemonByName.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string;
            state.error = action.payload as string;
        });

    },
});

export const { setSearchResults, resetToInitial, pokemonsFiltered, setIsTyping } = pokemonSlice.actions;

export default pokemonSlice.reducer;