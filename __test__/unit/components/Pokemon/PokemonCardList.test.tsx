import React from "react";
import { render, screen } from "@testing-library/react";
import PokemonCardList from "./../../../../src/components/Pokemon/PokemonCardList";
import { describe, expect, it } from "vitest";
import { mockedPokemons } from "./mocks/mockedPokemons";
import { BrowserRouter } from "react-router-dom";

describe("PokemonCardList", () => {
  it("should render a list of Pokemon cards", () => {
    render(
      <BrowserRouter>
        <PokemonCardList pokemons={mockedPokemons || []} />
      </BrowserRouter>
    );

    const pokemonCards = screen.getAllByTestId("pokemon-card");

    expect(pokemonCards.length).toBe(mockedPokemons.length);

    mockedPokemons.forEach((pokemon) => {
      const pokemonCard = screen.getByText(pokemon.name);
      expect(pokemonCard).toBeInTheDocument();
    });
  });
});
