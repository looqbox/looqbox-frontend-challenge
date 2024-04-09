import * as S from "./styles";

type CardProps = {
  pokemonId: string;
};

export const Card = ({ pokemonId }: CardProps) => {
  return <S.Container>{pokemonId}</S.Container>;
};
