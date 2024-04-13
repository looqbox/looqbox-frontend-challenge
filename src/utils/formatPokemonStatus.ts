export const formatPokemonStatus = (statName: string) => {
  switch (statName) {
    case "hp":
      return "HP";
    case "attack":
      return "Ataque";
    case "defense":
      return "Defesa";
    case "special-attack":
      return "Ataque especial";
    case "special-defense":
      return "Defesa especial";
    case "speed":
      return "Velocidade";
  }
};