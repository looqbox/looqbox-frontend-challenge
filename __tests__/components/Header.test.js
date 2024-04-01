import React from "react";
import { MemoryRouter } from "react-router-dom";
import CustomHeader from "../../src/components/Header";
import renderWithProviders from "../../src/utils/test-utils";

describe("<Header />", () => {
  it("should have a link to Home page", async () => {
    const { container } = renderWithProviders(
      <MemoryRouter>
        <CustomHeader />
      </MemoryRouter>,
    );

    const link = container.querySelector("a");

    expect(link).toBeInTheDocument();
  });
});
