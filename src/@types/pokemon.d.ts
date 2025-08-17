
type PokemonSpriteSet = {
    front_default: string | null;
    back_default?: string | null;
    front_shiny?: string | null;
    back_shiny?: string | null;
    other: {
        'official-artwork': {
            front_default: string | null
        }
    }
}

type PokemonFilters = {
    type?: string
    minHeight?: number
    maxHeight?: number
    minWeight?: number
    maxWeight?: number
}

type PokemonTypeSlot = {
    type: {
        name: string
    }
}

type PokemonAbilitySlot = {
    ability: {
        name: string
    }
}

type PokemonStatSlot = {
    base_stat: number;
    stat: {
        name: string
    }
}

type Pokemon = {
    id: number;
    name: string;
    url: string;
    sprites: PokemonSpriteSet;
    types: PokemonTypeSlot[];
    height: number;
    weight: number;
    abilities: PokemonAbilitySlot[];
    stats: PokemonStatSlot[];
    base_experience?: number;
}

type PokemonListItem = {
    name: string;
    url: string
}
type PokemonListResponse = {
    count: number;
    next: string | null;
    previous: string | null;
    results: PokemonListItem[]
}

type NamedAPIResource = {
    name: string;
    url: string
}

type PokemonTypeList = {
    count: number;
    results: NamedAPIResource[]
}

type PokemonByTypeResponse = {
    pokemon: {
        pokemon: PokemonListItem
    }[]
}
