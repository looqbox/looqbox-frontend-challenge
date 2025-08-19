import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import { store } from "../../store";
import Home from "../Home";

describe("Home", () => {
  it("renderiza hero", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Provider>,
    );
    expect(screen.getByText(/Inteligência para sua Pokédex/i)).toBeInTheDocument();
  });
});
