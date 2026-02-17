import { describe, it, expect } from "vitest";
import userEvent from "@testing-library/user-event";
import { render, screen } from "../test/test-utils";
import SearchBar from "./SearchBar";

describe("SearchBar", () => {
  it("renderiza o input de busca", () => {
    render(<SearchBar />);
    expect(
      screen.getByPlaceholderText("Search Pokémon by name or ID..."),
    ).toBeInTheDocument();
  });

  it("renderiza o botão de busca", () => {
    render(<SearchBar />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("atualiza o valor do input ao digitar", async () => {
    const user = userEvent.setup();
    render(<SearchBar />);
    const input = screen.getByPlaceholderText(
      "Search Pokémon by name or ID...",
    );
    await user.type(input, "pikachu");
    expect(input).toHaveValue("pikachu");
  });
});
