import Pokemon from "../core/models/Pokemon";
import PokemonCard from "./PokemonCard";

interface PokemonCardListProps {
  pokemons: Pokemon[];
}

function PokemonCardList({ pokemons }: PokemonCardListProps) {
  return (
    <div className="mt-20 w-full max-w-[1200px] flex-1 justify-items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
      {pokemons.map((pokemon) => (
        <PokemonCard
          key={pokemon.id}
          image={pokemon.sprites.front_default}
          name={pokemon.name}
          types={pokemon.types}
        />
      ))}
    </div>
  );
}

export default PokemonCardList;
