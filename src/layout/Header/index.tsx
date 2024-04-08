import { useNavigate } from "react-router-dom";

import { Theme } from "@/@types/theme";

import DarkThemeIcon from "/assets/svgs/icons/theme-dark.svg";
import LightThemeIcon from "/assets/svgs/icons/theme-light.svg";
import LogoImage from "/assets/svgs/logo.svg";

import * as S from "./styles";

export type HeaderProps = {
  theme: Theme;
  toggleTheme: () => void;
};

export const Header = ({ theme, toggleTheme }: HeaderProps) => {
  const navigate = useNavigate();

  const darkThemeIcon = (
    <img src={DarkThemeIcon} alt="Dark theme icon" width={16} />
  );

  const lightThemeIcon = (
    <img src={LightThemeIcon} alt="Light theme icon" width={16} />
  );

  return (
    <S.Container>
      <S.Main>
        <S.Logo
          src={LogoImage}
          alt="Light theme icon"
          onClick={() => navigate("/")}
        />
        <S.Title>Everyhing about Pokemon’s universe</S.Title>
      </S.Main>
      <S.Switch
        checkedChildren={lightThemeIcon}
        unCheckedChildren={darkThemeIcon}
        checked={theme.type === "dark"}
        onChange={toggleTheme}
      />
    </S.Container>
  );
};
