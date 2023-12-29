import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const productdataSlice = createSlice({
  name: 'product',
  initialState: { products: [] },
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const totalProductsdata = (state) => state.product.products;

export const { setProducts } = productdataSlice.actions;

export default productdataSlice.reducer;
