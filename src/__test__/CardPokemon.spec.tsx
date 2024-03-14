import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import CardPokemon from "../components/CardPokemon";

describe("CardPokemon", () => {
  test("should render simple card correctly", () => {
    render(<CardPokemon name="pokemon" src="" linkTo="`/details/pokemon`" />, {
      wrapper: BrowserRouter,
    });
    expect(screen.getByText("pokemon")).toBeInTheDocument();
  });

  test("should render tags card correctly", () => {
    render(
      <CardPokemon
        name="pokemon"
        src=""
        tags={[{ type: { name: "grass", url: "" } }]}
      />,
      { wrapper: BrowserRouter },
    );
    expect(screen.getByText("pokemon")).toBeInTheDocument();
    expect(screen.getByText("grass")).toBeInTheDocument();
  });
});
