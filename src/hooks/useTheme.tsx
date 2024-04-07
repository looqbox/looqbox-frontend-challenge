import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AppDispatch, RootState } from "@/store";
import { setTheme } from "@/store/themeSlice";

const saveTheme = (themeType: string) =>
  window.localStorage.setItem("theme", themeType);
const retrieveTheme = () => window.localStorage.getItem("theme") ?? "light";

export const useTheme = () => {
  const theme = useSelector((state: RootState) => state.theme);
  const dispatch = useDispatch<AppDispatch>();

  const toggleTheme = () => {
    const newThemeType = theme.type === "light" ? "dark" : "light";
    dispatch(setTheme(newThemeType));
    saveTheme(newThemeType);
  };

  useEffect(() => {
    const storedThemeType = retrieveTheme();
    dispatch(setTheme(storedThemeType));
  }, [dispatch]);

  return { theme, toggleTheme };
};
