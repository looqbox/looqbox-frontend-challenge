import { getAttributesList } from "../../src/utils";

describe("getAttributesList", () => {
  it("should return an array of strings", () => {
    const attrOriginalArr = [
      {
        type: {
          name: "electric",
        },
      },
      {
        type: {
          name: "ghost",
        },
      },
      {
        type: {
          name: "ground",
        },
      },
    ];

    const expectedArr = ["electric", "ghost", "ground"];

    expect(getAttributesList(attrOriginalArr, "type")).toEqual(
      expect.arrayContaining(expectedArr),
    );
  });
});
