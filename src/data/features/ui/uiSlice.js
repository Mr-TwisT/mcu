import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  darkMode: false,
  lang: 'en',
};

const uiSlice = createSlice({
  name: 'uiSettings',
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
    },
    switchLang: (state) => {
      state.lang = 'pl';
    },
  },
});

export const { toggleDarkMode, switchLang } = uiSlice.actions;

export default uiSlice.reducer;
