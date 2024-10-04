import { api } from "@/lib/axios";

interface FetchPokemonListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: {
    name: string;
    url: string;
  }[];
}

interface FetchPokemonListParams {
  page: number;
}

export async function fetchPokemonList({ page }: FetchPokemonListParams) {
  const response = await api.get<FetchPokemonListResponse>("/pokemon", {
    params: {
      offset: page * 20,
      limit: 20,
    },
  });

  return response.data;
}
