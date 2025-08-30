import {
	fetchAbilityById,
	fetchCharacteristicById,
	fetchColorById,
	fetchEggGroupById,
	fetchGenderById,
	fetchGenerationById,
	fetchGrowthRateById,
	fetchGrowthRateExperienceLevelById,
	fetchHabitatById,
	fetchItemById,
	fetchLocationAreaById,
	fetchMoveById,
	fetchNatureById,
	fetchNatureStatChangeById,
	fetchPokemonById,
	fetchPokemonFormById,
	fetchPokemonList,
	fetchPokemonSpeciesById,
	fetchShapeById,
	fetchStatById,
	fetchTypeById,
	fetchVersionById,
} from '@/api';
import { getIdFromUrl } from '@/helpers/helperGetIdFromUrl';
import { PokemonListResponse } from '@/types';
import { useQuery } from '@tanstack/react-query';

interface UseListPokemonsOptions {
	limit?: number;
	offset?: number;
}

export function useListPokemons({ limit, offset = 0 }: UseListPokemonsOptions) {
	return useQuery<PokemonListResponse, Error>({
		queryKey: ['pokemons', limit, offset],
		queryFn: () => fetchPokemonList(limit ?? 20, offset),
		select: (data) => ({
			...data,
			results: data.results.map((pokemon) => ({
				...pokemon,
				id: Number(getIdFromUrl(pokemon.url)),
			})),
		}),
	});
}

export function useGetAbility(id: string | number) {
	return useQuery<any, Error>({
		queryKey: ['ability', id],
		queryFn: () => fetchAbilityById(id),
	});
}

export function useGetCharacteristic(id: string | number) {
	return useQuery<any, Error>({
		queryKey: ['characteristic', id],
		queryFn: () => fetchCharacteristicById(id),
	});
}

export function useGetEggGroup(id: string | number) {
	return useQuery<any, Error>({
		queryKey: ['egg-group', id],
		queryFn: () => fetchEggGroupById(id),
	});
}

export function useGetGender(id: string | number) {
	return useQuery<any, Error>({
		queryKey: ['gender', id],
		queryFn: () => fetchGenderById(id),
	});
}

export function useGetGrowthRate(id: string | number) {
	return useQuery<any, Error>({
		queryKey: ['growth-rate', id],
		queryFn: () => fetchGrowthRateById(id),
	});
}

export function useGetNature(id: string | number) {
	return useQuery<any, Error>({
		queryKey: ['nature', id],
		queryFn: () => fetchNatureById(id),
	});
}

export function useGetStat(id: string | number) {
	return useQuery<any, Error>({
		queryKey: ['stat', id],
		queryFn: () => fetchStatById(id),
	});
}

export function useGetType(id: string | number) {
	return useQuery<any, Error>({
		queryKey: ['type', id],
		queryFn: () => fetchTypeById(id),
	});
}

export function useGetPokemon(id: string | number) {
	return useQuery<any, Error>({
		queryKey: ['pokemon', id],
		queryFn: () => fetchPokemonById(id),
	});
}

export function useGetPokemonSpecies(id: string | number) {
	return useQuery<any, Error>({
		queryKey: ['pokemon-species', id],
		queryFn: () => fetchPokemonSpeciesById(id),
	});
}

export function useGetPokemonForm(id: string | number) {
	return useQuery<any, Error>({
		queryKey: ['pokemon-form', id],
		queryFn: () => fetchPokemonFormById(id),
	});
}

export function useGetLocationArea(id: string | number) {
	return useQuery<any, Error>({
		queryKey: ['location-area', id],
		queryFn: () => fetchLocationAreaById(id),
	});
}

export function useGetColor(id: string | number) {
	return useQuery<any, Error>({
		queryKey: ['pokemon-color', id],
		queryFn: () => fetchColorById(id),
	});
}

export function useGetShape(id: string | number) {
	return useQuery<any, Error>({
		queryKey: ['pokemon-shape', id],
		queryFn: () => fetchShapeById(id),
	});
}

export function useGetHabitat(id: string | number) {
	return useQuery<any, Error>({
		queryKey: ['pokemon-habitat', id],
		queryFn: () => fetchHabitatById(id),
	});
}

export function useGetGrowthRateExperienceLevel(id: string | number) {
	return useQuery<any, Error>({
		queryKey: ['growth-rate-experience-level', id],
		queryFn: () => fetchGrowthRateExperienceLevelById(id),
	});
}

export function useGetNatureStatChange(id: string | number) {
	return useQuery<any, Error>({
		queryKey: ['nature-stat-change', id],
		queryFn: () => fetchNatureStatChangeById(id),
	});
}

export function useGetMove(id: string | number) {
	return useQuery<any, Error>({
		queryKey: ['move', id],
		queryFn: () => fetchMoveById(id),
	});
}

export function useGetItem(id: string | number) {
	return useQuery<any, Error>({
		queryKey: ['item', id],
		queryFn: () => fetchItemById(id),
	});
}

export function useGetVersion(id: string | number) {
	return useQuery<any, Error>({
		queryKey: ['version', id],
		queryFn: () => fetchVersionById(id),
	});
}

export function useGetGeneration(id: string | number) {
	return useQuery<any, Error>({
		queryKey: ['generation', id],
		queryFn: () => fetchGenerationById(id),
	});
}
