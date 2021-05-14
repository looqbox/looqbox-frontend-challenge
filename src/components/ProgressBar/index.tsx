import React from "react";

import * as S from "./styles";

const ProgressBar = ({ completed, max, stat }) => {
  return (
    <S.Container>
      <S.TextGroups>
        <S.Label htmlFor="progress">{`${stat}`}</S.Label>
        <span>{(completed / max) * 100}%</span>
      </S.TextGroups>
      <S.Progress id="progress" value={completed} max={max} />
    </S.Container>
  );
};

export default ProgressBar;
