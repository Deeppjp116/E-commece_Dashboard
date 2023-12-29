import { createSlice } from '@reduxjs/toolkit';

export const salesSclice = createSlice({
  name: 'sales',
  initialState: {
    salesdata: [],
  },
  reducers: {
    setsalesdata: (state, action) => {
      return { ...state, salesdata: action.payload };
    },
  },
});

export const selectsalesdata = (state) => state.sales.salesdata;

export const { setsalesdata } = salesSclice.actions;

export default salesSclice.reducer;
