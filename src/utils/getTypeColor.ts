const getTypeColor = (type: string) => {
  const typeColors: { [key: string]: string } = {
    bug: "#CAD49D",
    dark: "#37393A",
    dragon: "#FFA987",
    electric: "#FFC100",
    fairy: "#FBACBE",
    fire: "#E16036",
    fighting: "#DB504A",
    flying: "#A4BFEB",
    ghost: "#8C93A8",
    grass: "#678D58",
    ground: "#856A5D",
    ice: "77B6EA",
    normal: "#D9D9D9",
    poison: "#8B80F9",
    psychic: "#DFB2F4",
    rock: "#8896AB",
    shadow: "546A76",
    steel: "66717E",
    unknown: "#C3C49E",
    water: "#23B5D3",
  };

  return typeColors[type] || "#FFF";
};

export default getTypeColor;
