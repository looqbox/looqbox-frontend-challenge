import { CSSProperties } from "react";
import { pokemonTypes } from "../../constants/pokemonTypes";
import { StyledContainer } from "./styles";
import { capitalizeString } from "../../utils/capitalizeString";

interface Props {
  value: string;
  isSelected: boolean;
  onClick?: () => void;
  styles?: CSSProperties
}

export default function PokemonTypeCard({
  value,
  isSelected,
  onClick,
  styles,
}: Props) {
  const pokemonTypeSelected = pokemonTypes.find((type) => type.name === value);

  const imgUrl = new URL(
    `/src/assets/p/${pokemonTypeSelected?.name}.svg`,
    import.meta.url
  ).href;

  return pokemonTypeSelected?.name && pokemonTypeSelected.color ? (
    <StyledContainer
      style={styles}
      colorType={pokemonTypeSelected.color}
      onClick={onClick}
      isSelected={isSelected}
    >
      <img src={imgUrl} alt="Pokemon type card image" />
      <p>{capitalizeString(value)}</p>
    </StyledContainer>
  ) : (
    <div></div>
  );
}
