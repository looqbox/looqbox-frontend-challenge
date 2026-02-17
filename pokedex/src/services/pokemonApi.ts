import type {
  Pokemon,
  PokemonListApiResponse,
  PokemonSpecies,
} from "../store/types.interfaces";

const BASE_URL = "https://pokeapi.co/api/v2";

export const fetchPokemon = async (
  nameOrId: string | number,
): Promise<Pokemon> => {
  const res = await fetch(
    `${BASE_URL}/pokemon/${String(nameOrId).toLowerCase()}`,
  );
  if (!res.ok) throw new Error(`Pokemon ${nameOrId} not found`);
  return res.json();
};

export const fetchPokemonList = async (
  offset: number = 0,
  limit: number = 20,
): Promise<PokemonListApiResponse> => {
  const res = await fetch(
    `${BASE_URL}/pokemon?offset=${offset}&limit=${limit}`,
  );
  if (!res.ok) throw new Error(`Failed to fetch Pokemon list`);
  return res.json();
};

export const fetchPokemonSpecies = async (
  nameOrId: string | number,
): Promise<PokemonSpecies> => {
  const res = await fetch(
    `${BASE_URL}/pokemon-species/${String(nameOrId).toLowerCase()}`,
  );
  if (!res.ok) throw new Error("Failed to fetch species data");
  return res.json();
};
