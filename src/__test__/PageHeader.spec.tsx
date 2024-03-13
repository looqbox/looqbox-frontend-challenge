import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import PageHeader from "../components/PageHeader";

test("renders logo in App component", () => {
  render(<PageHeader />, { wrapper: BrowserRouter });
  const image = screen.getByAltText("Pokeball Image");
  expect(image).toBeInTheDocument();
});
