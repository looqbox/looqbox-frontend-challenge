import { getStatsList } from "../../src/utils";

describe("getStatsList", () => {
  it("should return an array of stats objects", () => {
    const originalArr = [
      {
        base_stat: 50,
        stat: {
          name: "defense",
        },
      },
      {
        base_stat: 100,
        stat: {
          name: "hp",
        },
      },
    ];

    const statsArr = getStatsList(originalArr);

    expect(getStatsList(originalArr)).toHaveLength(originalArr.length);
    expect(statsArr[0]).toHaveProperty("name", "defense");
    expect(statsArr[0]).toHaveProperty("value", 50);
  });
});
