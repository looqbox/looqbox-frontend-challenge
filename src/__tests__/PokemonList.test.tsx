import "@testing-library/jest-dom";
import { screen } from "@testing-library/react";
import PokemonList from "@/components/PokemonList";
import { describe, expect, it } from "vitest";
import { PokeAPIPokemon } from "@/@types/Pokemon";
import { renderWithProviders } from "@/utils/utils-for-tests";

const pokemonMock = {
  abilities: [
    {
      ability: {
        name: "overgrow",
        url: "https://pokeapi.co/api/v2/ability/65/",
      },
      is_hidden: false,
      slot: 1,
    },
    {
      ability: {
        name: "chlorophyll",
        url: "https://pokeapi.co/api/v2/ability/34/",
      },
      is_hidden: true,
      slot: 3,
    },
  ],
  base_experience: 263,
  height: 20,
  id: 3,
  is_default: true,
  name: "venusaur",
  order: 3,
  past_abilities: [],
  past_types: [],
  sprites: {
    front_default:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
  },
  stats: [
    {
      base_stat: 80,
      effort: 0,
      stat: {
        name: "hp",
        url: "https://pokeapi.co/api/v2/stat/1/",
      },
    },
    {
      base_stat: 82,
      effort: 0,
      stat: {
        name: "attack",
        url: "https://pokeapi.co/api/v2/stat/2/",
      },
    },
    {
      base_stat: 83,
      effort: 0,
      stat: {
        name: "defense",
        url: "https://pokeapi.co/api/v2/stat/3/",
      },
    },
    {
      base_stat: 100,
      effort: 2,
      stat: {
        name: "special-attack",
        url: "https://pokeapi.co/api/v2/stat/4/",
      },
    },
    {
      base_stat: 100,
      effort: 1,
      stat: {
        name: "special-defense",
        url: "https://pokeapi.co/api/v2/stat/5/",
      },
    },
    {
      base_stat: 80,
      effort: 0,
      stat: {
        name: "speed",
        url: "https://pokeapi.co/api/v2/stat/6/",
      },
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
  weight: 1000,
};

describe("PokemonCard Component", () => {
  it("should render with corrent infos", () => {
    const { store } = renderWithProviders(<PokemonList />, {
      preloadedState: {
        pokemons: {
          list: {
            items: [pokemonMock as unknown as PokeAPIPokemon],
            status: "idle",
            filter: "",
            next: "",
            error: "",
          },
        },
      },
    });
    screen.logTestingPlaygroundURL();
    expect(screen.getByText("VENUSAUR")).toBeInTheDocument();
    expect(screen.getByText("#003")).toBeInTheDocument();
    expect(screen.getByText("GRASS")).toBeInTheDocument();
    expect(screen.getByText("POISON")).toBeInTheDocument();
    expect(screen.getByText("You have seen it all 🤐")).toBeInTheDocument();
  });
});
