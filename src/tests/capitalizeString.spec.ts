import { capitalizeString } from "../utils/capitalizeString";

describe("Capitalize string", () => {
  const mock = "string-test";

  it("should be able to return a capitalized string", () => {
    const result = capitalizeString(mock);

    const expected = "String-test";

    expect(result).toEqual(expected);
  });
});
