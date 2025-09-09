import axios from 'axios';
import type { PokemonListResponse } from '../types/pokemon.types';
import { INITIAL_LOAD_LIMIT } from '../config/constants';

const API_BASE_URL = import.meta.env.VITE_POKEAPI_BASE_URL;

export const getPokemons = async (limit = INITIAL_LOAD_LIMIT, offset = 0) => {
    try {
        const response = await axios.get<PokemonListResponse>(
            `${API_BASE_URL}/pokemon`, { params: { limit, offset } }
        );
        return response.data;
    } catch (error) {
        console.error("Error fetching Pokémon list:", error);
        throw error;
    }
};