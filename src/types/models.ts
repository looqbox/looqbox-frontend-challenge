export interface IPokemonType {
	slot: number,
	type: {
		name: string,
		url: string
	}
}

export interface ISprite {
  other: {
    'showdown': {
      front_default: string
    },
    'official-artwork': {
      front_default: string
    }
  }
}

export interface ISpecies {
  name: string,
  url: string
}

export interface IPokemonDescriptionText {
  flavor_text: string,
  language: {
    name: string
  }
}

export interface ISpeciesData {
  flavor_text_entries: IPokemonDescriptionText[]
}

export interface IBaseStat {
  name: string,
  url: number
}

export interface IBaseStats {
  base_stat: number,
  stat: IBaseStat
}


export interface IPokemon {
  id: number,
  name: string,
  sprites: ISprite,
  number: string,
  types: IPokemonType[],
  species: ISpecies,
  height: number,
  weight: number,
  stats: IBaseStats[]
}

export interface IPokemonList {
  name: string,
  url: string
}

// {
//   "abilities": [
//       {
//           "ability": {
//               "name": "swarm",
//               "url": "https://pokeapi.co/api/v2/ability/68/"
//           },
//           "is_hidden": false,
//           "slot": 1
//       },
//       {
//           "ability": {
//               "name": "sniper",
//               "url": "https://pokeapi.co/api/v2/ability/97/"
//           },
//           "is_hidden": true,
//           "slot": 3
//       }
//   ],
//   "height": 10,
//   "id": 15,
//   "moves": []
//   "name": "beedrill",
//   "species": {
//       "name": "beedrill",
//       "url": "https://pokeapi.co/api/v2/pokemon-species/15/"
//   },
//   "sprites": {
//       "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/15.png",
//       "back_female": null,
//       "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/15.png",
//       "back_shiny_female": null,
//       "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png",
//       "front_female": null,
//       "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/15.png",
//       "front_shiny_female": null,
//       "other": {
//           "dream_world": {
//               "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/15.svg",
//               "front_female": null
//           },
//           "home": {
//               "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/15.png",
//               "front_female": null,
//               "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/15.png",
//               "front_shiny_female": null
//           },
//           "official-artwork": {
//               "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/15.png",
//               "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/15.png"
//           },
//           "showdown": {
//               "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/back/15.gif",
//               "back_female": null,
//               "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/back/shiny/15.gif",
//               "back_shiny_female": null,
//               "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/15.gif",
//               "front_female": null,
//               "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/15.gif",
//               "front_shiny_female": null
//           }
//       },
//       "versions": {
//           "generation-i": {
//               "red-blue": {
//                   "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/15.png",
//                   "back_gray": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/gray/15.png",
//                   "back_transparent": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/transparent/back/15.png",
//                   "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/15.png",
//                   "front_gray": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/gray/15.png",
//                   "front_transparent": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/transparent/15.png"
//               },
//               "yellow": {
//                   "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/15.png",
//                   "back_gray": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/gray/15.png",
//                   "back_transparent": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/transparent/back/15.png",
//                   "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/15.png",
//                   "front_gray": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/gray/15.png",
//                   "front_transparent": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/transparent/15.png"
//               }
//           },
//           "generation-ii": {
//               "crystal": {
//                   "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/15.png",
//                   "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/shiny/15.png",
//                   "back_shiny_transparent": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/transparent/back/shiny/15.png",
//                   "back_transparent": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/transparent/back/15.png",
//                   "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/15.png",
//                   "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/shiny/15.png",
//                   "front_shiny_transparent": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/transparent/shiny/15.png",
//                   "front_transparent": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/transparent/15.png"
//               },
//               "gold": {
//                   "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/15.png",
//                   "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/shiny/15.png",
//                   "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/15.png",
//                   "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/shiny/15.png",
//                   "front_transparent": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/transparent/15.png"
//               },
//               "silver": {
//                   "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/15.png",
//                   "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/shiny/15.png",
//                   "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/15.png",
//                   "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/shiny/15.png",
//                   "front_transparent": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/transparent/15.png"
//               }
//           },
//           "generation-iii": {
//               "emerald": {
//                   "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/15.png",
//                   "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/shiny/15.png"
//               },
//               "firered-leafgreen": {
//                   "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/15.png",
//                   "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/shiny/15.png",
//                   "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/15.png",
//                   "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/shiny/15.png"
//               },
//               "ruby-sapphire": {
//                   "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/15.png",
//                   "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/shiny/15.png",
//                   "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/15.png",
//                   "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/shiny/15.png"
//               }
//           },
//           "generation-iv": {
//               "diamond-pearl": {
//                   "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/15.png",
//                   "back_female": null,
//                   "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/shiny/15.png",
//                   "back_shiny_female": null,
//                   "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/15.png",
//                   "front_female": null,
//                   "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/shiny/15.png",
//                   "front_shiny_female": null
//               },
//               "heartgold-soulsilver": {
//                   "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/15.png",
//                   "back_female": null,
//                   "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/shiny/15.png",
//                   "back_shiny_female": null,
//                   "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/15.png",
//                   "front_female": null,
//                   "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/shiny/15.png",
//                   "front_shiny_female": null
//               },
//               "platinum": {
//                   "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/15.png",
//                   "back_female": null,
//                   "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/shiny/15.png",
//                   "back_shiny_female": null,
//                   "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/15.png",
//                   "front_female": null,
//                   "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/shiny/15.png",
//                   "front_shiny_female": null
//               }
//           },
//           "generation-v": {
//               "black-white": {
//                   "animated": {
//                       "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/15.gif",
//                       "back_female": null,
//                       "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/shiny/15.gif",
//                       "back_shiny_female": null,
//                       "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/15.gif",
//                       "front_female": null,
//                       "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/15.gif",
//                       "front_shiny_female": null
//                   },
//                   "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/15.png",
//                   "back_female": null,
//                   "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/shiny/15.png",
//                   "back_shiny_female": null,
//                   "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/15.png",
//                   "front_female": null,
//                   "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/shiny/15.png",
//                   "front_shiny_female": null
//               }
//           },
//           "generation-vi": {
//               "omegaruby-alphasapphire": {
//                   "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/15.png",
//                   "front_female": null,
//                   "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/shiny/15.png",
//                   "front_shiny_female": null
//               },
//               "x-y": {
//                   "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/15.png",
//                   "front_female": null,
//                   "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/shiny/15.png",
//                   "front_shiny_female": null
//               }
//           },
//           "generation-vii": {
//               "icons": {
//                   "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/15.png",
//                   "front_female": null
//               },
//               "ultra-sun-ultra-moon": {
//                   "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/15.png",
//                   "front_female": null,
//                   "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/shiny/15.png",
//                   "front_shiny_female": null
//               }
//           },
//           "generation-viii": {
//               "icons": {
//                   "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/icons/15.png",
//                   "front_female": null
//               }
//           }
//       }
//   },
//   "stats": [
//       {
//           "base_stat": 65,
//           "effort": 0,
//           "stat": {
//               "name": "hp",
//               "url": "https://pokeapi.co/api/v2/stat/1/"
//           }
//       },
//       {
//           "base_stat": 90,
//           "effort": 2,
//           "stat": {
//               "name": "attack",
//               "url": "https://pokeapi.co/api/v2/stat/2/"
//           }
//       },
//       {
//           "base_stat": 40,
//           "effort": 0,
//           "stat": {
//               "name": "defense",
//               "url": "https://pokeapi.co/api/v2/stat/3/"
//           }
//       },
//       {
//           "base_stat": 45,
//           "effort": 0,
//           "stat": {
//               "name": "special-attack",
//               "url": "https://pokeapi.co/api/v2/stat/4/"
//           }
//       },
//       {
//           "base_stat": 80,
//           "effort": 1,
//           "stat": {
//               "name": "special-defense",
//               "url": "https://pokeapi.co/api/v2/stat/5/"
//           }
//       },
//       {
//           "base_stat": 75,
//           "effort": 0,
//           "stat": {
//               "name": "speed",
//               "url": "https://pokeapi.co/api/v2/stat/6/"
//           }
//       }
//   ],
//   "types": [
//       {
//           "slot": 1,
//           "type": {
//               "name": "bug",
//               "url": "https://pokeapi.co/api/v2/type/7/"
//           }
//       },
//       {
//           "slot": 2,
//           "type": {
//               "name": "poison",
//               "url": "https://pokeapi.co/api/v2/type/4/"
//           }
//       }
//   ],
//   "weight": 295
// }