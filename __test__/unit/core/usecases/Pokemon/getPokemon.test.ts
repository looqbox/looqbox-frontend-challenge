// __test__/getPokemon.test.ts
import axios from "axios";
import getPokemon from "../../../../../src/core/usecases/Pokemons/getPokemon";
import { vi } from "vitest";
import { mockedPokemons } from "../../../components/Pokemon/mocks/mockedPokemons";

vi.mock("axios", () => ({
  default: { get: vi.fn(() => Promise.resolve({ data: mockedPokemons[0] })) },
}));

describe("getPokemon", () => {
  it("should fetch a pokemon successfully", async () => {
    const mockData = mockedPokemons[0];

    const pokemon = await getPokemon("pikachu");

    expect(pokemon).toEqual(mockData);
    expect(axios.get).toHaveBeenCalledWith(
      "https://pokeapi.co/api/v2/pokemon/pikachu"
    );
  });
});
