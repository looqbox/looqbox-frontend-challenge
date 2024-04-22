import axios from "axios";
import { getPokemons } from "../../../../../src/core/usecases/Pokemons/getPokemons";
import { NamedAPIResource } from "../../../../../src/core/models/Pokemon";
import { mockedPokemons } from "../../../components/Pokemon/mocks/mockedPokemons";
import { vi } from "vitest";

vi.mock("axios", () => ({
  default: {
    get: vi.fn((url) => {
      if (url.includes("pikachu")) {
        return Promise.resolve({ data: mockedPokemons[0] });
      } else if (url.includes("bulbasaur")) {
        return Promise.resolve({ data: mockedPokemons[1] });
      } else if (url.includes("charmander")) {
        return Promise.resolve({ data: mockedPokemons[2] });
      }
      throw new Error("URL not mocked");
    }),
  },
}));

describe("getPokemons", () => {
  it("should fetch a pokemon successfully", async () => {
    const input: NamedAPIResource[] = [
      {
        name: "pikachu",
        url: "https://pokeapi.co/api/v2/pokemon/pikachu",
      },
      {
        name: "bulbasaur",
        url: "https://pokeapi.co/api/v2/pokemon/bulbasaur",
      },
      {
        name: "charmander",
        url: "https://pokeapi.co/api/v2/pokemon/charmander",
      },
    ];

    const pokemon = await getPokemons(input);

    console.log(pokemon);

    expect(pokemon).toEqual(mockedPokemons);
    expect(axios.get).toHaveBeenCalledWith(
      "https://pokeapi.co/api/v2/pokemon/pikachu"
    );
  });
});
