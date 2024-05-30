namespace PokemonTypes {
    export interface Pokedex {
        pokemon_entries: PokemonTypes.PokemonEntry[]
    }

    export interface Pokemon {
        name: string
        sprites: {
            front_default: string
        }
        stats: PokemonStat[]
        types: PokemonType[]
        weight: number
    }

    export interface PokemonEntry {
        entry_number: number
        pokemon_species: {
            name: string
            url: string
        }
    }

    export interface PokemonStat {
        base_stat: number
        stat: {
            name: string
        }
    }

    export interface PokemonType {
        slot: number
        type: {
            name: string
        }
    }
}

export default PokemonTypes
