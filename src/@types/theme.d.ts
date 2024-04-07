import { ThemeConfig } from "antd";

export type Theme = {
  type: ThemeTypes;
  config: ThemeConfig;
};

export type ThemeTypes = "light" | "dark";

type PokemonMainColors = {
  primary: string;
  secondary: string;
  contrast: string;
};

type PokemonThemeColors = {
  background: string;
  text: string;
};

type PokemonSpecieColor = {
  main: string;
  light: string;
  dark: string;
};

export type PokemonColors = {
  main: PokemonMainColors;
  light: PokemonThemeColors;
  dark: PokemonThemeColors;
  species: {
    bug: PokemonSpecieColor;
    dark: PokemonSpecieColor;
    dragon: PokemonSpecieColor;
    electric: PokemonSpecieColor;
    fairy: PokemonSpecieColor;
    fighting: PokemonSpecieColor;
    fire: PokemonSpecieColor;
    flying: PokemonSpecieColor;
    ghost: PokemonSpecieColor;
    grass: PokemonSpecieColor;
    ground: PokemonSpecieColor;
    ice: PokemonSpecieColor;
    normal: PokemonSpecieColor;
    poison: PokemonSpecieColor;
    psychic: PokemonSpecieColor;
    rock: PokemonSpecieColor;
    steel: PokemonSpecieColor;
    water: PokemonSpecieColor;
  };
};

export type PokemonTheme = {
  colors: PokemonColors;
};
