import { getIdFromUrl } from "@/features/utils/get-id-from-url";
import { describe, expect, it } from "vitest";

describe("getIdFromUrl", () => {
  it("should extract id from pokemon url", () => {
    expect(getIdFromUrl("https://pokeapi.co/api/v2/pokemon/25/")).toBe("25");
  });

  it("should extract id from ability url", () => {
    expect(getIdFromUrl("https://pokeapi.co/api/v2/ability/150/")).toBe("150");
  });

  it("should return empty string for invalid url", () => {
    expect(getIdFromUrl("invalid")).toBe("invalid");
  });
});
