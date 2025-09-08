import { createContext, useEffect, useState, PropsWithChildren } from "react";

import { Mode } from "@/design-system/config/theme";
import { getLocalStorage, setLocalStorage } from "@/core/utils/local-storage";
import { THEME_MODE_KEY } from "../constants/storage-keys.constant";

type ThemeOption = Mode | "system";

interface ThemeContextProps {
  mode: Mode;
  theme: ThemeOption;
  setTheme: (theme: ThemeOption) => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

function ThemeProvider({ children }: PropsWithChildren) {
  const getSystemTheme = (): Mode =>
    window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";

  const [systemTheme, setSystemTheme] = useState<Mode>(getSystemTheme);

  const [theme, setThemeState] = useState<ThemeOption>(() => {
    return getLocalStorage<ThemeOption>(THEME_MODE_KEY) ?? "system";
  });

  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const listener = (e: MediaQueryListEvent) => {
      setSystemTheme(e.matches ? "dark" : "light");
    };
    mq.addEventListener("change", listener);
    return () => mq.removeEventListener("change", listener);
  }, []);

  const setTheme = (newTheme: ThemeOption) => {
    setThemeState(newTheme);
    setLocalStorage(THEME_MODE_KEY, newTheme);
  };

  const mode: Mode = theme === "system" ? systemTheme : theme;

  return (
    <ThemeContext.Provider value={{ mode, theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemeProvider, ThemeContext };
