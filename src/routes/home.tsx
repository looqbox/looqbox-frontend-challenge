import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { PokemonsList } from "@/components/PokemonsList/PokemonsList";
import { SearchPokemonByNameOrId } from "@/components/SearchPokemonByNameOrId/SearchPokemonByNameOrId";

export const Route = createFileRoute("/home")({
	component: HomePage,
});

function HomePage() {
	return (
		<motion.div
			initial={{
				opacity: 0,
			}}
			animate={{
				opacity: 1,
			}}
			exit={{
				opacity: 0,
			}}
			className="p-6 max-w-7xl mx-auto min-h-screen"
		>
			<header className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
				<div className="flex items-center gap-4">
					<div className="w-12 h-12 bg-red-600 rounded-full border-4 border-white flex items-center justify-center shadow-[0_0_15px_rgba(255,0,0,0.4)]">
						<div className="w-4 h-4 bg-white rounded-full animate-pulse" />
					</div>

					<h2 className="text-3xl font-bold text-white tracking-tighter">
						POKÉDEX
					</h2>
				</div>

				<SearchPokemonByNameOrId />
			</header>

			<PokemonsList />
		</motion.div>
	);
}
