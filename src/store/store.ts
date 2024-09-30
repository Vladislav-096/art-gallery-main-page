import { configureStore } from "@reduxjs/toolkit";
import searchedReducer from "../components/Header/HeaderSlice";
import { api } from "../api/apiSlice";
import themeReducer from "../components/Theme/ThemeSlice";

export const store = configureStore({
  reducer: {
    search: searchedReducer,
    theme: themeReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddle) => getDefaultMiddle().concat(api.middleware),
});

console.log("store", store.getState());
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
