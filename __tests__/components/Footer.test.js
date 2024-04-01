import React from "react";
import { render } from "@testing-library/react";
import CustomFooter from "../../src/components/Footer";

describe("<Footer />", () => {
  it("should have a link to developer's Github profile", async () => {
    const { container } = render(<CustomFooter />);

    const link = container.querySelector("a");

    expect(link.href).toEqual("https://github.com/roquiles");
  });
});
