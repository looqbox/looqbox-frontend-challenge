// __test__/getLocations.test.ts
import axios from "axios";
import { vi } from "vitest";
import { getLocations } from "./../../../../../src/core/usecases/Locations/getLocations";

vi.mock("axios", () => ({
  default: {
    get: vi.fn(() =>
      Promise.resolve({
        data: {
          results: [
            {
              name: "location-1",
              url: "https://pokeapi.co/api/v2/location/1/",
            },
          ],
        },
      })
    ),
  },
}));

describe("getLocations", () => {
  it("should fetch locations successfully", async () => {
    const locations = await getLocations("https://pokeapi.co/api/v2/location");

    expect(locations).toHaveProperty("results[0].name", "location-1");
    expect(axios.get).toHaveBeenCalledWith(
      "https://pokeapi.co/api/v2/location"
    );
  });
});
