import axios from 'axios';
import type {
  PokemonListResponse,
  PokemonDetails,
  PokemonListItem,
  PokemonTypeSlot,
} from '../types/pokemon.types';
import { INITIAL_LOAD_LIMIT } from '../config/constants';

const API_BASE_URL = import.meta.env.VITE_POKEAPI_BASE_URL;

interface ApiResource {
  name: string;
  url: string;
}

interface ApiResourceListResponse {
  results: ApiResource[];
}

export const getPokemons = async (limit = INITIAL_LOAD_LIMIT, offset = 0) => {
  try {
    const response = await axios.get<PokemonListResponse>(`${API_BASE_URL}/pokemon`, {
      params: { limit, offset },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching Pokémon list:', error);
    throw error;
  }
};

export const getPokemonDetails = async (nameOrId: string): Promise<PokemonDetails> => {
  try {
    const response = await axios.get<PokemonDetails>(`${API_BASE_URL}/pokemon/${nameOrId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching Pokémon details for "${nameOrId}":`, error);
    throw error;
  }
};

export const getAllTypes = async (): Promise<ApiResource[]> => {
  try {
    const response = await axios.get<ApiResourceListResponse>(`${API_BASE_URL}/type`, {
      params: { limit: 50 },
    });
    return response.data.results;
  } catch (error) {
    console.error('Error fetching all types:', error);
    throw error;
  }
};

export const getAllGenerations = async (): Promise<ApiResource[]> => {
  try {
    const response = await axios.get<ApiResourceListResponse>(`${API_BASE_URL}/generation`, {
      params: { limit: 20 },
    });
    return response.data.results;
  } catch (error) {
    console.error('Error fetching all generations:', error);
    throw error;
  }
};

export const getPokemonsByType = async (typeName: string): Promise<PokemonListItem[]> => {
  try {
    const response = await axios.get<{ pokemon: PokemonTypeSlot[] }>(
      `${API_BASE_URL}/type/${typeName}`
    );
    return response.data.pokemon.map((p) => p.pokemon);
  } catch (error) {
    console.error(`Error fetching Pokémon for type "${typeName}":`, error);
    throw error;
  }
};

export const getPokemonsByGeneration = async (
  generationName: string
): Promise<PokemonListItem[]> => {
  try {
    const response = await axios.get<{ pokemon_species: PokemonListItem[] }>(
      `${API_BASE_URL}/generation/${generationName}`
    );
    return response.data.pokemon_species;
  } catch (error) {
    console.error(`Error fetching Pokémon for generation "${generationName}":`, error);
    throw error;
  }
};
