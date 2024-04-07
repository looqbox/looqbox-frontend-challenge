import { PokemonColors } from "@/@types/theme";

export const pokemonColors: PokemonColors = {
  main: {
    primary: "#0f1525",
    secondary: "#101526",
    contrast: "#f1f1f1",
  },
  light: {
    background: "#f1f1f1",
    text: "#202020",
  },
  dark: {
    background: "#202020",
    text: "#f1f1f1",
  },
  species: {
    bug: {
      main: "#9BBA48",
      light: "#C9EC69",
      dark: "#4C630F",
    },
    dark: {
      main: "#595761",
      light: "#BFB9DA",
      dark: "#2C2936",
    },
    dragon: {
      main: "#2C6AC1",
      light: "#458CF0",
      dark: "#1A3C6D",
    },
    electric: {
      main: "#EED967",
      light: "#FAEA8F",
      dark: "#968839",
    },
    fairy: {
      main: "#E296E1",
      light: "#F8C2F7",
      dark: "#B16AB0",
    },
    fighting: {
      main: "#C44D61",
      light: "#FA7289",
      dark: "#8B3644",
    },
    fire: {
      main: "#F66D6D",
      light: "#FF9C9C",
      dark: "#B14646",
    },
    flying: {
      main: "#A6BBE8",
      light: "#D0DEFD",
      dark: "#7A89AA",
    },
    ghost: {
      main: "#616EB7",
      light: "#98A5EC",
      dark: "#3C4577",
    },
    grass: {
      main: "#73B861",
      light: "#A6EB95",
      dark: "#4D7C41",
    },
    ground: {
      main: "#CE8056",
      light: "#F5B897",
      dark: "#996041",
    },
    ice: {
      main: "#8BCEC1",
      light: "#B9F5E9",
      dark: "#679C92",
    },
    normal: {
      main: "#C2C5C0",
      light: "#A0A29F",
      dark: "#6F706E",
    },
    poison: {
      main: "#AC6ACA",
      light: "#DF9DFD",
      dark: "#6F4285",
    },
    psychic: {
      main: "#EB8B85",
      light: "#FFAFA9",
      dark: "#C56B64",
    },
    rock: {
      main: "#8BCEC1",
      light: "#B7F7EA",
      dark: "#61978C",
    },
    steel: {
      main: "#6594A1",
      light: "#98C6D3",
      dark: "#42626B",
    },
    water: {
      main: "#88A3D4",
      light: "#B2C9F5",
      dark: "#5873A1",
    },
  },
};

export const pokemonTheme = {
  colors: pokemonColors,
};
