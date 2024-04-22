import React from "react";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import PokemonCard from "./../../../../src/components/Pokemon/PokemonCard";
import { BrowserRouter } from "react-router-dom";

describe("PokemonCard", () => {
  it("should render pokemon card with correct information", () => {
    const mockPokemon = {
      name: "pikachu",
      image: "https://example.com/pikachu.png",
      types: [
        {
          slot: 1,
          type: {
            name: "Electric",
            url: "https://example.com/api/type/electric",
          },
        },
      ],
    };

    render(
      <BrowserRouter>
        <PokemonCard {...mockPokemon} />
      </BrowserRouter>
    );

    const nameElement = screen.getByText(/Pikachu/i);
    const pokemonType = screen.getByText(/Electric/i);
    const image = screen.getByRole("img");

    expect(nameElement).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "https://example.com/pikachu.png");
    expect(pokemonType).toBeInTheDocument();
  });

  it("should redirect to pokemon info page when clicked", async () => {
    const mockPokemon = {
      name: "pikachu",
      image: "https://example.com/pikachu.png",
      types: [
        {
          slot: 1,
          type: {
            name: "Electric",
            url: "https://example.com/api/type/electric",
          },
        },
      ],
    };

    render(
      <BrowserRouter>
        <PokemonCard {...mockPokemon} />
      </BrowserRouter>
    );

    const pokemonCard = screen.getByRole("link");
    fireEvent.click(pokemonCard);

    expect(window.location.pathname).toBe("/pokemons/pikachu");
  });
});
