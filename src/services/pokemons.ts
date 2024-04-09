import { Pokemon } from "@/@types/pokemon";
import { Metadata, Result } from "@/@types/services";
import { TypeOfPokemons } from "@/@types/type";
import { api } from "@/services/api";
import { ENDPOINTS } from "@/services/endpoints";

export const getPokemonTypes = async () => {
  const { data } = await api.get(ENDPOINTS.TYPE);
  return data as Metadata<Result>;
};

export const getPokemons = async () => {
  // Get all pokemons listed
  const limit = 10000;
  const offset = 0;

  const url = `${ENDPOINTS.POKEMON}?limit=${limit}&offset=${offset}`;
  const { data } = await api.get(url);
  return data as Metadata<Result>;
};

export const getPokemon = async (id: string) => {
  const { data } = await api.get(`${ENDPOINTS.POKEMON}/${id}`);
  return data as Pokemon;
};

export const getPokemonsByType = async (typeName: string) => {
  const url = `${ENDPOINTS.TYPE}/${typeName}`;
  const { data } = await api.get(url);
  return data as TypeOfPokemons;
};
