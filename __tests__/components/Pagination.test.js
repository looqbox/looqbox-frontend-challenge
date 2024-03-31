import React from "react";
import "../../__mocks__/matchMedia";
import CustomPagination from "../../src/components/Pagination";
import renderWithProviders from "../../src/utils/test-utils";

describe("<Pagination />", () => {
  it("Should render correct number of buttons given a certain number of results", () => {
    const { container } = renderWithProviders(<CustomPagination />);

    const pagesButtons = container.querySelectorAll("a");

    expect(pagesButtons.length).toBe(4); // 80 results total / 20 results per page = 4 page buttons
  });
});
