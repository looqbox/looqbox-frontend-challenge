import * as S from "./styles";

type PokemonCardImageProps = {
  image?: string;
  name?: string;
  size?: number;
  fallback?: string;
};

export const PokemonCardImage = ({
  image = "/assets/svgs/pokemon-shadow.svg",
  name = "",
  size = 130,
  fallback = "/assets/svgs/icons/question-circle.svg",
}: PokemonCardImageProps) => {
  return (
    <S.Image
      src={image}
      alt={name}
      width={size}
      onError={({ currentTarget }) => {
        currentTarget.onerror = null;
        currentTarget.src = fallback;
      }}
    />
  );
};
