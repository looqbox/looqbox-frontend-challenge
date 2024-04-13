import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../lib/axios';
import { Pokemon } from '../../DTOs/Pokemon';

interface PokemonState {
  pokemons: Pokemon[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: any | null;
  totalPages: number;
}

export const fetchPokemonsByType = createAsyncThunk<{pokemons: Pokemon[], totalPages: number}, { type: string, page: number }>(
  'pokemon/fetchByType',
  async ({ type, page }) => {
    
    const response = await api.get(`/type/${type}`);
    const data = response.data;

    const totalPages = data.pokemon.length % 9 === 0 ? data.pokemon.length / 9 : Math.trunc(data.pokemon.length / 9) + 1

    const offset = 9 * (page - 1);

    const endIndex = offset + 9;

    const paginatedData = [...data.pokemon].slice(offset, endIndex)

    const promises = paginatedData
      .map(async (item: any) => {
        const pokemonResponse = await api.get(`/pokemon/${item.pokemon.name}`);
        return pokemonResponse.data;
      });

    const pokemonList = await Promise.all(promises);

    return { pokemons: pokemonList, totalPages, };
  }
);

export const fetchPokemonsWithPagination = createAsyncThunk<{ pokemons: Pokemon[]; totalPages: number }, number>(
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

    return { pokemons: pokemonList, totalPages: 145 };
  }
);

export const fetchPokemonByName = createAsyncThunk<{ pokemon: Pokemon, totalPages: number }, string>(
  'pokemon/fetchById',
  async (pokemonName: string) => {
    const response = await api.get(`/pokemon/${pokemonName}`);
    const data = response.data

    return { pokemon: data, totalPages: 1 }
  }
);

const initialState: PokemonState = {
  pokemons: [],
  status: 'idle',
  totalPages: 10,
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
        state.pokemons = action.payload.pokemons;
        state.totalPages = action.payload.totalPages
      })
      .addCase(fetchPokemonsByType.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error ?? 'Erro ao buscar pokemons. Tente novamente mais tarde';
      })
      .addCase(fetchPokemonsWithPagination.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPokemonsWithPagination.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.pokemons = action.payload.pokemons;
        state.totalPages = action.payload.totalPages
      })
      .addCase(fetchPokemonsWithPagination.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error ?? 'Erro ao buscar pokemons. Tente novamente mais tarde';
      })
      .addCase(fetchPokemonByName.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPokemonByName.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.pokemons = [action.payload.pokemon];
        state.totalPages = action.payload.totalPages
      })
      .addCase(fetchPokemonByName.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error ?? 'Erro ao buscar pokemons. Tente novamente mais tarde';
      });
  },
});

export default pokemonSlice.reducer;