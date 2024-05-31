import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface PokemonState {
  pokemonList: NamedAPIResource[];
  selectedPokemon: Pokemon | null;
  listStatus: 'idle' | 'loading' | 'succeeded' | 'failed';
  selectedPokemonStatus: 'idle' | 'loading' | 'succeeded' | 'failed';
  listError: string | null;
  selectedPokemonError: string | null;
}

const initialState: PokemonState = {
  pokemonList: [] as NamedAPIResource[],
  selectedPokemon: null,
  listStatus: 'idle',
  selectedPokemonStatus: 'idle',
  listError: null,
  selectedPokemonError: null,
};

export const fetchPokemon = createAsyncThunk('pokemon/fetchPokemon', async () => {
  const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151');

  return response.data.results;
});

export const fetchPokemonByName = createAsyncThunk('pokemon/fetchPokemonByName', async (name: string) => {
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);

  return response.data;
});

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    setSelectedPokemon(state, action) {
      state.selectedPokemon = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemon.pending, (state) => {
        state.listStatus = 'loading';
      })
      .addCase(fetchPokemon.fulfilled, (state, action) => {
        state.listStatus = 'succeeded';
        state.pokemonList = action.payload;
      })
      .addCase(fetchPokemon.rejected, (state, action) => {
        state.listStatus = 'failed';
        state.listError = action.error.message || 'Something went wrong';
      })
      .addCase(fetchPokemonByName.pending, (state) => {
        state.selectedPokemonStatus = 'loading';
      })
      .addCase(fetchPokemonByName.fulfilled, (state, action) => {
        state.selectedPokemonStatus = 'succeeded';
        state.selectedPokemon = action.payload;
      })
      .addCase(fetchPokemonByName.rejected, (state, action) => {
        state.selectedPokemonStatus = 'failed';
        state.selectedPokemonError = action.error.message || 'Something went wrong';
      });
  },
});

export const { setSelectedPokemon } = pokemonSlice.actions;
export default pokemonSlice.reducer;
