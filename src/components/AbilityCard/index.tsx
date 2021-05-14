import React from "react";

import * as S from "./styles";

const AbilityCard = ({ abilities }) => {
  const abilityName = abilities.map((ability) => {
    return (
      <S.AbilitiesInfo key={ability.ability.name}>
        <S.AbilityName>{ability.ability.name}</S.AbilityName>
        <S.AbilityHidden>
          {ability.is_hidden === true ? "Hidden" : "Not hidden"}
        </S.AbilityHidden>
      </S.AbilitiesInfo>
    );
  });

  return (
    <>
      <span>{abilityName}</span>
    </>
  );
};

export default AbilityCard;
