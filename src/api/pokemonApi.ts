import { PokemonListResponse } from '@/types';
import axios from 'axios';

const POKEAPI_BASE_URL = import.meta.env.VITE_POKEAPI_BASE_URL as string;

/**
 * Busca a lista geral de Pokémons da PokeAPI.
 * @param limit Quantidade de pokémons por página (default: 20)
 * @param offset Offset para paginação (default: 0)
 */
export async function fetchPokemonList(limit: number, offset: number = 0): Promise<PokemonListResponse> {
	const response = await axios.get<PokemonListResponse>(`${POKEAPI_BASE_URL}/pokemon?limit=${limit}&offset=${offset}`);
	return response.data;
}

export async function fetchAbilityById(id: string | number) {
	const { data } = await axios.get(`${POKEAPI_BASE_URL}/ability/${id}`);
	return data;
}

export async function fetchCharacteristicById(id: string | number) {
	const { data } = await axios.get(`${POKEAPI_BASE_URL}/characteristic/${id}`);
	return data;
}

export async function fetchEggGroupById(id: string | number) {
	const { data } = await axios.get(`${POKEAPI_BASE_URL}/egg-group/${id}`);
	return data;
}

export async function fetchGenderById(id: string | number) {
	const { data } = await axios.get(`${POKEAPI_BASE_URL}/gender/${id}`);
	return data;
}

export async function fetchGrowthRateById(id: string | number) {
	const { data } = await axios.get(`${POKEAPI_BASE_URL}/growth-rate/${id}`);
	return data;
}

export async function fetchNatureById(id: string | number) {
	const { data } = await axios.get(`${POKEAPI_BASE_URL}/nature/${id}`);
	return data;
}

export async function fetchStatById(id: string | number) {
	const { data } = await axios.get(`${POKEAPI_BASE_URL}/stat/${id}`);
	return data;
}

export async function fetchTypeById(id: string | number) {
	const { data } = await axios.get(`${POKEAPI_BASE_URL}/type/${id}`);
	return data;
}

export async function fetchPokemonById(id: string | number) {
	const { data } = await axios.get(`${POKEAPI_BASE_URL}/pokemon/${id}`);
	return data;
}

export async function fetchPokemonSpeciesById(id: string | number) {
	const { data } = await axios.get(`${POKEAPI_BASE_URL}/pokemon-species/${id}`);
	return data;
}

export async function fetchPokemonFormById(id: string | number) {
	const { data } = await axios.get(`${POKEAPI_BASE_URL}/pokemon-form/${id}`);
	return data;
}

export async function fetchLocationAreaById(id: string | number) {
	const { data } = await axios.get(`${POKEAPI_BASE_URL}/location-area/${id}`);
	return data;
}

export async function fetchColorById(id: string | number) {
	const { data } = await axios.get(`${POKEAPI_BASE_URL}/pokemon-color/${id}`);
	return data;
}

export async function fetchShapeById(id: string | number) {
	const { data } = await axios.get(`${POKEAPI_BASE_URL}/pokemon-shape/${id}`);
	return data;
}

export async function fetchHabitatById(id: string | number) {
	const { data } = await axios.get(`${POKEAPI_BASE_URL}/pokemon-habitat/${id}`);
	return data;
}

export async function fetchGrowthRateExperienceLevelById(id: string | number) {
	const { data } = await axios.get(`${POKEAPI_BASE_URL}/growth-rate/${id}`);
	return data;
}

export async function fetchNatureStatChangeById(id: string | number) {
	const { data } = await axios.get(`${POKEAPI_BASE_URL}/nature/${id}`);
	return data;
}

export async function fetchMoveById(id: string | number) {
	const { data } = await axios.get(`${POKEAPI_BASE_URL}/move/${id}`);
	return data;
}

export async function fetchItemById(id: string | number) {
	const { data } = await axios.get(`${POKEAPI_BASE_URL}/item/${id}`);
	return data;
}

export async function fetchVersionById(id: string | number) {
	const { data } = await axios.get(`${POKEAPI_BASE_URL}/version/${id}`);
	return data;
}

export async function fetchGenerationById(id: string | number) {
	const { data } = await axios.get(`${POKEAPI_BASE_URL}/generation/${id}`);
	return data;
}
