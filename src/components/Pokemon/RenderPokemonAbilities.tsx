import { IconArcheryArrow } from "@tabler/icons-react";
import { pokemonTypeStyle } from "../../constants/pokemonTypes";
import Pokemon from "../../core/models/Pokemon";
import { cn } from "../../utils";

interface RenderPokemonAbilitiesProps {
  pokemon: Pokemon;
}

function RenderPokemonAbilities({ pokemon }: RenderPokemonAbilitiesProps) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-600">Habilidades</h2>
      <ul className="flex mt-2 flex-col gap-2 w-full max-w-[400px]">
        {pokemon?.abilities.map((ability) => (
          <li
            key={ability.slot}
            className="flex gap-1 text-lg font-medium capitalize text-gray-600">
            <span>{ability.slot}. </span>
            {ability.ability.name.replace("-", " ")}
            <IconArcheryArrow
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

export default RenderPokemonAbilities;
