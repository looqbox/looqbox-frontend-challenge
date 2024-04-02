export interface IPokemonListState {
    pokemons: IPokemon[],
    pokemonListRequest: IPokemonListRequest,
    loading: boolean;
    error: string | null;
}

export interface IPokemonListRequest {
    name?: string,
    offset: number,
    limit: number
}

export interface IPokemonDetailsState {
    pokemon: IPokemon | undefined,
    loading: boolean;
    error: string | null;
}

export interface IPokemon {
    id: number;
    name: string;
    base_experience: number;
    height: number;
    is_default: boolean;
    order: number;
    weight: number;
    category: any;
    abilities: any;
    types: any;
    stats: any;
}

// Due to a time limitation, the return object wasn't entirely mapped. This is an example of how to map objects and develop interfaces. To have the whole process complete, in addition to the Pokémon interface, all the other objects must be mapped.
