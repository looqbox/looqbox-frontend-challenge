import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/details/")({
	component: PokemonDetailsPage,
	beforeLoad: () => {
		throw Route.redirect({
			to: "/home",
		});
	},
});

function PokemonDetailsPage() {
	return <div>Hello "/details/"!</div>;
}
