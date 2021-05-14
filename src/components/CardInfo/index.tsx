import React from "react";

import * as S from "./styles";

const CardInfo = ({ pokemon }) => {
  const { name, sprites, base_experience, species, weight, height } = pokemon;

  return (
    <>
      <S.GridContainer>
        <S.GridItem>
          <div>
            <S.InfoTitle>Weight</S.InfoTitle>
            <S.InfoValue>{weight / 10}Kg</S.InfoValue>
            <S.InfoTitle>Height</S.InfoTitle>
            <S.InfoValue>{height / 10}m</S.InfoValue>
          </div>
          <div>
            <S.InfoTitle>Base experience</S.InfoTitle>
            <S.InfoValue>{base_experience} XP</S.InfoValue>
            <S.InfoTitle>Specie name</S.InfoTitle>
            <S.InfoValue>{species.name}</S.InfoValue>
          </div>
        </S.GridItem>

        <S.GridItem>
          <S.Image src={sprites.front_default} alt={`${name} image`} />
        </S.GridItem>
      </S.GridContainer>
    </>
  );
};

export default CardInfo;
