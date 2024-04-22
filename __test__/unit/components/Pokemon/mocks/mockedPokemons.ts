import Pokemon from "../../../../../src/core/models/Pokemon";

export const mockedPokemons: Pokemon[] = [
  {
    id: 1,
    name: "Pikachu",
    base_experience: 112,
    height: 4,
    is_default: true,
    order: 1,
    weight: 60,
    abilities: [
      {
        is_hidden: false,
        slot: 1,
        ability: {
          name: "Static",
          url: "https://pokeapi.co/api/v2/ability/9/",
        },
      },
    ],
    forms: [
      {
        name: "default",
        url: "https://pokeapi.co/api/v2/pokemon-form/1/",
      },
    ],
    game_indices: [
      {
        game_index: 1,
        version: {
          name: "red",
          url: "https://pokeapi.co/api/v2/version/1/",
        },
      },
    ],
    held_items: [
      {
        item: {
          name: "Thunder Stone",
          url: "https://pokeapi.co/api/v2/item/83/",
        },
        version_details: [
          {
            version: {
              name: "red",
              url: "https://pokeapi.co/api/v2/version/1/",
            },
            rarity: 50,
          },
        ],
      },
    ],
    location_area_encounters: "https://pokeapi.co/api/v2/pokemon/1/encounters",
    moves: [
      {
        move: {
          name: "Thunder Shock",
          url: "https://pokeapi.co/api/v2/move/8/",
        },
        version_group_details: [
          {
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "red-blue",
              url: "https://pokeapi.co/api/v2/version-group/1/",
            },
            level_learned_at: 16,
          },
        ],
      },
    ],
    past_types: [
      {
        generation: {
          name: "generation-i",
          url: "https://pokeapi.co/api/v2/generation/1/",
        },
        types: [
          {
            slot: 1,
            type: {
              name: "Electric",
              url: "https://pokeapi.co/api/v2/type/13/",
            },
          },
        ],
      },
    ],
    sprites: {
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
      front_shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png",
      back_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
      back_shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png",
    },
    cries: {
      latest:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/cries/1.ogg",
      legacy:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/cries/1.ogg",
    },
    species: {
      name: "pikachu",
      url: "https://pokeapi.co/api/v2/pokemon-species/1/",
    },
    stats: [
      {
        stat: {
          name: "speed",
          url: "https://pokeapi.co/api/v2/stat/6/",
        },
        effort: 0,
        base_stat: 90,
      },
    ],
    types: [
      {
        slot: 1,
        type: {
          name: "Electric",
          url: "https://pokeapi.co/api/v2/type/13/",
        },
      },
    ],
  },
  {
    id: 1,
    name: "Bulbasaur",
    base_experience: 64,
    height: 7,
    is_default: true,
    order: 1,
    weight: 69,
    abilities: [
      {
        is_hidden: false,
        slot: 1,
        ability: {
          name: "Overgrow",
          url: "https://pokeapi.co/api/v2/ability/65/",
        },
      },
    ],
    forms: [
      {
        name: "bulbasaur",
        url: "https://pokeapi.co/api/v2/pokemon-form/1/",
      },
    ],
    game_indices: [
      {
        game_index: 1,
        version: {
          name: "red-blue",
          url: "https://pokeapi.co/api/v2/version/1/",
        },
      },
    ],
    held_items: [
      {
        item: {
          name: "leaf-stone",
          url: "https://pokeapi.co/api/v2/item/34/",
        },
        version_details: [
          {
            version: {
              name: "yellow",
              url: "https://pokeapi.co/api/v2/version/2/",
            },
            rarity: 50,
          },
        ],
      },
    ],
    location_area_encounters: "https://pokeapi.co/api/v2/pokemon/1/encounters",
    moves: [
      {
        move: {
          name: "razor-wind",
          url: "https://pokeapi.co/api/v2/move/13/",
        },
        version_group_details: [
          {
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "red-blue",
              url: "https://pokeapi.co/api/v2/version-group/1/",
            },
            level_learned_at: 16,
          },
        ],
      },
    ],
    past_types: [],
    sprites: {
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
      front_shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png",
      back_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
      back_shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png",
    },
    cries: {
      latest: "https://pokeapi.co/api/v2/pokemon/1/cries",
      legacy: "https://pokeapi.co/api/v2/pokemon/1/cries",
    },
    species: {
      name: "bulbasaur",
      url: "https://pokeapi.co/api/v2/pokemon-species/1/",
    },
    stats: [
      {
        stat: {
          name: "hp",
          url: "https://pokeapi.co/api/v2/stat/1/",
        },
        effort: 0,
        base_stat: 45,
      },
    ],
    types: [
      {
        slot: 1,
        type: {
          name: "grass",
          url: "https://pokeapi.co/api/v2/type/12/",
        },
      },
      {
        slot: 2,
        type: {
          name: "poison",
          url: "https://pokeapi.co/api/v2/type/4/",
        },
      },
    ],
  },
  {
    id: 4,
    name: "Charmander",
    base_experience: 62,
    height: 6,
    is_default: true,
    order: 5,
    weight: 85,
    abilities: [
      {
        is_hidden: false,
        slot: 1,
        ability: {
          name: "Blaze",
          url: "https://pokeapi.co/api/v2/ability/66/",
        },
      },
    ],
    forms: [
      {
        name: "charmander",
        url: "https://pokeapi.co/api/v2/pokemon-form/4/",
      },
    ],
    game_indices: [
      {
        game_index: 4,
        version: {
          name: "red",
          url: "https://pokeapi.co/api/v2/version/1/",
        },
      },
    ],
    held_items: [
      {
        item: {
          name: "Fire Stone",
          url: "https://pokeapi.co/api/v2/item/92/",
        },
        version_details: [
          {
            version: {
              name: "red",
              url: "https://pokeapi.co/api/v2/version/1/",
            },
            rarity: 50,
          },
        ],
      },
    ],
    location_area_encounters: "https://pokeapi.co/api/v2/pokemon/4/encounters",
    moves: [
      {
        move: {
          name: "Scratch",
          url: "https://pokeapi.co/api/v2/move/10/",
        },
        version_group_details: [
          {
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "red-blue",
              url: "https://pokeapi.co/api/v2/version-group/1/",
            },
            level_learned_at: 16,
          },
        ],
      },
    ],
    past_types: [],
    sprites: {
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
      front_shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/4.png",
      back_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/4.png",
      back_shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/4.png",
    },
    cries: {
      latest: "https://pokeapi.co/api/v2/pokemon/4/cries",
      legacy: "https://pokeapi.co/api/v2/pokemon/4/cries",
    },
    species: {
      name: "charmander",
      url: "https://pokeapi.co/api/v2/pokemon-species/4/",
    },
    stats: [
      {
        stat: {
          name: "hp",
          url: "https://pokeapi.co/api/v2/stat/1/",
        },
        effort: 0,
        base_stat: 39,
      },
    ],
    types: [
      {
        slot: 1,
        type: {
          name: "Fire",
          url: "https://pokeapi.co/api/v2/type/10/",
        },
      },
    ],
  },
];
