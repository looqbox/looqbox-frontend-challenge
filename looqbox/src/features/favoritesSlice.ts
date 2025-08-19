import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type FavoritesState = { names: string[] };
const initialState: FavoritesState = { names: [] };

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavorite(state, action: PayloadAction<string>) {
      const n = action.payload.toLowerCase();
      state.names = state.names.includes(n)
        ? state.names.filter((x) => x !== n)
        : [...state.names, n];
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
