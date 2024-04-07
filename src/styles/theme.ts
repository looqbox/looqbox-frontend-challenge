import { ThemeConfig, theme } from "antd";

import { pokemonColors } from "@/styles/colors";

export const defaultTheme: ThemeConfig = {
  ...theme,
  token: {
    fontFamily: "Poppins, sans-serif",
    colorPrimary: pokemonColors.main.primary,
    colorLink: pokemonColors.main.primary,
  },
};

export const lightTheme: ThemeConfig = {
  algorithm: theme.defaultAlgorithm,
  token: {
    colorTextBase: pokemonColors.light.text,
    colorBgBase: pokemonColors.light.background,
  },
  ...defaultTheme,
};

export const darkTheme: ThemeConfig = {
  algorithm: theme.darkAlgorithm,
  token: {
    colorTextBase: pokemonColors.dark.text,
    colorBgBase: pokemonColors.dark.background,
  },
  ...defaultTheme,
};
