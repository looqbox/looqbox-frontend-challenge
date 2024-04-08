import { Tooltip } from "antd";
import { useContext } from "react";
import { ThemeContext } from "styled-components";

import { handleGotoSite } from "@/utils/navigate";

import * as S from "./styles";

export type SocialButtonProps = {
  name: string;
  me: string;
  url: string;
  icon: React.JSX.Element;
};

export const SocialButton = ({ name, me, url, icon }: SocialButtonProps) => {
  const theme = useContext(ThemeContext);

  return (
    <S.Button type="link" onClick={() => handleGotoSite(url)} key={name}>
      <Tooltip title={me} color={theme?.pokemon.colors.main.primary}>
        <S.Icon>{icon}</S.Icon>
      </Tooltip>
    </S.Button>
  );
};
