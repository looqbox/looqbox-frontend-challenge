import { PokemonCard } from "../PokemonCard/PokemonCard";
import { CardsSection } from "../../pages/PokedexPage/PokedexPageStyle";

interface PokemonListProps {
  pokemons: any[];
}

export const PokemonList = ({ pokemons }: PokemonListProps) => {
  return (
    <CardsSection>
      {pokemons.length > 0 ? (
        pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.name} pokemonUrl={pokemon.url} />
        ))
      ) : (
        <p>Nenhum Pokémon encontrado...</p>
      )}
    </CardsSection>
  );
};
