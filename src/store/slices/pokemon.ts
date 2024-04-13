import { createSlice, createAsyncThunk, SerializedError } from "@reduxjs/toolkit";
import { api } from "../../lib/axios";
import { Pokemon } from "../../DTOs/Pokemon";

interface PokemonState {
  pokemons: Pokemon[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: SerializedError | null;
  totalPokemons: number;
}

export const fetchPokemonsByType = createAsyncThunk<
  { pokemons: Pokemon[]; totalPokemons: number },
  { type: string; page: number }
>("pokemon/fetchByType", async ({ type, page }) => {
  const response = await api.get(`/type/${type}`);
  const data = response.data;

  const totalPokemons = data.pokemon.length;

  const offset = 9 * (page - 1);

  const endIndex = offset + 9;

  const paginatedData = [...data.pokemon].slice(offset, endIndex);

  const promises = paginatedData.map(async (item: { pokemon: { name: string, url: string } }) => {
    const pokemonResponse = await api.get(`/pokemon/${item.pokemon.name}`);
    return pokemonResponse.data;
  });

  const pokemonList = await Promise.all(promises);

  return { pokemons: pokemonList, totalPokemons };
});

export const fetchPokemonsWithPagination = createAsyncThunk<
  { pokemons: Pokemon[]; totalPokemons: number },
  number
>("pokemon/fetchWithPagination", async (page: number) => {
  const offset = 9 * (page - 1);

  const response = await api.get(`/pokemon?offset=${offset}&limit=9`);
  const data = response.data;

  const promises = data.results.map(
    async (pokemon: { name: string; url: string }) => {
      const pokemonResponse = await api.get(`/pokemon/${pokemon.name}`);
      return pokemonResponse.data;
    }
  );

  const pokemonList = await Promise.all(promises);

  return { pokemons: pokemonList, totalPokemons: 1302 };
});

export const fetchPokemonByName = createAsyncThunk<
  { pokemon: Pokemon; totalPokemons: number },
  string
>("pokemon/fetchById", async (pokemonName: string) => {
  const response = await api.get(`/pokemon/${pokemonName}`);
  const data = response.data;

  return { pokemon: data, totalPokemons: 1 };
});

const initialState: PokemonState = {
  pokemons: [],
  status: "idle",
  totalPokemons: 1,
  error: null,
};

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemonsByType.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPokemonsByType.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.pokemons = action.payload.pokemons;
        state.totalPokemons = action.payload.totalPokemons;
      })
      .addCase(fetchPokemonsByType.rejected, (state, action) => {
        state.status = "failed";
        state.error =
          action.error ?? "Erro ao buscar pokemons. Tente novamente mais tarde";
      })
      .addCase(fetchPokemonsWithPagination.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPokemonsWithPagination.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.pokemons = action.payload.pokemons;
        state.totalPokemons = action.payload.totalPokemons;
      })
      .addCase(fetchPokemonsWithPagination.rejected, (state, action) => {
        state.status = "failed";
        state.error =
          action.error ?? "Erro ao buscar pokemons. Tente novamente mais tarde";
      })
      .addCase(fetchPokemonByName.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPokemonByName.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.pokemons = [action.payload.pokemon];
        state.totalPokemons = action.payload.totalPokemons;
      })
      .addCase(fetchPokemonByName.rejected, (state, action) => {
        state.status = "failed";
        state.error =
          action.error ?? "Erro ao buscar pokemons. Tente novamente mais tarde";
      });
  },
});

export default pokemonSlice.reducer;
