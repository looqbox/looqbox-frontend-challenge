import { IconChevronsDown } from "@tabler/icons-react";
import { pokemonTypeStyle } from "../../constants/pokemonTypes";
import Pokemon from "../../core/models/Pokemon";
import { cn } from "../../utils";

interface RenderPokemonMovesProps {
  pokemon: Pokemon;
}

function RenderPokemonMoves({ pokemon }: RenderPokemonMovesProps) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-600">Ataques</h2>
      <ul className="flex flex-col gap-2 w-full max-w-[250px] max-h-[250px] overflow-y-auto custom-scrollbar">
        {pokemon?.moves.map((ability, index) => (
          <li
            role="listitem"
            key={index}
            className="flex mt-2 gap-1 text-lg font-medium capitalize text-gray-600">
            {ability.move.name.replace("-", " ")}
            <IconChevronsDown
              className={cn(
                pokemonTypeStyle[
                  pokemon.types[0].type.name as keyof typeof pokemonTypeStyle
                ],
                "bg-transparent"
              )}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RenderPokemonMoves;
