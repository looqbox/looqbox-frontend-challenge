import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPokemons, getPokemonByName } from "../api/pokemonApi";
import { PokemonListItem } from "../types/pokemon";

export const fetchPokemons = createAsyncThunk(
  "pokemon/fetchPokemons",
  async ({ limit, offset }: { limit: number; offset: number }) => {
    const data = await getPokemons(limit, offset);
    return { results: data.results, count: data.count };
  }
);

export const fetchPokemonByName = createAsyncThunk(
  "pokemon/fetchPokemonByName",
  async (name: string) => {
    const data = await getPokemonByName(name);
    return {
      results: [
        {
          name: data.name,
          url: `https://pokeapi.co/api/v2/pokemon/${data.id}/`,
        },
      ],
      count: 1,
    };
  }
);

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: {
    list: [] as PokemonListItem[],
    loading: false,
    error: null as string | null,
    count: 0,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemons.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPokemons.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload.results;
        state.count = action.payload.count;
      })
      .addCase(fetchPokemons.rejected, (state) => {
        state.loading = false;
        state.error = "Erro ao carregar pokémons"; // erro real → modal
      })
      .addCase(fetchPokemonByName.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPokemonByName.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload.results;
        state.count = action.payload.count;
      })
      .addCase(fetchPokemonByName.rejected, (state) => {
        state.loading = false;
        state.list = [];
        state.count = 0;
        state.error = null;
      });
  },
});

export default pokemonSlice.reducer;
