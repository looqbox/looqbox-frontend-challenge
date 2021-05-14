import React from "react";

import * as S from "./styles";

const Badge = ({ type }) => {
  return (
    <S.Badge
      style={{ backgroundColor: `var(--tag_${type})` }}
    >{`${type}`}</S.Badge>
  );
};

export default Badge;
