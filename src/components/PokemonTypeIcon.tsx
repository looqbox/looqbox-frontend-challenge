import React from 'react';
import BugIcon from '@/assets/type-icons/bug.svg?react';
import DarkIcon from '@/assets/type-icons/dark.svg?react';
import DragonIcon from '@/assets/type-icons/dragon.svg?react';
import ElectricIcon from '@/assets/type-icons/electric.svg?react';
import FairyIcon from '@/assets/type-icons/fairy.svg?react';
import FightingIcon from '@/assets/type-icons/fighting.svg?react';
import FireIcon from '@/assets/type-icons/fire.svg?react';
import FlyingIcon from '@/assets/type-icons/flying.svg?react';
import GhostIcon from '@/assets/type-icons/ghost.svg?react';
import GrassIcon from '@/assets/type-icons/grass.svg?react';
import GroundIcon from '@/assets/type-icons/ground.svg?react';
import IceIcon from '@/assets/type-icons/ice.svg?react';
import NormalIcon from '@/assets/type-icons/normal.svg?react';
import PoisonIcon from '@/assets/type-icons/poison.svg?react';
import PsychicIcon from '@/assets/type-icons/psychic.svg?react';
import RockIcon from '@/assets/type-icons/rock.svg?react';
import SteelIcon from '@/assets/type-icons/steel.svg?react';
import WaterIcon from '@/assets/type-icons/water.svg?react';

type PokemonTypeIconProps = {
  type: string;
} & React.SVGAttributes<SVGSVGElement>;

const PokemonTypeIcon: React.FC<PokemonTypeIconProps> = ({ type, ...props }) => {
  const getTypeIcon = () => {
    switch (type) {
      case 'bug':
        return <BugIcon {...props} />;
      case 'dark':
        return <DarkIcon {...props} />;
      case 'dragon':
        return <DragonIcon {...props} />;
      case 'electric':
        return <ElectricIcon {...props} />;
      case 'fairy':
        return <FairyIcon {...props} />;
      case 'fighting':
        return <FightingIcon {...props} />;
      case 'fire':
        return <FireIcon {...props} />;
      case 'flying':
        return <FlyingIcon {...props} />;
      case 'ghost':
        return <GhostIcon {...props} />;
      case 'grass':
        return <GrassIcon {...props} />;
      case 'ground':
        return <GroundIcon {...props} />;
      case 'ice':
        return <IceIcon {...props} />;
      case 'normal':
        return <NormalIcon {...props} />;
      case 'poison':
        return <PoisonIcon {...props} />;
      case 'psychic':
        return <PsychicIcon {...props} />;
      case 'rock':
        return <RockIcon {...props} />;
      case 'steel':
        return <SteelIcon {...props} />;
      case 'water':
        return <WaterIcon {...props} />;
      default:
        return null; // Return null for unknown types
    }
  };

  return getTypeIcon();
};

export default PokemonTypeIcon;
