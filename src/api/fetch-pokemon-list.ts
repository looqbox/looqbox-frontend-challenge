import { api } from "@/lib/axios";

export interface FetchPokemonListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: {
    name: string;
    url: string;
  }[];
}

export async function fetchPokemonList() {
  const response = await api.get<FetchPokemonListResponse>("/pokemon", {
    params: {
      offset: 0,
      limit: 2000,
    },
  });

  return response.data;
}
