import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { PokemonCard } from "../components/PokemonCard";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/query-client";

describe("Pokemon card tests", () => {
  it("Should display correct name on card", () => {
    const wrapper = render(
      <QueryClientProvider client={queryClient}>
        <PokemonCard
          name="pokemon"
          url="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
        />
      </QueryClientProvider>
    );

    const card = wrapper.getByText("pokemon");

    expect(card).toBeVisible();
  });

  it("Should open drawer when click on pokemon card", async () => {
    const user = userEvent.setup();

    const wrapper = render(
      <QueryClientProvider client={queryClient}>
        <PokemonCard
          name="pokemon"
          url="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
        />
      </QueryClientProvider>
    );

    const card = wrapper.getByText("pokemon");

    await user.click(card);

    expect(screen.getByRole("dialog")).toBeInTheDocument();
  });
});
