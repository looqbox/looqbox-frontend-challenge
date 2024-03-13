import "@testing-library/jest-dom";
import { fireEvent, render, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import configureMockStore, { MockStoreEnhanced } from "redux-mock-store";
import { BrowserRouter, Router } from "react-router-dom";
import { MemoryHistory, createMemoryHistory } from "history";

import HomePage from "../views/Home";
import { Store, UnknownAction } from "@reduxjs/toolkit";

const mockStore = configureMockStore();
const pokemonNameToTest = "bulbasaur";

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation((query: object) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

describe("HomePage component", () => {
  let store:
    | Store<unknown, UnknownAction, unknown>
    | MockStoreEnhanced<unknown, object>;

  beforeEach(() => {
    store = mockStore({
      pokemon: {
        pokemonList: [],
        loading: false,
        error: null,
      },
    });
  });

  test("should render Home correctly", () => {
    const { getByPlaceholderText } = render(
      <Provider store={store}>
        <BrowserRouter>
          <HomePage />
        </BrowserRouter>
      </Provider>,
    );

    expect(getByPlaceholderText("Search...")).toBeInTheDocument();
  });

  test("should redirect to details page when click on the card", async () => {
    const history: MemoryHistory = createMemoryHistory({
      initialEntries: ["/"],
    });
    const { getByTestId } = render(
      <Provider store={store}>
        <Router location={history.location} navigator={history}>
          <HomePage />
        </Router>
      </Provider>,
    );

    await waitFor(() => {
      expect(getByTestId(`card-link-${pokemonNameToTest}`)).toBeInTheDocument();
    });

    const button = getByTestId(`card-link-${pokemonNameToTest}`);
    fireEvent.click(button, { button: 0 });

    await waitFor(() => {
      expect(history.location.pathname).toBe(`/details/${pokemonNameToTest}`);
    });
  });

  test("should redirect to details on search", async () => {
    const history: MemoryHistory = createMemoryHistory({
      initialEntries: ["/"],
    });
    const { getByTestId, getByPlaceholderText } = render(
      <Provider store={store}>
        <Router location={history.location} navigator={history}>
          <HomePage />
        </Router>
      </Provider>,
    );

    await waitFor(() => {
      expect(getByTestId(`card-link-${pokemonNameToTest}`)).toBeInTheDocument();
    });

    const searchInput = getByPlaceholderText("Search...");
    fireEvent.change(searchInput, { target: { value: pokemonNameToTest } });
    fireEvent.keyDown(searchInput, { key: "Enter", code: 13, charCode: 13 });

    await waitFor(() => {
      expect(history.location.pathname).toBe(`/details/${pokemonNameToTest}`);
    });
  });
});
