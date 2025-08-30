import type { Berry } from '@/types/berrie';
import axios from 'axios';

const POKEAPI_BASE_URL = import.meta.env.VITE_POKEAPI_BASE_URL as string;

/**
 * Busca a lista geral de Berries da BerrieAPI.
 * @param limit Quantidade de berries por página (default: 20)
 * @param offset Offset para paginação (default: 0)
 */

export async function getBerries() {
	const response = await axios.get<{ results: { name: string; url: string }[] }>(
		`${POKEAPI_BASE_URL}/berry?limit=1000`
	);
	return response.data;
}

export async function getBerryByIdOrName(idOrName: string | number): Promise<Berry> {
	const response = await axios.get<Berry>(`${POKEAPI_BASE_URL}/berry/${idOrName}`);
	return response.data;
}

export async function getBerryFirmnessByIdOrName(idOrName: string | number) {
	const response = await axios.get(`${POKEAPI_BASE_URL}/berry-firmness/${idOrName}`);
	return response.data;
}

export async function getBerryFlavorByIdOrName(idOrName: string | number) {
	const response = await axios.get(`${POKEAPI_BASE_URL}/berry-flavor/${idOrName}`);
	return response.data;
}
