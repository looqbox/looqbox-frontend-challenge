import { FC, HTMLProps } from "react";
import { pokemonTypes } from "../../constants/pokemonTypes";
import { StyledContainer } from "./styles";
import { capitalizeString } from "../../utils/capitalizeString";

interface Props extends FC<HTMLProps<HTMLButtonElement>> {
  value: string;
  isSelected: boolean;
  onClick?: () => void;
}

export default function PokemonTypeCard({ value, isSelected, onClick }: Props) {
  const pokemonTypeSelected = pokemonTypes.find(
    (type) => type.name === value
  );

  const imgUrl = new URL(
    `/src/assets/p/${pokemonTypeSelected?.name}.svg`,
    import.meta.url
  ).href;

  return pokemonTypeSelected?.name && pokemonTypeSelected.color ? (
    <StyledContainer
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
