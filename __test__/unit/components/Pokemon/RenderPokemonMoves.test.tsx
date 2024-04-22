import React from "react";
import { render, screen } from "@testing-library/react";
import RenderPokemonMoves from "./../../../../src/components/Pokemon/RenderPokemonMoves";
import { mockedPokemons } from "./mocks/mockedPokemons";

describe("RenderPokemonMoves", () => {
  it("renders the correct number of moves", () => {
    render(<RenderPokemonMoves pokemon={mockedPokemons[0]} />);
    const moveItems = screen.getAllByRole("listitem");
    expect(moveItems).toHaveLength(mockedPokemons[0].moves.length);
  });

  it("renders the correct move names", () => {
    render(<RenderPokemonMoves pokemon={mockedPokemons[0]} />);
    mockedPokemons[0].moves.forEach((move) => {
      expect(screen.getByText(move.move.name)).toBeInTheDocument();
    });
  });
});
