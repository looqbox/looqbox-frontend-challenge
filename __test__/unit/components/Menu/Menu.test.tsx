import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Menu from "./../../../../src/components/Menu/Menu";
import { MemoryRouter } from "react-router-dom";

describe("Menu", () => {
  it("should render correctly", () => {
    render(
      <MemoryRouter>
        <Menu />
      </MemoryRouter>
    );

    const menu = screen.getByTestId("menu");
    expect(menu).toBeInTheDocument();
  });
});
