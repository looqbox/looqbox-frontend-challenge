import { vi } from "vitest";
import { getPokemonsUrl } from "./../../../../../src/core/usecases/Pokemons/getPokemonsUrl";
import pokemonsUrl from "../../../../data/pokemon.json";
import axios from "axios";

vi.mock("axios", () => ({
  default: {
    get: vi.fn(() => {
      return Promise.resolve({ data: pokemonsUrl });
    }),
  },
}));

describe("getPokemonsUrl", () => {
  it("should fetch data from default URL when no URL is provided", async () => {
    const result = await getPokemonsUrl();

    expect(result).toEqual(pokemonsUrl);
  });

  it("should fetch data from provided URL", async () => {
    const url = "https://pokeapi.co/api/v2/pokemon?offset=20&limit=20";
    const axiosGetSpy = vi.spyOn(axios, "get");

    const result = await getPokemonsUrl(url);

    expect(axiosGetSpy).toHaveBeenCalledWith(url);
    expect(result).toEqual(pokemonsUrl);
  });
});
