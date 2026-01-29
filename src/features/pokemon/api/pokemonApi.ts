import axios from 'axios';

export type PokemonSpeciesResponse = {
  capture_rate: number;
  habitat: { name: string } | null;
  evolution_chain: { url: string };
  flavor_text_entries: Array<{
    flavor_text: string;
    language: { name: string };
    version?: { name: string };
  }>;
};

export type EvolutionChainResponse = {
  chain: EvolutionChainNode;
};

export type EvolutionChainNode = {
  species: { name: string; url: string };
  evolves_to: EvolutionChainNode[];
};

const api = axios.create({
  baseURL: 'https://pokeapi.co/api/v2',
  timeout: 10_000,
});

export async function getPokemonSpeciesByName(name: string): Promise<PokemonSpeciesResponse> {
  const normalized = name.trim().toLowerCase();
  const res = await api.get<PokemonSpeciesResponse>(`/pokemon-species/${normalized}`);
  return res.data;
}

/**
 * Recebe a URL do evolution_chain (vem do endpoint pokemon-species).
 * Ex: https://pokeapi.co/api/v2/evolution-chain/1/
 */
export async function getEvolutionChainByUrl(url: string): Promise<EvolutionChainResponse> {
  const res = await api.get<EvolutionChainResponse>(url);
  return res.data;
}
