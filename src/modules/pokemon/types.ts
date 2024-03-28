export type APIPokemonList = {
    count: number;
    next: string;
    previous: string;
    results: APIPokemon[];
};

export type APIPokemon = {
    id: number;
    name: string;
    sprites: {
        front_default: string;
        other: {
            dream_world: {
                front_default: string;
            };
        }
    }
    types: {
        type: {
            name: string;
        };
    }[];
    stats: {
        base_stat: number;
        effort: number;
        stat: {
            name: string;
        };
    }[];
    height: number;
    weight: number;
}

export type PokemonList = {
    count: number,
    next: string,
    previous: string,
    results: Pokemon[],
}

export type Pokemon = {
    id: number,
    name: string,
    types: string[],
    image: {
        pixel: string;
        vector: string;
    },
    stats: {
        name: string;
        base_stat: number;
    }[];
    height: number;
    weight: number;
}