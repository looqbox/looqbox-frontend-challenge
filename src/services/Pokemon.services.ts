import api from '../http/api';
import {
  MoreDetailsPayload,
  PokemonDetailsPayload,
  PokemonListPayload,
} from '../shared/service.interface';

export const getAllPokemons = async (
  offset?: number,
  limit?: number,
): Promise<PokemonListPayload> => {
  const response = await api.get(`/pokemon?offset=${(offset = 0)}&limit=${(limit = 100000)}`);
  const { data } = response;
  return data;
};

export const getPokemonDetails = async (param: string | number): Promise<PokemonDetailsPayload> => {
  const response = await api.get(`/pokemon/${param}`);
  const { data } = response;
  return data;
};

export const getMoreDetails = async (param: number): Promise<MoreDetailsPayload> => {
  const response = await api.get(`/pokemon-species/${param}`);
  const { data } = response;
  return data;
};
