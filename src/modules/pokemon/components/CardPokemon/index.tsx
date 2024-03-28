import { Pokemon } from "../../types";

export default function CardPokemon(pokemon: Pokemon) {
  return <p>{pokemon.name}</p>;
}