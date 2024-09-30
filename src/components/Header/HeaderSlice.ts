import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface searchStringState {
  searchedString: string;
}

const initialState: searchStringState = {
  searchedString: "",
};

export const headerSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    searchedSubstring(state, action: PayloadAction<string>) {
      const string = action.payload;
      state.searchedString = string;
    },
  },
});

export const { searchedSubstring } = headerSlice.actions;
export default headerSlice.reducer;
