import React from "react";
import { vi } from "vitest";
import "@testing-library/jest-dom";
import { render, fireEvent, screen } from "@testing-library/react";
import SearchBar from "./../../../src/components/SearchBar";

describe("SearchBar Component", () => {
  const mockSubmitSearch = vi.fn();

  beforeEach(() => {
    render(
      <SearchBar
        onSubmitSearch={mockSubmitSearch}
        placeholder="Buscar Pokémon"
      />
    );
  });

  it("should render the search bar", () => {
    expect(screen.getByPlaceholderText("Buscar Pokémon")).toBeInTheDocument();
  });

  it("should update the input value on change", () => {
    const inputElement = screen.getByPlaceholderText(
      "Buscar Pokémon"
    ) as HTMLInputElement;
    fireEvent.change(inputElement, { target: { value: "Pikachu" } });
    expect(inputElement.value).toBe("Pikachu");
  });

  it("should display options based on search", async () => {
    fireEvent.change(screen.getByRole("combobox"), {
      target: { value: "Pikachu" },
    });
    const items = screen.getAllByText("Pikachu");
    expect(items.length).toBeGreaterThan(0);
  });
});
