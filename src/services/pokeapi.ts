import { httpGet } from "../api/http";
import type {
  EvolutionChainResponse,
  Pokemon,
  PokemonListResponse,
  PokemonSpeciesResponse,
  PokemonTypeResponse,
} from "../store/pokemon/types";

const BASE_URL = "https://pokeapi.co/api/v2";

export function getPokemonList(limit: number, offset: number) {
  return httpGet<PokemonListResponse>(
    `${BASE_URL}/pokemon?limit=${limit}&offset=${offset}`
  );
}

export function getPokemonByName(name: string) {
  const normalized = name.trim().toLowerCase();
  return httpGet<Pokemon>(`${BASE_URL}/pokemon/${normalized}`);
}

export function getPokemonByType(type: string) {
  return httpGet<PokemonTypeResponse>(`${BASE_URL}/type/${type}`);
}

export function getPokemonSpecies(id: number) {
  return httpGet<PokemonSpeciesResponse>(`${BASE_URL}/pokemon-species/${id}`);
}

export function getEvolutionChain(url: string) {
  return httpGet<EvolutionChainResponse>(url);
}
