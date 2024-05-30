/* eslint-disable max-lines */
export const mockKantoPokedex = {
    id: 2,
    name: 'kanto',
    is_main_series: true,
    descriptions: [
        {
            description: 'Rot/Blau/Gelb Kanto Dex',
            language: {
                name: 'de',
                url: 'https://pokeapi.co/api/v2/language/6/',
            },
        },
    ],
    names: [
        {
            name: 'Kanto',
            language: {
                name: 'de',
                url: 'https://pokeapi.co/api/v2/language/6/',
            },
        },
    ],
    pokemon_entries: [
        {
            entry_number: 1,
            pokemon_species: {
                name: 'bulbasaur',
                url: 'https://pokeapi.co/api/v2/pokemon-species/1/',
            },
        },
    ],
    region: {
        name: 'kanto',
        url: 'https://pokeapi.co/api/v2/region/1/',
    },
    version_groups: [
        {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/',
        },
    ],
}
