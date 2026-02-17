import { describe, it, expect, vi, beforeEach } from "vitest";
import pokemonReducer, {
  loadPokemonList,
  searchPokemon,
  clearSearch,
  setCurrentPage,
} from "./pokemonSlice";

vi.mock("../services/pokemonApi.ts");

const mockPokemonListResponse = {
  count: 2,
  results: [{ name: "bulbasaur", url: "https://pokeapi.co/api/v2/pokemon/1/" }],
  next: "",
  previous: null,
};

const mockPokemon = {
  id: 1,
  name: "bulbasaur",
  height: 7,
  weight: 69,
  base_experience: 64,
  sprites: { front_default: null, other: {} },
  stats: [],
  types: [],
  abilities: [],
};

describe("pokemonSlice", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe("reducers", () => {
    it("clearSearch limpa searchResults e error", () => {
      const state = {
        pokemonList: [],
        searchResults: [mockPokemon],
        loading: false,
        error: "Some error",
        currentPage: 1,
        totalCount: 0,
      };

      const newState = pokemonReducer(state, clearSearch());

      expect(newState.searchResults).toEqual([]);
      expect(newState.error).toBeNull();
    });

    it("setCurrentPage atualiza a página atual", () => {
      const state = {
        pokemonList: [],
        searchResults: [],
        loading: false,
        error: null,
        currentPage: 1,
        totalCount: 100,
      };

      const newState = pokemonReducer(state, setCurrentPage(3));

      expect(newState.currentPage).toBe(3);
    });
  });

  describe("loadPokemonList", () => {
    it("fulfilled atualiza pokemonList e totalCount", () => {
      const action = {
        type: loadPokemonList.fulfilled.type,
        payload: mockPokemonListResponse,
      };

      const state = pokemonReducer(undefined, action);

      expect(state.pokemonList).toEqual(mockPokemonListResponse.results);
      expect(state.totalCount).toBe(2);
      expect(state.loading).toBe(false);
    });

    it("pending define loading como true", () => {
      const action = { type: loadPokemonList.pending.type };
      const state = pokemonReducer(undefined, action);
      expect(state.loading).toBe(true);
      expect(state.error).toBeNull();
    });

    it("rejected define error", () => {
      const action = {
        type: loadPokemonList.rejected.type,
        error: { message: "Network error" },
      };
      const state = pokemonReducer(undefined, action);
      expect(state.loading).toBe(false);
      expect(state.error).toBe("Network error");
    });
  });

  describe("searchPokemon", () => {
    it("fulfilled adiciona resultado em searchResults", () => {
      const action = {
        type: searchPokemon.fulfilled.type,
        payload: mockPokemon,
      };

      const state = pokemonReducer(undefined, action);

      expect(state.searchResults).toEqual([mockPokemon]);
      expect(state.loading).toBe(false);
    });

    it("rejected limpa searchResults e define error", () => {
      const stateWithResults = {
        pokemonList: [],
        searchResults: [mockPokemon],
        loading: true,
        error: null,
        currentPage: 1,
        totalCount: 0,
      };

      const action = {
        type: searchPokemon.rejected.type,
        error: { message: "Pokemon not found" },
      };

      const state = pokemonReducer(stateWithResults, action);

      expect(state.searchResults).toEqual([]);
      expect(state.error).toBe("Pokemon not found");
    });
  });
});
