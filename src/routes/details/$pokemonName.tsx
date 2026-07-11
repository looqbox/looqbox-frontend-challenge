import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/details/$pokemonName")({
	component: PokemonDetailsByNamePage,
});

function PokemonDetailsByNamePage() {
	const { pokemonName } = Route.useParams();

	return <div className="text-white">Hello {pokemonName}!</div>;
}
