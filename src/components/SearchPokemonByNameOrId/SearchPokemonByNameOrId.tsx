import { InfoIcon, Search } from "lucide-react";
import { type ChangeEvent, type KeyboardEvent, useState } from "react";
import { usePokemonsList } from "@/hooks/usePokemonsList";

export const SearchPokemonByNameOrId = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const { filterPokemonsByPokemonName } = usePokemonsList();

	function handleInputOnChange(e: ChangeEvent<HTMLInputElement>) {
		setSearchTerm(e.target.value);
	}

	function handleKeyDown(e: KeyboardEvent<HTMLInputElement>) {
		if (e.key === "Enter") {
			filterPokemonsByPokemonName(searchTerm);
			// cleans input search after click Enter
			setSearchTerm("");
		}
	}

	return (
		<div className="max-w-md w-full">
			<div className="relative">
				<Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />

				<input
					type="text"
					placeholder="Buscar por nome"
					value={searchTerm}
					onChange={handleInputOnChange}
					onKeyDown={handleKeyDown}
					className="w-full h-12 pl-12 pr-4 bg-white/5 border border-white/10 rounded-lg text-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500 hover:border-red-500 transition-colors"
				/>
			</div>

			<div className="flex gap-2 items-center mt-1.5 ml-2">
				<InfoIcon className="text-white/40 w-4 h-4" />
				<p className="text-white/40 text-sm">
					Se buscar vazio, retorna alguns Pokémons
				</p>
			</div>
		</div>
	);
};
