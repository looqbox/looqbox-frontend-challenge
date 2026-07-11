import { createContext, useCallback, useEffect, useState } from "react";
import type { Pokemon } from "@/types/pokedex";
import { getAllPokemons, getPokemonByName } from "../services/pokedex";

export const PokemonsListContext = createContext(
	{} as {
		pokemons: Pokemon[];
		loading: boolean;
		error: string | null;
		filterPokemonsByPokemonName: (name: string) => Promise<void>;
	},
);

export const PokemonsListProvider = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const [pokemons, setPokemons] = useState<Pokemon[]>([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);

	async function filterPokemonsByPokemonName(name: string) {
		// if none pokemon is searched, list initial
		if (name === "") {
			await fetchInitialPokemons();
			return;
		}

		setLoading(true);

		try {
			const pokemon = await getPokemonByName(name);

			setPokemons([pokemon]);
		} catch (err) {
			if (err instanceof Error) {
				if (err.message.includes("404")) {
					setPokemons([]);
					return;
				}
			}
			setError(String(err));
		} finally {
			setLoading(false);
		}
	}

	const fetchInitialPokemons = useCallback(async () => {
		setLoading(true);
		const pokemonsQuantity = 10;

		try {
			const data = await getAllPokemons(pokemonsQuantity);
			setPokemons(data);
		} catch (err) {
			if (err instanceof Error) {
				setError(err.message);
			}
			setError(String(err));
		} finally {
			setLoading(false);
		}
	}, []);

	useEffect(() => {
		fetchInitialPokemons();
	}, [fetchInitialPokemons]);

	return (
		<PokemonsListContext.Provider
			value={{ pokemons, loading, error, filterPokemonsByPokemonName }}
		>
			{children}
		</PokemonsListContext.Provider>
	);
};
