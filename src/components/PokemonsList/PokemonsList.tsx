import { useNavigate } from "@tanstack/react-router";
import { CircleXIcon, FrownIcon, Loader2 } from "lucide-react";
import { motion } from "motion/react";
import { usePokemonsList } from "@/hooks/usePokemonsList";
import noPokemonImage from "../../images/no-pokemon.jpg";

const POKEMON_TYPE_COLORS: Record<string, string> = {
	fire: "#F08030",
	water: "#6890F0",
	grass: "#78C850",
	electric: "#F8D030",
	ice: "#98D8D8",
	fighting: "#C03028",
	poison: "#A040A0",
	ground: "#E0C068",
	flying: "#A890F0",
	psychic: "#F85888",
	bug: "#A8B820",
	rock: "#B8A038",
	ghost: "#705898",
	dragon: "#7038F8",
	dark: "#705848",
	steel: "#B8B8D0",
	fairy: "#EE99AC",
	normal: "#A8A878",
};

/**
 * Return id (number) in format "#025"
 */
export function prettifyPokemonId(id: number) {
	return `#${id.toString().padStart(3, "0")}`;
}

export const PokemonsList = () => {
	const { pokemons, error, loading } = usePokemonsList();
	const navigate = useNavigate();

	function goToPokemonDetailsPage(pokemonName: string) {
		navigate({
			to: "/details/$pokemonName",
			params: { pokemonName },
		});
	}

	if (loading) {
		return (
			<div className="w-full py-20 text-center">
				<Loader2 className="w-12 h-12 text-white animate-spin mx-auto mb-4" />
				<p className="text-white/60 text-lg">Procurando Pokémons! Aguarde...</p>
			</div>
		);
	}

	if (error) {
		return (
			<div className="w-full py-20 text-center">
				<CircleXIcon className="w-12 h-12 text-red-700/80 mx-auto mb-4" />
				<p className="text-white/60 text-lg">
					<strong>Houve um erro ao buscar os Pokémons.</strong>
					<br /> Mensagem de erro: <strong>{error}</strong>
				</p>
				<br />
				<p className="text-white/60">
					Opa, sortudo(a)! Você pegou um erro. Que tal{" "}
					<a
						href={`https://api.whatsapp.com/send?phone=5575991435586&text=Opa!%20Estava%20no%20Pok%C3%A9dex%20e%20recebi%20esse%20erro%3A%20${URL.parse(error)}`}
						target="_blank"
						rel="noopener noreferrer"
						className="underline hover:text-red-500"
					>
						me avisar
					</a>
					?
				</p>
				<p className="text-white/60">Vai me ajudar muito a corrigi-lo :D</p>
			</div>
		);
	}

	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
			{pokemons.length > 0 ? (
				pokemons.map((pokemon, idx) => (
					<motion.div
						key={pokemon.id}
						whileHover={{
							y: -10,
						}}
						initial={{
							opacity: 0,
							scale: 0.9,
						}}
						animate={{
							opacity: 1,
							scale: 1,
						}}
						transition={{
							delay: idx * 0.05,
						}}
						className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden cursor-pointer group"
						tabIndex={0} // It performs sequential keyboard navigation with the position defined by the order in the document's source code.
						data-testid="pokemonCard"
						onClick={() => goToPokemonDetailsPage(pokemon.name)}
						onKeyPress={() => goToPokemonDetailsPage(pokemon.name)}
					>
						<div className="relative h-48 flex items-center justify-center bg-zinc-800/50 p-6">
							<div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
							<img
								src={pokemon.image || noPokemonImage}
								alt={`Front view of the Pokémon ${pokemon.name}`}
								className="h-full group-hover:scale-110 transition-transform duration-300 drop-shadow-lg"
							/>
							<span className="absolute top-2 right-4 text-white/20 font-black text-4xl">
								{prettifyPokemonId(pokemon.id)}
							</span>
						</div>
						<div className="p-4">
							<h4 className="text-xl font-bold text-white capitalize mb-3">
								{pokemon.name}
							</h4>
							<div className="flex gap-2">
								{pokemon.types.map((type) => (
									<span
										key={type}
										style={{
											backgroundColor: POKEMON_TYPE_COLORS[type] || "#A8A878",
										}}
										className="uppercase font-bold px-3 py-1 rounded text-white text-sm"
									>
										{type}
									</span>
								))}
							</div>
						</div>
					</motion.div>
				))
			) : (
				<div className="col-span-full py-20 flex flex-col items-center justify-center">
					<FrownIcon className="w-12 h-12 text-white/80 mx-auto mb-4" />
					<p className="text-white/60 text-lg">
						<strong>Nenhum Pokémon</strong> com esse nome foi encontrado.
					</p>
				</div>
			)}
		</div>
	);
};
