import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { usePokemonsList } from "@/hooks/usePokemonsList";
import { PokemonsList, prettifyPokemonId } from "./PokemonsList";

// all functions exported there are mocked here
vi.mock("../../hooks/usePokemonsList");
vi.mock("@tanstack/react-router", () => ({
	useNavigate: vi.fn(() => vi.fn()),
}));

const pokemonsListMock = [
	{
		id: 25,
		name: "pikachu",
		types: ["eletric"],
		image:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
	},
	{
		id: 1,
		name: "bulbasaur",
		types: ["grass", "poison"],
		image:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
	},
];

const usePokemonsListMockWithError = {
	pokemons: [],
	loading: false,
	error: "Sou uma mensagem de erro",
	filterPokemonsByPokemonName: () => Promise.resolve(),
};

const usePokemonsListMockWithLoading = {
	pokemons: [],
	loading: true,
	error: null,
	filterPokemonsByPokemonName: () => Promise.resolve(),
};

const usePokemonsListMockPopulated = {
	pokemons: pokemonsListMock,
	loading: false,
	error: null,
	filterPokemonsByPokemonName: () => Promise.resolve(),
};

describe("PokemonsList", () => {
	beforeEach(() => {
		vi.clearAllMocks();
	});

	it("should show loading state at first", () => {
		vi.mocked(usePokemonsList).mockImplementation(
			() => usePokemonsListMockWithLoading,
		);

		render(<PokemonsList />);

		const loadingMessageElement = screen.getByText(/aguarde.../i);

		expect(loadingMessageElement).toBeInTheDocument();
	});

	it("should show an error message when any errors occurs", () => {
		vi.mocked(usePokemonsList).mockImplementation(
			() => usePokemonsListMockWithError,
		);

		render(<PokemonsList />);

		const errorMessageElement = screen.getByText(
			usePokemonsListMockWithError.error,
		);

		expect(errorMessageElement).toBeInTheDocument();
	});

	it("should show a list of preloaded pokemons", async () => {
		vi.mocked(usePokemonsList).mockImplementation(
			() => usePokemonsListMockPopulated,
		);

		render(<PokemonsList />);

		const pokemonCardsElements = await screen.findAllByTestId("pokemonCard");

		// accessibility
		expect(pokemonCardsElements[0]).toHaveAttribute("tabIndex", "0");
		expect(pokemonCardsElements[1]).toHaveAttribute("tabIndex", "0");
	});

	it("should show correct pokemon information", async () => {
		vi.mocked(usePokemonsList).mockImplementation(
			() => usePokemonsListMockPopulated,
		);

		const firstPokemonMock = pokemonsListMock[0];
		const secondPokemonMock = pokemonsListMock[1];

		render(<PokemonsList />);

		const firstPokemonNameElement = await screen.findByText(
			firstPokemonMock.name,
		);
		const firstPokemonIdElement = await screen.findByText(
			prettifyPokemonId(firstPokemonMock.id),
		);
		const firstPokemonTypeElement = await screen.findByText(
			firstPokemonMock.types[0],
		);
		const firstPokemonImageElement = await screen.findByAltText(
			`Front view of the Pokémon ${firstPokemonMock.name}`,
		);

		const secondPokemonNameElement = await screen.findByText(
			secondPokemonMock.name,
		);
		const secondPokemonIdElement = await screen.findByText(
			prettifyPokemonId(secondPokemonMock.id),
		);
		const secondPokemonTypeOneElement = await screen.findByText(
			secondPokemonMock.types[0],
		);
		const secondPokemonTypeTwoElement = await screen.findByText(
			secondPokemonMock.types[1],
		);
		const secondPokemonImageElement = await screen.findByAltText(
			`Front view of the Pokémon ${secondPokemonMock.name}`,
		);

		expect(firstPokemonNameElement).toBeVisible();
		expect(firstPokemonIdElement).toBeVisible();
		expect(firstPokemonTypeElement).toBeVisible();
		expect(firstPokemonImageElement).toBeVisible();
		expect(secondPokemonNameElement).toBeVisible();
		expect(secondPokemonIdElement).toBeVisible();
		expect(secondPokemonTypeOneElement).toBeVisible();
		expect(secondPokemonTypeTwoElement).toBeVisible();
		expect(secondPokemonImageElement).toBeVisible();
	});

	it.todo(
		"should open pokemon details page when selected one by the list",
		async () => {
			const user = userEvent.setup(); // setup simulated user
			const firstPokemon = pokemonsListMock[0];
			console.log(window.location.href);
			vi.mocked(usePokemonsList).mockImplementation(
				() => usePokemonsListMockPopulated,
			);

			// const useNavigateMock = vi
			// 	.mocked(useNavigate)
			// 	.mockImplementation(vi.fn());
			// useNavigateMock.mockImplementation(() => {
			// 	window.location.href = `${window.location.hostname}/details/${firstPokemon.name}`;
			// 	return vi.fn();
			// });

			render(<PokemonsList />);

			const firstPokemonElement = await screen.findByText("firstPokemon.name");

			await user.click(firstPokemonElement);

			// get the URL and verifies if it's on details first Pokemon's specific page
			// expect(window.location.href).toContain(firstPokemon.name);
			// expect(firstPokemonElement).toBeInTheDocument();
		},
	);
});
