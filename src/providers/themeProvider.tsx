import { ConfigProvider } from "antd";
import React from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

import { useTheme } from "@/hooks/useTheme";
import { pokemonTheme } from "@/styles/colors";

export const ThemeProvider = ({ children }: React.PropsWithChildren) => {
  const {
    theme: { type, config },
  } = useTheme();

  const theme = {
    type,
    antd: config.token,
    pokemon: pokemonTheme,
  };

  return (
    <StyledThemeProvider theme={theme}>
      <ConfigProvider theme={config}>{children}</ConfigProvider>
    </StyledThemeProvider>
  );
};
