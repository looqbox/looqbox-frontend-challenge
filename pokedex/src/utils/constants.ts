import type { Pokemon } from "../store/types.interfaces";

export function getArtWork(pokemon: Pokemon): string {
  return (
    pokemon.sprites.other?.["official-artwork"]?.front_default ??
    pokemon.sprites.other?.dream_world?.front_default ??
    pokemon.sprites.front_default ??
    "/faultImg.svg"
  );
}

export const typeColors: Record<string, string> = {
  normal: "var(--type-normal)",
  fire: "var(--type-fire)",
  water: "var(--type-water)",
  electric: "var(--type-electric)",
  grass: "var(--type-grass)",
  ice: "var(--type-ice)",
  fighting: "var(--type-fighting)",
  poison: "var(--type-poison)",
  ground: "var(--type-ground)",
  flying: "var(--type-flying)",
  psychic: "var(--type-psychic)",
  bug: "var(--type-bug)",
  rock: "var(--type-rock)",
  ghost: "var(--type-ghost)",
  dragon: "var(--type-dragon)",
  dark: "var(--type-dark)",
  steel: "var(--type-steel)",
  fairy: "var(--type-fairy)",
};

export const StatColors: Record<string, string> = {
  hp: "var(--hp)",
  attack: "var(--attack)",
  defense: "var(--defense)",
  "special-attack": "var(--special-attack)",
  "special-defense": "var(--special-defense)",
  speed: "var(--speed)",
};
