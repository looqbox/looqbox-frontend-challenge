import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, waitFor } from "../test/test-utils";
import PokemonDetails from "./PokemonDetails";
import * as pokemonApi from "../services/pokemonApi";

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useParams: () => ({ id: "25" }),
    useNavigate: () => vi.fn(),
  };
});

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
  stats: [
    { base_stat: 35, stat: { name: "hp" } },
    { base_stat: 55, stat: { name: "attack" } },
  ],
  types: [{ type: { name: "electric" } }],
  abilities: [
    { ability: { name: "static" }, is_hidden: false },
    { ability: { name: "lightning-rod" }, is_hidden: true },
  ],
};

const mockSpecies = {
  flavor_text_entries: [
    {
      flavor_text:
        "When several of these Pokémon gather, their electricity could build and cause lightning storms.",
      language: { name: "en" },
    },
  ],
  genera: [],
  evolutionChain: { url: "" },
};

describe("PokemonDetails", () => {
  beforeEach(() => {
    vi.mocked(pokemonApi.fetchPokemon).mockResolvedValue(mockPokemon);
    vi.mocked(pokemonApi.fetchPokemonSpecies).mockResolvedValue(mockSpecies);
  });

  it("renderiza loading inicialmente", () => {
    render(<PokemonDetails />);
    expect(screen.getByText("loading Pokemon details...")).toBeInTheDocument();
  });

  it("renderiza detalhes do Pokémon após carregar", async () => {
    render(<PokemonDetails />);
    await waitFor(() => {
      expect(screen.getByText("pikachu")).toBeInTheDocument();
    });
    expect(screen.getByText("#025")).toBeInTheDocument();
    expect(screen.getByText("0.4m")).toBeInTheDocument();
    expect(screen.getByText("6.0kg")).toBeInTheDocument();
  });
});
