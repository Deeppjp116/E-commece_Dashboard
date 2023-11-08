import { createSlice } from '@reduxjs/toolkit';

const initialStates = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

export const featuresSclice = createSlice({
  name: 'feature',
  initialState: {
    ...initialStates,
    currentMode: 'Light',
    currentColor: '#79afd4',
    isClicked: initialStates,
    activeMenu: true,
    screenSize: undefined,
    themeSettings: false,
    sidebar: true,
  },
  reducers: {
    setThemeSettings: (state, action) => {
      state.themeSettings = action.payload;
    },
    setscreenSize: (state, action) => {
      state.screenSize = action.payload;
    },
    setMenu: (state, action) => {
      state.activeMenu = action.payload;
    },
    setMode: (state, action) => {
      state.currentMode = action.payload;
      localStorage.setItem('themeMode', action.payload);
    },
    setColor: (state, action) => {
      state.currentColor = action.payload;
      localStorage.setItem('ColorMode', action.payload);
    },
    handleClick: (state, action) => {
      state.isClicked = { ...initialStates, [action.payload]: true };
    },
    setsidebar: (state, action) => {
      state.sidebar = action.payload;
    },
  },
});

export const selectfeature = (state) => state.freautre.currentColor;
export const selectTheme = (state) => state.freautre.themeSettings;
export const selectMenu = (state) => state.freautre.activeMenu;
export const selectClick = (state) => state.freautre.isClicked;
export const selectscreenSize = (state) => state.freautre.screenSize;
export const selectMode = (state) => state.freautre.currentMode;
export const sideani = (state) => state.freautre.sidebar;

export const {
  setsidebar,
  handleClick,
  setThemeSettings,
  setColor,
  setMode,
  setMenu,
  setscreenSize,
} = featuresSclice.actions;

export default featuresSclice.reducer;
