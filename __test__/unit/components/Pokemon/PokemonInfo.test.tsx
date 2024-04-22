import "@testing-library/jest-dom";
import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import PokemonInfo from "./../../../../src/components/Pokemon/PokemonInfo";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

describe("<PokemonInfo />", () => {
  let queryClient;
  beforeEach(() => {
    queryClient = new QueryClient();
  });
  it("should render the component", async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <PokemonInfo pokemonName="pikachu" />
      </QueryClientProvider>
    );

    await waitFor(() => screen.getByText("pikachu"));
  });

  it("should not render the component when pokemon name is not found", async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <PokemonInfo pokemonName="pik" />
      </QueryClientProvider>
    );

    await waitFor(() => expect(screen.queryByText("pik")).toBeNull());
  });
});
