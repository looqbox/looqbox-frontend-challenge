import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getPokemonByName,
  getPokemonIndex,
  type PokemonDetails,
  type PokemonIndexItem,
} from '../../services/pokeapi';
import { getEvolutionChainByUrl, getPokemonSpeciesByName } from './api/pokemonApi';
import { flattenEvolutionNames, toSpeciesStored, type PokemonSpeciesStored } from './utils/pokemonTransforms';

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

export const fetchPokemonSpecies = createAsyncThunk<
  PokemonSpeciesStored,
  { name: string },
  { rejectValue: string }
>('pokemon/fetchPokemonSpecies', async ({ name }, { rejectWithValue }) => {
  try {
    const raw = await getPokemonSpeciesByName(name);
    return toSpeciesStored(raw);
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Failed to fetch pokémon species';
    return rejectWithValue(message);
  }
});

/**
 * A evolução depende do species (porque o species dá a evolution_chain.url).
 * Então esse thunk recebe a URL pronta (sem “adivinhar”).
 */
export const fetchPokemonEvolutionChain = createAsyncThunk<
  string[],
  { name: string; evolutionChainUrl: string },
  { rejectValue: string }
>('pokemon/fetchPokemonEvolutionChain', async ({ evolutionChainUrl }, { rejectWithValue }) => {
  try {
    const chain = await getEvolutionChainByUrl(evolutionChainUrl);
    return flattenEvolutionNames(chain.chain);
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Failed to fetch evolution chain';
    return rejectWithValue(message);
  }
});
