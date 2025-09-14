import { createAsyncThunk, createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { getPokemonById } from '../../apis/getById';
import { getPokemonByName } from '../../apis/getByNames';
import { listPokemons } from '../../apis/getList';
import { getPokemonDescription } from '../../apis/getSpecies';
import type { Pokemon } from '../../constants/Pokemon';

type Status = 'idle' | 'loading' | 'succeeded' | 'failed';

type PokedexState = {
  list: Pokemon[];
  total: number;
  page: number;
  pageSize: number;
  status: Status;
  error?: string;
  query: string;
  detailsById: Record<number, { pokemon: Pokemon; description: string }>;
};

const initialState: PokedexState = {
  list: [],
  total: 0,
  page: 1,
  pageSize: 12,
  status: 'idle',
  query: '',
  detailsById: {},
};

export const loadPokemons = createAsyncThunk('pokedex/load', async (page: number, { getState }) => {
  const { pokedex } = getState() as { pokedex: PokedexState };
  const { pageSize } = pokedex;
  const { results, total } = await listPokemons(page, pageSize);
  return { results, total, page };
});

export const searchByName = createAsyncThunk(
  'pokedex/searchByName',
  async (name: string, { rejectWithValue }) => {
    const p = await getPokemonByName(name);
    if (!p) return rejectWithValue('Pokémon não encontrado');
    return p;
  },
);

export const loadDetails = createAsyncThunk('pokedex/loadDetails', async (id: number) => {
  const [pokemon, description] = await Promise.all([getPokemonById(id), getPokemonDescription(id)]);
  return { id, pokemon, description };
});

const pokedexSlice = createSlice({
  name: 'pokedex',
  initialState,
  reducers: {
    setPage(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },
    setPageSize(state, action: PayloadAction<number>) {
      state.pageSize = action.payload;
    },
    setQuery(state, action: PayloadAction<string>) {
      state.query = action.payload;
    },
    clearQuery(state) {
      state.query = '';
    },
  },
  extraReducers: (b) => {
    b.addCase(loadPokemons.pending, (s) => {
      s.status = 'loading';
      s.error = undefined;
    });
    b.addCase(loadPokemons.fulfilled, (s, a) => {
      s.status = 'succeeded';
      s.list = a.payload.results;
      s.total = a.payload.total;
      s.page = a.payload.page;
    });
    b.addCase(loadPokemons.rejected, (s, a) => {
      s.status = 'failed';
      s.error = a.error.message;
    });

    b.addCase(searchByName.pending, (s) => {
      s.status = 'loading';
      s.error = undefined;
    });
    b.addCase(searchByName.fulfilled, (s, a) => {
      s.status = 'succeeded';
      s.list = [a.payload];
      s.total = 1;
      s.page = 1;
    });
    b.addCase(searchByName.rejected, (s, a) => {
      s.status = 'failed';
      s.list = [];
      s.total = 0;
      s.error = (a.payload as string) || 'Pokémon não encontrado';
    });

    b.addCase(loadDetails.pending, (s) => {
      s.status = 'loading';
      s.error = undefined;
    });
    b.addCase(loadDetails.fulfilled, (s, a) => {
      const { id, pokemon, description } = a.payload;
      s.status = 'succeeded';
      s.detailsById[id] = { pokemon, description };
    });
    b.addCase(loadDetails.rejected, (s, a) => {
      s.status = 'failed';
      s.error = a.error.message;
    });
  },
});

export const { setPage, setPageSize, setQuery, clearQuery } = pokedexSlice.actions;
export default pokedexSlice.reducer;
