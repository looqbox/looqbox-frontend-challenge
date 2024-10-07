import { api } from "@/lib/api";

export interface FetchPokemonListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: {
    name: string;
    url: string;
  }[];
}

export async function fetchPokemonList(): Promise<FetchPokemonListResponse> {
  return api("/pokemon/?offset=0&limit=2000").then((result) => result.json());
}
