import { describe, it, expect, vi, beforeEach } from "vitest";
import {
  fetchPokemonList,
  fetchPokemon,
  fetchPokemonSpecies,
} from "./pokemonApi";

describe("apiMon", () => {
  beforeEach(() => {
    vi.stubGlobal("fetch", vi.fn());
  });

  describe("fetchPokemonList", () => {
    it("faz requisição com offset e limit corretos", async () => {
      const mockResponse = {
        count: 1154,
        results: [],
        next: "",
        previous: null,
      };
      vi.mocked(fetch).mockResolvedValueOnce({
        ok: true,
        json: () => Promise.resolve(mockResponse),
      } as Response);

      const result = await fetchPokemonList(0, 20);

      expect(fetch).toHaveBeenCalledWith(
        "https://pokeapi.co/api/v2/pokemon?offset=0&limit=20",
      );
      expect(result).toEqual(mockResponse);
    });

    it("lança erro quando resposta não é ok", async () => {
      vi.mocked(fetch).mockResolvedValueOnce({ ok: false } as Response);

      await expect(fetchPokemonList(0, 20)).rejects.toThrow(
        "Failed to fetch Pokemon list",
      );
    });
  });

  describe("fetchPokemon", () => {
    it("faz requisição com nameOrId correto", async () => {
      const mockPokemon = { id: 1, name: "bulbasaur" };
      vi.mocked(fetch).mockResolvedValueOnce({
        ok: true,
        json: () => Promise.resolve(mockPokemon),
      } as Response);

      const result = await fetchPokemon("bulbasaur");

      expect(fetch).toHaveBeenCalledWith(
        "https://pokeapi.co/api/v2/pokemon/bulbasaur",
      );
      expect(result).toEqual(mockPokemon);
    });

    it("converte ID numérico para string na URL", async () => {
      vi.mocked(fetch).mockResolvedValueOnce({
        ok: true,
        json: () => Promise.resolve({ id: 1 }),
      } as Response);

      await fetchPokemon(1);

      expect(fetch).toHaveBeenCalledWith("https://pokeapi.co/api/v2/pokemon/1");
    });

    it("lança erro quando Pokémon não é encontrado", async () => {
      vi.mocked(fetch).mockResolvedValueOnce({ ok: false } as Response);

      await expect(fetchPokemon("invalid")).rejects.toThrow(
        "Pokemon invalid not found",
      );
    });
  });

  describe("fetchPokemonSpecies", () => {
    it("faz requisição correta para species", async () => {
      const mockSpecies = { flavor_text_entries: [] };
      vi.mocked(fetch).mockResolvedValueOnce({
        ok: true,
        json: () => Promise.resolve(mockSpecies),
      } as Response);

      const result = await fetchPokemonSpecies(1);

      expect(fetch).toHaveBeenCalledWith(
        "https://pokeapi.co/api/v2/pokemon-species/1",
      );
      expect(result).toEqual(mockSpecies);
    });

    it("lança erro quando falha ao buscar species", async () => {
      vi.mocked(fetch).mockResolvedValueOnce({ ok: false } as Response);

      await expect(fetchPokemonSpecies(1)).rejects.toThrow(
        "Failed to fetch species data",
      );
    });
  });
});
