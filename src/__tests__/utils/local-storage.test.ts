import {
  getLocalStorage,
  setLocalStorage,
  removeLocalStorage,
} from "@/core/utils/local-storage";
import { beforeEach, describe, expect, it } from "vitest";

describe("local-storage utils", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("should set and get value", () => {
    setLocalStorage("theme", "dark");
    expect(getLocalStorage("theme")).toBe("dark");
  });

  it("should return null if not found", () => {
    expect(getLocalStorage("missing")).toBeNull();
  });

  it("should remove value", () => {
    setLocalStorage("theme", "light");
    expect(removeLocalStorage("theme")).toBe(true);
    expect(getLocalStorage("theme")).toBeNull();
  });
});
