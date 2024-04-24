import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface PaginationState {
  offset: number;
  pageSize: number;
  currPage: number;
}

const initialState = {
  offset: 0,
  pageSize: 12,
  currPage: 1,
} satisfies PaginationState as PaginationState;

const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    setPage(state, action: PayloadAction<number>) {
      state.offset = state.pageSize * (action.payload - 1);
      state.currPage = action.payload;
    },
    setPageSize(state, action: PayloadAction<number>) {
      state.pageSize = action.payload;
    },
  },
});

export const { setPage, setPageSize } = paginationSlice.actions;

export default paginationSlice.reducer;
