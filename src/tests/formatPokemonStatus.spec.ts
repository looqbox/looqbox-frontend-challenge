import { formatPokemonStatus } from "../utils/formatPokemonStatus";

describe("Format pokemon status", () => {
  const mock = [
    "hp",
    "attack",
    "defense",
    "special-attack",
    "special-defense",
    "speed",
  ];

  it("should be able to return a pokemon status formatted", () => {
    const result = mock.map((status) => formatPokemonStatus(status));

    const expected = [
      "HP",
      "Ataque",
      "Defesa",
      "At. especial",
      "Def. especial",
      "Velocidade",
    ];

    expect(result).toEqual(expected);
  });
});
