import { createAsyncThunk } from '@reduxjs/toolkit';
import { getPokemonByName, getPokemonPage, type PokemonDetails, type PokemonListResponse } from '../../services/pokeapi';

export const fetchPokemonPage = createAsyncThunk<
  PokemonListResponse,
  { page: number; pageSize: number },
  { rejectValue: string }
>('pokemon/fetchPokemonPage', async ({ page, pageSize }, { rejectWithValue }) => {
  try {
    return await getPokemonPage({ page, pageSize });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Failed to fetch pokémon list';
    return rejectWithValue(message);
  }
});

export const fetchPokemonDetails = createAsyncThunk<
  PokemonDetails,
  { name: string },
  { rejectValue: string }
>('pokemon/fetchPokemonDetails', async ({ name }, { rejectWithValue }) => {
  try {
    return await getPokemonByName(name);
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Failed to fetch pokémon details';
    return rejectWithValue(message);
  }
});
