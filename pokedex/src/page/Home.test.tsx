import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen } from "../test/test-utils";
import Home from "./Home";
import * as pokemonApi from "../services/pokemonApi";

vi.mock("../services/pokemonApi.ts");

const mockPokemonListResponse = {
  count: 2,
  results: [
    { name: "bulbasaur", url: "https://pokeapi.co/api/v2/pokemon/1/" },
    { name: "ivysaur", url: "https://pokeapi.co/api/v2/pokemon/2/" },
  ],
  next: "",
  previous: null,
};

describe("Home", () => {
  beforeEach(() => {
    vi.mocked(pokemonApi.fetchPokemonList).mockResolvedValue(
      mockPokemonListResponse,
    );
  });

  it("renderiza o título Pokédex", () => {
    render(<Home />);
    expect(screen.getByText("Pokedex")).toBeInTheDocument();
  });

  it("renderiza a SearchBar", () => {
    render(<Home />);
    expect(
      screen.getByPlaceholderText("Search Pokémon by name or ID..."),
    ).toBeInTheDocument();
  });
});
