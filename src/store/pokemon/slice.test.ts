import { describe, expect, it } from "vitest";
import reducer, {
  clearError,
  clearTypeFilter,
  setSearchValue,
} from "./slice";
import {
  fetchPokemonByType,
  fetchPokemonList,
  searchPokemonByName,
} from "./thunks";

describe("pokemon slice", () => {
  it("deve atualizar searchValue", () => {
    const state = reducer(undefined, setSearchValue("pikachu"));
    expect(state.searchValue).toBe("pikachu");
  });

  it("deve limpar filtro de tipo", () => {
    let state = reducer(undefined, fetchPokemonByType.pending("req-1", "fire"));
    state = reducer(
      state,
      fetchPokemonByType.fulfilled(
        [{ name: "charmander", url: "https://pokeapi.co/api/v2/pokemon/4/" }],
        "req-1",
        "fire"
      )
    );

    const next = reducer(state, clearTypeFilter());
    expect(next.selectedType).toBeNull();
    expect(next.typeList).toEqual([]);
  });

  it("deve limpar erro", () => {
    const withError = reducer(
      undefined,
      searchPokemonByName.rejected(new Error("boom"), "req-2", "pikachu", "erro custom")
    );

    const next = reducer(withError, clearError());
    expect(next.error).toBeNull();
  });

  it("deve salvar lista e total no fulfilled de fetchPokemonList", () => {
    const payload = {
      count: 1302,
      next: null,
      previous: null,
      results: [{ name: "bulbasaur", url: "https://pokeapi.co/api/v2/pokemon/1/" }],
    };

    const state = reducer(undefined, fetchPokemonList.fulfilled(payload, "req-3", { limit: 20, offset: 0 }));

    expect(state.loading).toBe(false);
    expect(state.total).toBe(1302);
    expect(state.list).toHaveLength(1);
    expect(state.list[0].name).toBe("bulbasaur");
  });

  it("deve marcar loading na busca pending", () => {
    const state = reducer(undefined, searchPokemonByName.pending("req-4", "pikachu"));
    expect(state.loading).toBe(true);
    expect(state.isSearching).toBe(true);
    expect(state.error).toBeNull();
  });
});
