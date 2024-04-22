import usePokemon from "../../hooks/usePokemon";
import RenderPokemonAbilities from "./RenderPokemonAbilities";
import RenderPokemonMoves from "./RenderPokemonMoves";
import {
  cn,
  decimetersToMeters,
  hectrogramsToKilograms,
} from "./../../utils/index";
import { pokemonTypeStyle } from "./../../constants/pokemonTypes";
import PokedexTopSvg from "/pokedex-top.svg";
import Loading from "../UI/Loader/Loading";
import NotFound from "../UI/NotFound";

interface PokemonInfoProps {
  pokemonName: string;
}

function PokemonInfo({ pokemonName }: PokemonInfoProps) {
  const { pokemon, isLoading } = usePokemon(pokemonName);

  if (isLoading) {
    return <Loading />;
  }

  if (!pokemon) {
    return <NotFound message="Pokemon não encontrado!" />;
  }

  return (
    <div
      className="
       bg-red-700 w-full max-w-[600px] min-h-[700px] px-4 py-10 rounded-2xl flex 
      flex-col items-center justify-around gap-4 shadow-pokedex relative
    ">
      <div className="absolute top-2 left-2 sm:top-5 sm:left-5 w-9 h-9 sm:w-16 sm:h-16 rounded-full bg-slate-200 flex items-center justify-center shadow-card">
        <div className="w-7 h-7 sm:w-12 sm:h-12 rounded-full glass-effect"></div>
      </div>
      <img
        src={PokedexTopSvg}
        alt="Pokedex Icon"
        className="w-full absolute top-0 -translate-y-20 opacity-50"
      />
      <div className="relative flex gap-2 items-center self-end translate-y-10">
        <h1
          className="text-3xl capitalize font-bold text-sky-600"
          style={{
            textShadow: "2px 2px 5px #000",
          }}>
          {pokemon.name}
        </h1>
        <img src={pokemon.sprites.front_default} alt="Pokemon image" />
      </div>
      <section
        className="
        flex flex-col items-center w-full mt-10
        bg-slate-200 rounded-2xl p-4 gap-4 shadow-inside bg-pokeball relative z-10
      ">
        <div>
          <p className="text-xl">
            Tipo:{" "}
            <span
              className={cn(
                pokemonTypeStyle[
                  pokemon.types[0].type.name as keyof typeof pokemonTypeStyle
                ],
                "bg-transparent capitalize font-bold"
              )}>
              {pokemon.types[0].type.name}
            </span>
          </p>
          <p>
            Altura:{" "}
            <span className="font-bold">
              {decimetersToMeters(pokemon.height)}m
            </span>
          </p>
          <p>
            Peso:{" "}
            <span className="font-bold">
              {hectrogramsToKilograms(pokemon.weight)}kg
            </span>
          </p>
        </div>
        <div className="w-full max-w-[800px] space-y-8 md:space-y-0 grid justify-items-center grid-cols-1 md:grid-cols-2">
          <RenderPokemonAbilities pokemon={pokemon} />
          <RenderPokemonMoves pokemon={pokemon} />
        </div>
      </section>
    </div>
  );
}

export default PokemonInfo;
