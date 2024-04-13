import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../lib/axios';
import { Pokemon } from '../../DTOs/Pokemon';

interface PokemonState {
  pokemons: Pokemon[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

export const fetchPokemonsByType = createAsyncThunk<Pokemon[], { type: string; amount?: number }>(
  'pokemon/fetchByType',
  async ({ type, amount = 9 }) => {
    
    const response = await api.get(`/type/${type}`);
    const data = response.data;

    const promises = data.pokemon
      .filter((item: any, index: number) => index + 1 <= amount && item)
      .map(async (item: any) => {
        const pokemonResponse = await api.get(`/pokemon/${item.pokemon.name}`);
        return pokemonResponse.data;
      });

    const pokemonList = await Promise.all(promises);

    return pokemonList;
  }
);

export const fetchPokemonsWithPagination = createAsyncThunk<Pokemon[], number>(
  'pokemon/fetchWithPagination',
  async (page: number) => {
    const offset = 9 * (page - 1);

    const response = await api.get(`/pokemon?offset=${offset}&limit=9`);
    const data = response.data;

    const promises = data.results.map(
      async (pokemon: { name: string, url: string }) => {
        const pokemonResponse = await api.get(`/pokemon/${pokemon.name}`);
        return pokemonResponse.data;
      }
    );

    const pokemonList = await Promise.all(promises);

    return pokemonList;
  }
);

export const fetchPokemonByName = createAsyncThunk<Pokemon, string>(
  'pokemon/fetchById',
  async (pokemonName: string) => {
    const response = await api.get(`/pokemon/${pokemonName}`);
    return response.data
  }
);

const initialState: PokemonState = {
  pokemons: [],
  status: 'idle',
  error: null,
};

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemonsByType.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPokemonsByType.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.pokemons = action.payload;
      })
      .addCase(fetchPokemonsByType.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? 'Erro ao buscar pokemons. Tente novamente mais tarde';
      })
      .addCase(fetchPokemonsWithPagination.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPokemonsWithPagination.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.pokemons = action.payload;
      })
      .addCase(fetchPokemonsWithPagination.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? 'Erro ao buscar pokemons. Tente novamente mais tarde';
      })
      .addCase(fetchPokemonByName.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPokemonByName.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.pokemons = [action.payload];
      })
      .addCase(fetchPokemonByName.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? 'Erro ao buscar pokemons. Tente novamente mais tarde';
      });
  },
});

export default pokemonSlice.reducer;