import { describe, expect, test } from "vitest";
import PokemonSlice, { initialState } from "@/store/slices/pokemonSlice";

describe("tests for PokemonSlice", () => {
  test("initialize slice with initialValue", () => {
    const pokemonSlice = PokemonSlice(initialState, { type: "unknown" });
    expect(pokemonSlice).toBe(initialState);
  });
});
