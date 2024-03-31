import { capitalizeString } from "../../src/utils";

describe("capitalizeString", () => {
  it("Should return a capitalized string", () => {
    const randomText = "my name is";

    expect(capitalizeString(randomText)).toBe("My name is");
  });
});
