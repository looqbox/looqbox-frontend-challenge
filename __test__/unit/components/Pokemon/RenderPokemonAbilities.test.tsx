import React from "react";
import { render, screen } from "@testing-library/react";

import { mockedPokemons } from "./mocks/mockedPokemons";
import RenderPokemonAbilities from "./../../../../src/components/Pokemon/RenderPokemonAbilities";

describe("RenderPokemonMoves", () => {
  it("renders the correct number of abilities", () => {
    render(<RenderPokemonAbilities pokemon={mockedPokemons[0]} />);
    const abilitiesItems = screen.getAllByRole("listitem");
    expect(abilitiesItems).toHaveLength(mockedPokemons[0].abilities.length);
  });

  it("renders the correct ability names", () => {
    render(<RenderPokemonAbilities pokemon={mockedPokemons[0]} />);
    mockedPokemons[0].abilities.forEach((abilitie) => {
      expect(screen.getByText(abilitie.ability.name)).toBeInTheDocument();
    });
  });
});
