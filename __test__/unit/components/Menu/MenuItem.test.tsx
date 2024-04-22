import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import MenuItem from "./../../../../src/components/Menu/MenuItem";

describe("MenuItem", () => {
  it("should render the MenuItem with correct text and icon", () => {
    render(
      <MemoryRouter>
        <MenuItem url="/test" text="Test" icon={<div>Icon</div>} />
      </MemoryRouter>
    );

    expect(screen.getByText("Test")).toBeInTheDocument();
    expect(screen.getByText("Icon")).toBeInTheDocument();
  });

  it("should mark the MenuItem as active when the URL matches the current location", () => {
    render(
      <MemoryRouter initialEntries={["/test"]}>
        <MenuItem url="/test" text="Test" icon={<div>Icon</div>} />
      </MemoryRouter>
    );

    const menuItem = screen.getByText("Test").closest("li");
    expect(menuItem).toHaveClass("border-b-red-500");
  });

  it("should not mark the MenuItem as active when the URL does not match the current location", () => {
    render(
      <MemoryRouter initialEntries={["/other"]}>
        <MenuItem url="/test" text="Test" icon={<div>Icon</div>} />
      </MemoryRouter>
    );

    const menuItem = screen.getByText("Test").closest("li");
    expect(menuItem).not.toHaveClass("border-b-red-500");
  });
});
