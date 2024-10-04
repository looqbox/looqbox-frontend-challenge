import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { Pokemon } from "../types/Pokemon";

interface PokemonState {
  pokemons: Pokemon[];
  loading: boolean;
  pagination: number;
  total: number
}

const initialState: PokemonState = {
  pokemons: [],
  loading: false,
  pagination: 1,
  total: 0
};

const pokemonSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    setPokemons(state, action: PayloadAction<Pokemon[]>) {
      state.pokemons = action.payload;
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    setPagination(state, action: PayloadAction<number>) {
      state.pagination = action.payload;
    },
    setTotal(state, action: PayloadAction<number>) {
      state.total = action.payload
    }
  },
});

export const { setPokemons, setLoading, setPagination, setTotal } = pokemonSlice.actions;

export default pokemonSlice.reducer;
