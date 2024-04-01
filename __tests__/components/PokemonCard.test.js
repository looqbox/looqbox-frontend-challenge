import { render, getByText } from "@testing-library/react";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import PokemonCard from "../../src/components/PokemonCard";

const testPokemon = {
  name: "Tangela",
  id: 114,
};

describe("<PokemonCard />", () => {
  it("should display pokemon's name", () => {
    const { container } = render(
      <MemoryRouter>
        <PokemonCard character={testPokemon} />
      </MemoryRouter>,
    );

    const pokemonName = getByText(container, testPokemon.name);

    expect(pokemonName).toBeInTheDocument();
  });

  it("should display pokemon's id", () => {
    const { container } = render(
      <MemoryRouter>
        <PokemonCard character={testPokemon} />
      </MemoryRouter>,
    );

    const pokemonName = getByText(container, `#${testPokemon.id}`);

    expect(pokemonName).toBeInTheDocument();
  });

  it("should have a link to pokemon's details page", () => {
    const { container } = render(
      <MemoryRouter>
        <PokemonCard character={testPokemon} />
      </MemoryRouter>,
    );

    const link = container.querySelector("a");

    expect(link.href).toContain(`/${testPokemon.name}`);
  });
});
