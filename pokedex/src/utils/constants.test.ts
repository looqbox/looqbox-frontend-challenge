import { describe, it, expect } from "vitest";
import { getArtWork, typeColors, StatColors } from "./constants";
import type { Pokemon } from "../store/types.interfaces";

const createMockPokemon = (overrides: Partial<Pokemon> = {}): Pokemon =>
  ({
    id: 1,
    name: "bulbasaur",
    height: 7,
    weight: 69,
    base_experience: 64,
    sprites: {
      front_default: null,
      other: {
        "official-artwork": { front_default: null },
        dream_world: { front_default: null },
      },
    },
    stats: [],
    types: [],
    abilities: [],
    ...overrides,
  }) as Pokemon;

describe("getArtWork", () => {
  it("retorna URL do official-artwork quando disponível", () => {
    const pokemon = createMockPokemon({
      sprites: {
        front_default: null,
        other: {
          "official-artwork": { front_default: "https://artwork.com/1.png" },
          dream_world: { front_default: null },
        },
      },
    });
    expect(getArtWork(pokemon)).toBe("https://artwork.com/1.png");
  });

  it("retorna URL do dream_world quando official-artwork não existe", () => {
    const pokemon = createMockPokemon({
      sprites: {
        front_default: null,
        other: {
          dream_world: { front_default: "https://dream.com/1.png" },
        },
      },
    });
    expect(getArtWork(pokemon)).toBe("https://dream.com/1.png");
  });

  it("retorna front_default quando outras sprites não existem", () => {
    const pokemon = createMockPokemon({
      sprites: {
        front_default: "https://default.com/1.png",
        other: undefined,
      },
    });
    expect(getArtWork(pokemon)).toBe("https://default.com/1.png");
  });

  it("retorna /faultImg.svg quando nenhuma sprite existe", () => {
    const pokemon = createMockPokemon({
      sprites: {
        front_default: null,
        other: undefined,
      },
    });
    expect(getArtWork(pokemon)).toBe("/faultImg.svg");
  });
});

describe("typeColors", () => {
  it("contém todas as cores de tipo esperadas", () => {
    const expectedTypes = [
      "normal",
      "fire",
      "water",
      "electric",
      "grass",
      "ice",
      "fighting",
      "poison",
      "ground",
      "flying",
      "psychic",
      "bug",
      "rock",
      "ghost",
      "dragon",
      "dark",
      "steel",
      "fairy",
    ];
    expectedTypes.forEach((type) => {
      expect(typeColors[type]).toBeDefined();
    });
  });
});

describe("StatColors", () => {
  it("contém cores para todas as stats", () => {
    const expectedStats = [
      "hp",
      "attack",
      "defense",
      "special-attack",
      "special-defense",
      "speed",
    ];
    expectedStats.forEach((stat) => {
      expect(StatColors[stat]).toBeDefined();
    });
  });
});
