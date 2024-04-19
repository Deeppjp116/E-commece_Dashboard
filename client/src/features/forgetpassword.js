import { createSlice } from '@reduxjs/toolkit';

export const forgetSclice = createSlice({
  name: 'forget',
  initialState: { otp: '', email: '', set: '' },
  reducers: {
    forgetPasswordEmail: (state, action) => {
      state.email = action.payload;
    },
    forgetPasswordOTP: (state, action) => {
      state.otp = action.payload;
    },
    forgetsetPage: (state, action) => {
      state.otp = action.payload;
    },
  },
});

export const forgetemail = (state) => state.forget.email;
export const forgetOTP = (state) => state.forget.otp;
export const setPage = (state) => state.forget.set;
export const { forgetPasswordOTP, forgetPasswordEmail, forgetsetPage } =
  forgetSclice.actions;

export default forgetSclice.reducer;
