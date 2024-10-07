import { render, screen, waitFor } from "@testing-library/react";
import { describe, it, vi } from "vitest";
import { PokemonInfo } from "../components/PokemonInfo";
import { getPokemonDetails } from "@/api/get-pokemon-details";
import { fetchPokemonAbility } from "@/api/fetch-pokemon-abilities";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

vi.mock("@/api/get-pokemon-details", () => ({
  getPokemonDetails: vi.fn(),
}));
vi.mock("@/api/fetch-pokemon-abilities", () => ({
  fetchPokemonAbility: vi.fn(),
}));

const queryClient = new QueryClient();

describe("PokemonInfo Component", () => {
  const defaultProps = {
    isOpen: true,
    pokemonId: 1,
    pokemonName: "Bulbasaur",
    close: vi.fn(),
  };

  const mockPokemonDetails = {
    sprites: {
      front_default: "front_image_url",
      back_default: "back_image_url",
    },
    height: 70,
    weight: 69,
    base_experience: 64,
    types: [{ type: { name: "grass" } }],
    abilities: [{ ability: { name: "overgrow" } }],
    stats: [
      { base_stat: 45, stat: { name: "hp" } },
      { base_stat: 49, stat: { name: "attack" } },
    ],
  };

  const mockAbilityDetails = {
    id: 1,
    name: "overgrow",
    effect_entries: [
      {},
      { effect: "Powers up Grass-type moves when the Pokémon's HP is low." },
    ],
  };

  it("should render correctly when isOpen is true", () => {
    render(
      <QueryClientProvider client={queryClient}>
        <PokemonInfo {...defaultProps} />
      </QueryClientProvider>
    );

    expect(screen.getByRole("dialog")).toBeInTheDocument();
    expect(screen.getByText("Bulbasaur")).toBeInTheDocument();
  });

  it("should show loading skeletons while data is being fetched", async () => {
    getPokemonDetails.mockResolvedValueOnce(null);

    render(
      <QueryClientProvider client={queryClient}>
        <PokemonInfo {...defaultProps} />
      </QueryClientProvider>
    );

    expect(screen.getByText("Bulbasaur")).toBeInTheDocument();
    expect(screen.getByRole("img")).toBeInTheDocument();
    expect(screen.getByText(/Height/i)).toBeInTheDocument();
    expect(screen.getByText(/Weight/i)).toBeInTheDocument();
  });

  it("should display correct Pokémon details when data is fetched", async () => {
    getPokemonDetails.mockResolvedValueOnce(mockPokemonDetails);

    render(
      <QueryClientProvider client={queryClient}>
        <PokemonInfo {...defaultProps} />
      </QueryClientProvider>
    );

    await waitFor(() => {
      expect(
        screen.getAllByAltText("Front default image")[0]
      ).toBeInTheDocument();
      expect(screen.getByText("7 m.")).toBeInTheDocument();
      expect(screen.getByText("6.9 kg")).toBeInTheDocument();
      expect(screen.getByText("64")).toBeInTheDocument();
    });
  });

  it("should fetch and display abilities correctly", async () => {
    getPokemonDetails.mockResolvedValueOnce(mockPokemonDetails);
    fetchPokemonAbility.mockResolvedValueOnce(mockAbilityDetails);

    render(
      <QueryClientProvider client={queryClient}>
        <PokemonInfo {...defaultProps} />
      </QueryClientProvider>
    );

    await waitFor(() => {
      expect(screen.getByText("overgrow")).toBeInTheDocument();
      expect(
        screen.getByText(/Powers up Grass-type moves/i)
      ).toBeInTheDocument();
    });
  });
});
