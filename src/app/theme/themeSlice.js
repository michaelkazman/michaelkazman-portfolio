import { createSlice } from "@reduxjs/toolkit";
import { lightTheme, darkTheme } from "../../static/theme";

const getThemeFromID = (id) => (id === "light" ? lightTheme : darkTheme);

const getInitialState = () => {
  const id = localStorage.getItem("theme") || "light"; // specify either "light" or "dark"
  return {
    id,
    theme: getThemeFromID(id),
  };
};

const themeSlice = createSlice({
  name: "theme",
  initialState: getInitialState(),
  reducers: {
    themeUpdated(state) {
      const id = state.id === "light" ? "dark" : "light";
      localStorage.setItem("theme", id);
      return {
        id,
        theme: getThemeFromID(id),
      };
    },
  },
});

export const { themeUpdated } = themeSlice.actions;

export const selectThemeId = (state) => state.theme.id;

export const selectTheme = (state) => state.theme.theme;

export default themeSlice.reducer;
