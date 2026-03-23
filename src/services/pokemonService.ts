import axios from 'axios'
import { Pokemon, PokemonListResponse, PokemonSpecies } from '../types';

const API_BASE_URL = 'https://pokeapi.co/api/v2';

const api = axios.create({ baseURL: API_BASE_URL });

export const pokemonService = {

  getList: async (limit = 20, offset = 0): Promise<PokemonListResponse> => {
    const { data } = await api.get(`/pokemon?limit=${limit}&offset=${offset}`);
    return data;
  },

  searchByName: async (name: string): Promise<Pokemon> => {
    const { data } = await api.get(`/pokemon/${name.toLowerCase().trim()}`);
    return data;
  },

  getById: async (id: number): Promise<Pokemon> => {
    const { data } = await api.get(`/pokemon/${id}`);
    return data;
  },

  getSpecies: async (nameOrId: string | number): Promise<PokemonSpecies> => {
    const { data } = await api.get<PokemonSpecies>(`/pokemon-species/${nameOrId}`);
    return data;
  },

}