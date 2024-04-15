import { formatPokemonId } from "../utils/formatPokemonId";

describe("Format pokemon id", () => {
  const mock = [1, 10, 100];

  it("should be able to return a pokemon id formatted", () => {
    const result = mock.map((id) => formatPokemonId(id));

    const expected = ["#001", "#010", "#100"];

    expect(result).toEqual(expected);
  });
});
