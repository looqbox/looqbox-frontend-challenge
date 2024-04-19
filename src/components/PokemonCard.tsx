import { pokemonTypeStyle } from "../constants/pokemonTypes";
import { PokemonType } from "../core/models/Pokemon";
import { cn } from "./../utils/index";

interface PokemonCardProps {
  name: string;
  url?: string;
  image: string;
  types: PokemonType[];
}

function PokemonCard({ name, url, image, types }: PokemonCardProps) {
  return (
    <div
      className="
      bg-slate-50 w-[280px] h-[240px] p-8 rounded-2xl flex flex-col 
      items-center gap-4 shadow-card transition-all duration-300 hover:scale-110
      ease-in-out cursor-pointer
    ">
      <div className="w-32 -translate-y-24">
        <img src={image} alt={`${name} sprite`} className="w-full" />
      </div>
      <div className="flex flex-col gap-12 text-center -translate-y-24">
        <p className="text-xl capitalize">{name}</p>
        <div className="flex gap-2">
          {types.map((type, index) => (
            <span
              key={index}
              className={cn(
                "text-center text-lg font-bold py-1 px-4 rounded-md shadow-md capitalize",
                pokemonTypeStyle[
                  type.type.name as keyof typeof pokemonTypeStyle
                ]
              )}>
              {type.type.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PokemonCard;
