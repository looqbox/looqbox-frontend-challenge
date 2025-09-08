import { capitalize } from "@/core/utils/capitalize";
import { describe, it, expect } from "vitest";

describe("capitalize", () => {
  it("should capitalize first letter", () => {
    expect(capitalize("pikachu")).toBe("Pikachu");
  });

  it("should return empty string unchanged", () => {
    expect(capitalize("")).toBe("");
  });

  it("should return undefined if input is undefined", () => {
    expect(capitalize(undefined)).toBeUndefined();
  });

  it("should return non-string unchanged", () => {
    // @ts-expect-error testing wrong type
    expect(capitalize(123)).toBe(123);
  });
});
