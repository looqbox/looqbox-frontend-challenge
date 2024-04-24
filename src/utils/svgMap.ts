import bugSvg from "../assets/bug.svg";
import dragonSvg from "../assets/dragon.svg";
import fairySvg from "../assets/fairy.svg";
import fireSvg from "../assets/fire.svg";
import ghostSvg from "../assets/ghost.svg";
import groundSvg from "../assets/ground.svg";
import normalSvg from "../assets/normal.svg";
import psychicSvg from "../assets/psychic.svg";
import steelSvg from "../assets/steel.svg";
import darkSvg from "../assets/dark.svg";
import electricSvg from "../assets/electric.svg";
import fightingSvg from "../assets/fighting.svg";
import flyingSvg from "../assets/flying.svg";
import grassSvg from "../assets/grass.svg";
import iceSvg from "../assets/ice.svg";
import poisonSvg from "../assets/poison.svg";
import rockSvg from "../assets/rock.svg";
import waterSvg from "../assets/water.svg";

const svgMap: Record<string, { svg: string; color: string }> = {
  bug: { svg: bugSvg, color: "#A8B820" },
  dragon: { svg: dragonSvg, color: "#7038F8" },
  fairy: { svg: fairySvg, color: "#EE99AC" },
  fire: { svg: fireSvg, color: "#F08030" },
  ghost: { svg: ghostSvg, color: "#705898" },
  ground: { svg: groundSvg, color: "#E0C068" },
  normal: { svg: normalSvg, color: "#A8A878" },
  psychic: { svg: psychicSvg, color: "#F85888" },
  steel: { svg: steelSvg, color: "#B8B8D0" },
  dark: { svg: darkSvg, color: "#705848" },
  electric: { svg: electricSvg, color: "#F8D030" },
  fighting: { svg: fightingSvg, color: "#C03028" },
  flying: { svg: flyingSvg, color: "#A890F0" },
  grass: { svg: grassSvg, color: "#78C850" },
  ice: { svg: iceSvg, color: "#98D8D8" },
  poison: { svg: poisonSvg, color: "#A040A0" },
  rock: { svg: rockSvg, color: "#B8A038" },
  water: { svg: waterSvg, color: "#6890F0" },
};
export default svgMap;
