import normal from "./normal.png";
import fire from "./fire.png";
import water from "./water.png";
import electric from "./electric.png";
import grass from "./grass.png";
import ice from "./ice.png";
import fighting from "./fighting.png";
import poison from "./poison.png";
import ground from "./ground.png";
import flying from "./flying.png";
import psychic from "./psychic.png";
import bug from "./bug.png";
import rock from "./rock.png";
import ghost from "./ghost.png";
import dragon from "./dragon.png";
import dark from "./dark.png";
import steel from "./steel.png";
import fairy from "./fairy.png";

export type Type = {
  name: string;
  image: string;
};

export const types: Type[] = [
  { name: "fairy", image: fairy },
  { name: "fire", image: fire },
  { name: "electric", image: electric },
  { name: "grass", image: grass },
  { name: "ice", image: ice },
  { name: "fighting", image: fighting },
  { name: "ground", image: ground },
  { name: "flying", image: flying },
  { name: "bug", image: bug },
  { name: "ghost", image: ghost },
  { name: "dragon", image: dragon },
  { name: "dark", image: dark },
  { name: "rock", image: rock },
  { name: "normal", image: normal },
  { name: "poison", image: poison },
  { name: "steel", image: steel },
  { name: "psychic", image: psychic },
  { name: "water", image: water },
];
