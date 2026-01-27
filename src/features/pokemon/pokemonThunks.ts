import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getPokemonByName,
  getPokemonIndex,
  type PokemonDetails,
  type PokemonIndexItem,
} from '../../services/pokeapi';

export const fetchPokemonIndex = createAsyncThunk<
  PokemonIndexItem[],
  void,
  { rejectValue: string }
>('pokemon/fetchPokemonIndex', async (_, { rejectWithValue }) => {
  try {
    return await getPokemonIndex();
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Failed to fetch pokémon index';
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