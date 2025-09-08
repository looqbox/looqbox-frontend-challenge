// src/design-system/theme/index.ts
import { ThemeConfig } from "antd";
import { lightColors, darkColors } from "./colors";

export type Mode = "light" | "dark";

export const getTheme = (mode: Mode): ThemeConfig => {
  const colors = mode === "light" ? lightColors : darkColors;

  return {
    token: {
      colorPrimary: colors.primary,
      colorError: colors.accent,
      colorBgBase: colors.background,
      boxShadow: colors.shadow,
      colorTextBase: colors.text,
      fontFamily: "Pokemon, sans-serif",
      fontSize: 14,
    },
    components: {
      Button: {
        borderRadius: 8,
        controlHeight: 40,
      },
      Card: { borderRadius: 12 },
      Input: { borderRadius: 8 },
      Select: {
        borderRadius: 8,
        optionSelectedColor: colors.neutral[900],
        optionSelectedBg: colors.primary,
      },
    },
  };
};
