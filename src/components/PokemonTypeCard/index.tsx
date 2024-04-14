import { CSSProperties, FC } from "react";
import { pokemonTypes } from "../../constants/pokemonTypes";
import { StyledContainer } from "./styles";
import { capitalizeString } from "../../utils/capitalizeString";
import { ReactComponent as IconTypeBug } from "../../assets/pokemonTypes/bug.svg";
import { ReactComponent as IconTypeDark } from "../../assets/pokemonTypes/dark.svg";
import { ReactComponent as IconTypeDragon } from "../../assets/pokemonTypes/dragon.svg";
import { ReactComponent as IconTypeElectric } from "../../assets/pokemonTypes/electric.svg";
import { ReactComponent as IconTypeFairy } from "../../assets/pokemonTypes/fairy.svg";
import { ReactComponent as IconTypeFighting } from "../../assets/pokemonTypes/fighting.svg";
import { ReactComponent as IconTypeFire } from "../../assets/pokemonTypes/fire.svg";
import { ReactComponent as IconTypeFlying } from "../../assets/pokemonTypes/flying.svg";
import { ReactComponent as IconTypeGhost } from "../../assets/pokemonTypes/ghost.svg";
import { ReactComponent as IconTypeGrass } from "../../assets/pokemonTypes/grass.svg";
import { ReactComponent as IconTypeGround } from "../../assets/pokemonTypes/ground.svg";
import { ReactComponent as IconTypeIce } from "../../assets/pokemonTypes/ice.svg";
import { ReactComponent as IconTypeNormal } from "../../assets/pokemonTypes/normal.svg";
import { ReactComponent as IconTypePoison } from "../../assets/pokemonTypes/poison.svg";
import { ReactComponent as IconTypePsychic } from "../../assets/pokemonTypes/psychic.svg";
import { ReactComponent as IconTypeRock } from "../../assets/pokemonTypes/rock.svg";
import { ReactComponent as IconTypeSteel } from "../../assets/pokemonTypes/steel.svg";
import { ReactComponent as IconTypeWater } from "../../assets/pokemonTypes/water.svg";

interface Props {
  value: string;
  isSelected: boolean;
  onClick?: () => void;
  styles?: CSSProperties;
}

export default function PokemonTypeCard({
  value,
  isSelected,
  onClick,
  styles,
}: Props) {
  const pokemonTypeSelected = pokemonTypes.find((type) => type.name === value);

  let TypeSvgComponent: FC<React.SVGProps<SVGSVGElement>> | undefined;

  switch (pokemonTypeSelected?.name) {
    case "bug":
      TypeSvgComponent = IconTypeBug;
      break;
    case "dark":
      TypeSvgComponent = IconTypeDark;
      break;
    case "dragon":
      TypeSvgComponent = IconTypeDragon;
      break;
    case "electric":
      TypeSvgComponent = IconTypeElectric;
      break;
    case "fairy":
      TypeSvgComponent = IconTypeFairy;
      break;
    case "fighting":
      TypeSvgComponent = IconTypeFighting;
      break;
    case "fire":
      TypeSvgComponent = IconTypeFire;
      break;
    case "flying":
      TypeSvgComponent = IconTypeFlying;
      break;
    case "ghost":
      TypeSvgComponent = IconTypeGhost;
      break;
    case "grass":
      TypeSvgComponent = IconTypeGrass;
      break;
    case "ground":
      TypeSvgComponent = IconTypeGround;
      break;
    case "ice":
      TypeSvgComponent = IconTypeIce;
      break;
    case "normal":
      TypeSvgComponent = IconTypeNormal;
      break;
    case "poison":
      TypeSvgComponent = IconTypePoison;
      break;
    case "psychic":
      TypeSvgComponent = IconTypePsychic;
      break;
    case "rock":
      TypeSvgComponent = IconTypeRock;
      break;
    case "steel":
      TypeSvgComponent = IconTypeSteel;
      break;
    case "water":
      TypeSvgComponent = IconTypeWater;
      break;
  }

  return pokemonTypeSelected?.name && pokemonTypeSelected.color ? (
    <StyledContainer
      style={styles}
      colorType={pokemonTypeSelected.color}
      onClick={onClick}
      isSelected={isSelected}
    >
      {TypeSvgComponent && <TypeSvgComponent/>}
      <p>{capitalizeString(value)}</p>
    </StyledContainer>
  ) : (
    <div></div>
  );
}
