import type { Pokemon } from "./pokemon";

export interface PokemonState {
    pokemonList: Pokemon[];
    initialPokemonList: Pokemon[];
    loading: boolean;
    error: string | null;
    currentPage: number;
    isTyping: boolean;
}