import { getTypeColor } from "../../src/utils";

describe("getTypeColor", () => {
  it("should always return a color string", () => {
    expect(getTypeColor("electric")).toBe("#FFC100");
    expect(getTypeColor(1)).toBe("#FFF");
  });
});
