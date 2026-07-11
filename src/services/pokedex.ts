import { AxiosError } from "axios";
import { PokemonClient } from "pokenode-ts";
import type { Pokemon } from "@/types/pokedex";

// enables logs
// it comes with Cache (axios) by default
const api = new PokemonClient({ logs: true });

export async function getAllPokemons(limit: number = 10) {
	const { results = [] } = await api.listPokemons(undefined, limit);

	const pokemons: Pokemon[] = [];

	for (const { name } of results) {
		const pokemon = await api.getPokemonByName(name);

		pokemons.push({
			id: pokemon.id,
			name,
			types: pokemon.types.map(({ type }) => type.name),
			image: pokemon.sprites.front_default,
		});
	}

	return pokemons;
}

export async function getPokemonByName(name: string) {
	try {
		const pokemonResult = await api.getPokemonByName(name);
		const pokemon = {
			id: pokemonResult.id,
			name: pokemonResult.name,
			types: pokemonResult.types.map(({ type }) => type.name),
			image: pokemonResult.sprites.front_default,
		};

		return pokemon;
	} catch (error) {
		if (error instanceof AxiosError) {
			throw Error(error.message);
		}

		throw Error(String(error));
	}
}
