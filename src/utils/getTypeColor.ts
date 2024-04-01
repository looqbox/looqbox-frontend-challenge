const getTypeColor = (type: string) => {
  const typeColors: { [key: string]: string } = {
    bug: "#E3D985",
    dark: "#D1D5DE",
    dragon: "#FFA987",
    electric: "#FFC100",
    fairy: "#FBACBE",
    fire: "#E76F51",
    fighting: "#FF6B6B",
    flying: "#A4BFEB",
    ghost: "#BEB7A4",
    grass: "#C8E087",
    ground: "#CEA07E",
    ice: "#77B6EA",
    normal: "#D9D9D9",
    poison: "#CFBCDF",
    psychic: "#DFB2F4",
    rock: "#B7B5B3",
    shadow: "#546A76",
    steel: "#D8DBE2",
    unknown: "#C3C49E",
    water: "#1CCAD8",
  };

  return typeColors[type] || "#FFF";
};

export default getTypeColor;
