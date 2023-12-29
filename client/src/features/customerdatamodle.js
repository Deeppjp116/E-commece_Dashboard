import { createSlice } from '@reduxjs/toolkit';

export const customersSclice = createSlice({
  name: 'customer',
  initialState: {
    customers: [],
  },
  reducers: {
    setcustomerdata: (state, action) => {
      return { ...state, customers: action.payload };
    },
  },
});

export const selectcustomers = (state) => state.customer.customers;

export const { setcustomerdata } = customersSclice.actions;

export default customersSclice.reducer;
