import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Theme } from "@/@types/theme";
import { darkTheme, lightTheme } from "@/styles/theme";

const dark: Theme = { type: "dark", config: darkTheme };
const light: Theme = { type: "light", config: lightTheme };

const themeSlice = createSlice({
  name: "theme",
  initialState: light,
  reducers: {
    setTheme: (_, action: PayloadAction<string>) => {
      return action.payload === "light" ? light : dark;
    },
  },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
