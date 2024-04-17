import { PokemonTypeTypes } from ".";
import * as IconBackgrounds from "../assets/background-icons";
import * as Icon from "../assets/icons";

export const typeIconsBackground: { [key in PokemonTypeTypes]: React.FC } = {
  normal: IconBackgrounds.IconNormalBackground,
  fire: IconBackgrounds.IconFireBackground,
  water: IconBackgrounds.IconWaterBackground,
  grass: IconBackgrounds.IconGrassBackground,
  flying: IconBackgrounds.IconFlyingBackground,
  fighting: IconBackgrounds.IconFightingBackground,
  poison: IconBackgrounds.IconPoisonBackground,
  electric: IconBackgrounds.IconElectricBackground,
  ground: IconBackgrounds.IconGroundBackground,
  rock: IconBackgrounds.IconRockBackground,
  psychic: IconBackgrounds.IconPsychicBackground,
  ice: IconBackgrounds.IconIceBackground,
  bug: IconBackgrounds.IconBugBackground,
  ghost: IconBackgrounds.IconGhostBackground,
  steel: IconBackgrounds.IconSteelBackground,
  dragon: IconBackgrounds.IconDragonBackground,
  dark: IconBackgrounds.IconDarkBackground,
  fairy: IconBackgrounds.IconFairyBackground,
};

export const typeIcons: { [key in PokemonTypeTypes]: React.FC } = {
  normal: Icon.IconNormal,
  fire: Icon.IconFire,
  water: Icon.IconWater,
  grass: Icon.IconGrass,
  flying: Icon.IconFlying,
  fighting: Icon.IconFighting,
  poison: Icon.IconPoison,
  electric: Icon.IconElectric,
  ground: Icon.IconGround,
  rock: Icon.IconRock,
  psychic: Icon.IconPsychic,
  ice: Icon.IconIce,
  bug: Icon.IconBug,
  ghost: Icon.IconGhost,
  steel: Icon.IconSteel,
  dragon: Icon.IconDragon,
  dark: Icon.IconDark,
  fairy: Icon.IconFairy,
};
