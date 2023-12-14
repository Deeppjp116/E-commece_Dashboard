import { createSlice } from '@reduxjs/toolkit';

export const featuresSclice = createSlice({
  name: 'feature',
  initialState: {
    currentMode: 'Light',
    currentColor: '#79afd4',
    userProfileclick: false,
    activeMenu: true,
    screenSize: undefined,
    themeSettings: false,
    sidebar: true,
    userProfile: 'Deep',
  },
  reducers: {
    setUserName: (state, action) => {
      state.userProfile = action.payload;
    },
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
      state.userProfileclick = action.payload;
    },
    setsidebar: (state, action) => {
      state.sidebar = action.payload;
    },
  },
});

export const selectfeature = (state) => state.freautre.currentColor;
export const selectTheme = (state) => state.freautre.themeSettings;
export const selectMenu = (state) => state.freautre.activeMenu;
export const selectClick = (state) => state.freautre.userProfileclick;
export const selectscreenSize = (state) => state.freautre.screenSize;
export const selectMode = (state) => state.freautre.currentMode;
export const sideani = (state) => state.freautre.sidebar;
export const UserProfilename = (state) => state.freautre.userProfile;

export const {
  setsidebar,
  handleClick,
  setThemeSettings,
  setColor,
  setMode,
  setMenu,
  setUserName,
  setscreenSize,
} = featuresSclice.actions;

export default featuresSclice.reducer;
