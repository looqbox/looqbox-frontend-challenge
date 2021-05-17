import React from 'react';

import { ReactComponent as GrassIcon } from 'shared/assets/icons/grass.svg';
import { ReactComponent as FireIcon } from 'shared/assets/icons/fire.svg';
import { ReactComponent as WaterIcon } from 'shared/assets/icons/water.svg';
import { ReactComponent as ElectricIcon } from 'shared/assets/icons/electric.svg';
import { ReactComponent as BugIcon } from 'shared/assets/icons/bug.svg';
import { ReactComponent as NormalIcon } from 'shared/assets/icons/normal.svg';
import { ReactComponent as PoisonIcon } from 'shared/assets/icons/poison.svg';
import { ReactComponent as GroundIcon } from 'shared/assets/icons/ground.svg';
import { ReactComponent as FairyIcon } from 'shared/assets/icons/fairy.svg';
import { ReactComponent as FightingIcon } from 'shared/assets/icons/fighting.svg';
import { ReactComponent as PsychicIcon } from 'shared/assets/icons/psychic.svg';
import { ReactComponent as GhostIcon } from 'shared/assets/icons/ghost.svg';
import { ReactComponent as RockIcon } from 'shared/assets/icons/rock.svg';
import { ReactComponent as IceIcon } from 'shared/assets/icons/ice.svg';
import { ReactComponent as DarkIcon } from 'shared/assets/icons/dark.svg';
import { ReactComponent as DragonIcon } from 'shared/assets/icons/dragon.svg';
import { ReactComponent as SteelIcon } from 'shared/assets/icons/steel.svg';

import { iconsData, CardProps } from './types';

const CardIcon = ({ type }: CardProps) => {
  const pokeType = type || 'normal';

  const icons: iconsData = {
    grass: GrassIcon,
    fire: FireIcon,
    water: WaterIcon,
    electric: ElectricIcon,
    bug: BugIcon,
    normal: NormalIcon,
    poison: PoisonIcon,
    ground: GroundIcon,
    fairy: FairyIcon,
    fighting: FightingIcon,
    psychic: PsychicIcon,
    ghost: GhostIcon,
    rock: RockIcon,
    ice: IceIcon,
    dark: DarkIcon,
    dragon: DragonIcon,
    steel: SteelIcon,
  };

  const Icon = icons[pokeType];

  return <Icon />;
};

export default CardIcon;
