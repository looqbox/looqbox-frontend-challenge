namespace PokemonTypes {
    export interface Pokedex {
        pokemon_entries: PokemonTypes.PokemonEntry[]
    }

    export interface PokemonEntry {
        entry_number: number
        pokemon_species: {
            name: string
            url: string
        }
    }
}

export default PokemonTypes
