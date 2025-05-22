import { createSlice } from "@reduxjs/toolkit";

const getDefaultLocale = JSON.parse(localStorage.getItem("defaultLocale")) || {
  locale: "en",
  label: "English",
  direction: 'ltr'
};
const initialState = {
  defaultAppLocale: getDefaultLocale,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    switchLocale: (state, action) => {
      const selectedLocale = action.payload;
      localStorage.setItem("defaultLocale", JSON.stringify(selectedLocale));
      state.defaultAppLocale = selectedLocale;
    },
  },
});


export const { switchLocale } = appSlice.actions

export default appSlice.reducer;