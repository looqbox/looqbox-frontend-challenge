import { describe, expect, it, vi, beforeEach } from "vitest";
import { HttpError } from "../../api/http";
import { fetchPokemonByType, searchPokemonByName } from "./thunks";
import * as pokeapi from "../../services/pokeapi";

vi.mock("../../services/pokeapi", () => ({
  getPokemonByName: vi.fn(),
  getPokemonByType: vi.fn(),
  getPokemonList: vi.fn(),
}));

const mockedGetPokemonByName = vi.mocked(pokeapi.getPokemonByName);
const mockedGetPokemonByType = vi.mocked(pokeapi.getPokemonByType);

describe("pokemon thunks", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("searchPokemonByName deve retornar fulfilled em sucesso", async () => {
    mockedGetPokemonByName.mockResolvedValue({
      id: 25,
      name: "pikachu",
      height: 4,
      weight: 60,
      base_experience: 112,
      species: {
        name: "pikachu",
        url: "https://pokeapi.co/api/v2/pokemon-species/25/",
      },
      sprites: {
        front_default: "front.png",
        back_default: "back.png",
        other: { "official-artwork": { front_default: "official.png" } },
      },
      types: [{ type: { name: "electric" } }],
      abilities: [{ ability: { name: "static" } }],
      stats: [{ base_stat: 35, stat: { name: "hp" } }],
    });

    const action = await searchPokemonByName("pikachu")(vi.fn(), vi.fn(), undefined);

    expect(searchPokemonByName.fulfilled.match(action)).toBe(true);
    expect(mockedGetPokemonByName).toHaveBeenCalledWith("pikachu");
  });

  it("searchPokemonByName deve retornar mensagem amigavel no 404", async () => {
    mockedGetPokemonByName.mockRejectedValue(
      new HttpError(404, "HTTP 404: Not Found")
    );

    const action = await searchPokemonByName("xxxx")(vi.fn(), vi.fn(), undefined);

    expect(searchPokemonByName.rejected.match(action)).toBe(true);
    expect(action.payload).toBe("Pokémon not found");
  });

  it("searchPokemonByName deve retornar erro generico em falha nao-404", async () => {
    mockedGetPokemonByName.mockRejectedValue(new Error("Network error"));

    const action = await searchPokemonByName("pikachu")(vi.fn(), vi.fn(), undefined);

    expect(searchPokemonByName.rejected.match(action)).toBe(true);
    expect(action.payload).toBe("Error searching for Pokemon. Try again.");
  });

  it("fetchPokemonByType deve mapear payload para lista de pokemon", async () => {
    mockedGetPokemonByType.mockResolvedValue({
      pokemon: [
        {
          slot: 1,
          pokemon: {
            name: "charmander",
            url: "https://pokeapi.co/api/v2/pokemon/4/",
          },
        },
      ],
    });

    const action = await fetchPokemonByType("fire")(vi.fn(), vi.fn(), undefined);

    expect(fetchPokemonByType.fulfilled.match(action)).toBe(true);
    if (fetchPokemonByType.fulfilled.match(action)) {
      expect(action.payload).toEqual([
        { name: "charmander", url: "https://pokeapi.co/api/v2/pokemon/4/" },
      ]);
    }
    expect(mockedGetPokemonByType).toHaveBeenCalledWith("fire");
  });
});
