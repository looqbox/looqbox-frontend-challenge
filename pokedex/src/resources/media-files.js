import darknessBg from "./darkness.png";
import darknessType from "./darkness-type.png";
import electricBg from "./electric.png";
import electricType from "./electric-type.png";
import fightingBg from "./fighting.png";
import fightingType from "./fighting-type.png";
import fireBg from "./fire.png";
import fireType from "./fire-type.png";
import grassBg from "./grass.png";
import grassType from "./grass-type.png";
import normalBg from "./normal.png";
import normalType from "./normal-type.png";
import waterBg from "./water.png";
import waterType from "./water-type.png";

const backgrounds = {
  darkness: darknessBg,
  electric: electricBg,
  fighting: fightingBg,
  fire: fireBg,
  grass: grassBg,
  bug: grassBg,
  normal: normalBg,
  ground: normalBg,
  poison: normalBg,
  rock: normalBg,
  water: waterBg,
  psychic: darknessBg,
  ghost: darknessBg,
};

const ballTypes = {
  darkness: darknessType,
  electric: electricType,
  fighting: fightingType,
  fire: fireType,
  grass: grassType,
  bug: grassType,
  normal: normalType,
  ground: normalType,
  poison: normalType,
  rock: normalType,
  water: waterType,
  psychic: normalType,
  ghost: darknessType,
};

export { backgrounds, ballTypes };
