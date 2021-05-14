import React from "react";

import Link from "next/link";

import * as S from "./styles";

const BackButton = () => {
  return (
    <S.Button >
      <Link href="/">
        <a>Back</a>
      </Link>
    </S.Button>
  );
};

export default BackButton;
