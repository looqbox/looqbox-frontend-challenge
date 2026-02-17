import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, waitFor } from "../test/test-utils";
import PokemonCard from "./PokemonCard";
import * as pokemonApi from "../services/pokemonApi";

vi.mock("../services/pokemonApi.ts");

const mockPokemon = {
  id: 25,
  name: "pikachu",
  height: 4,
  weight: 60,
  base_experience: 112,
  sprites: {
    front_default: "https://example.com/pikachu.png",
    other: {
      "official-artwork": { front_default: "https://example.com/artwork.png" },
      dream_world: { front_default: null },
    },
  },
  stats: [],
  types: [{ type: { name: "electric" } }],
  abilities: [],
};

describe("PokemonCard", () => {
  beforeEach(() => {
    vi.mocked(pokemonApi.fetchPokemon).mockResolvedValue(mockPokemon);
  });

  it("mostra card durante loading", () => {
    render(<PokemonCard name="pikachu" />);
    expect(document.querySelector(".ant-spin")).toBeInTheDocument();
  });

  it("renderiza o Pokémon após carregar", async () => {
    render(<PokemonCard name="pikachu" />);
    await waitFor(() => {
      expect(screen.getByText("pikachu")).toBeInTheDocument();
    });
    expect(screen.getByText("#025")).toBeInTheDocument();
  });

  it("chama fetchPokemon com o nome correto", async () => {
    vi.mocked(pokemonApi.fetchPokemon).mockResolvedValue({
      ...mockPokemon,
      name: "bulbasaur",
      id: 1,
    });
    render(<PokemonCard name="bulbasaur" />);
    await waitFor(() => {
      expect(pokemonApi.fetchPokemon).toHaveBeenCalledWith("bulbasaur");
    });
  });
});
