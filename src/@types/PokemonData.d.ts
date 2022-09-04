interface PokemonData {
    abilities: [
        {
            ability: {
                name: string;
            };
        }
    ];
    base_experience: number;
    height: number;
    id: number;
    name: string;
    sprites: {
        back_default: string;
        back_female: string;
        back_shiny: string;
        back_shiny_female: string;
        front_default: string;
        front_female: string;
        front_shiny: string;
        front_shiny_female: string;
        other: {
            dream_world: {
                front_default: string;
                front_female: string;
            };
            home: {
                front_default: string;
                front_female: string;
                front_shiny: string;
                front_shiny_female: string;
            }
            "official-artwork": {
                front_default: string;
            };
        };
    };
    stats: [
        {
            base_stat: number;
            stat: {
                name: string;
            };
        }
    ];
    types: [
        {
            type: {
                name: string;
            };
        }
    ];
    weight: number;
}

export default PokemonData;