import React from "react";
import "../../__mocks__/matchMedia";
import { MemoryRouter } from "react-router-dom";
import renderWithProviders from "../../src/utils/test-utils";
import PokemonsList from "../../src/components/PokemonsList";

describe("<PokemonsList />", () => {
  it("should display a list of N pokemons links when N pokemon's are fetched", () => {
    const { container } = renderWithProviders(
      <MemoryRouter>
        <PokemonsList />
      </MemoryRouter>,
    );

    const links = container.querySelectorAll("a");

    expect(links).toHaveLength(2); // 2 pokemons are set in preloaded state;
  });
});
