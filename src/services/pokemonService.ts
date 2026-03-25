import api from "./api";
import type { Pokemon } from "../types/pokemon";
import type { PokeAPIListResponse } from "../types/poke-api-list-response";
import axios from "axios";

export const pokemonService = {

  getById: async (id: string | number): Promise<Pokemon> => {
    try {
      const { data } = await api.get<Pokemon>(`/pokemon/${id.toString().toLowerCase()}`);
      return data;
    } catch (error) {
      throw handleServiceError(error, "Oops! That Pokémon doesn't exist (yet).");
    }
  },

  getList: async (limit: number = 20, offset: number = 0): Promise<Pokemon[]> => {
    try {
      const response = await api.get<PokeAPIListResponse>('/pokemon', {
        params: { limit, offset }
      });

      const promises = response.data.results.map((item) => api.get<Pokemon>(item.url));
      const pokemonResponses = await Promise.all(promises);
      
      return pokemonResponses.map(res => res.data);
    } catch (error) {
      throw handleServiceError(error, "Oops! Something went wrong while fetching the Pokémon list.");
    }
  },
};

function handleServiceError(error: unknown, defaultMessage: string): Error {
  if (axios.isAxiosError(error)) {
    const status = error.response?.status;
    if (status === 404) return new Error("Couldn't find that Pokémon. Did you type it right?");
    if (status === 500) return new Error("Server connection lost. Try again in a bit!");
    return new Error(error.response?.data?.message || defaultMessage);
  }
  return new Error(defaultMessage);
}