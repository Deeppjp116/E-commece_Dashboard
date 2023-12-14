import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const orderSlice = createSlice({
  name: 'order',
  initialState: { data: null, loading: false, error: null },
  reducers: {
    fetchDataStart: (state) => {
      state.loading = true;
    },
    fetchDataSuccess: (state, action) => {
      state.data = action.payload;
      state.loading = false;
      state.error = null;
    },
    fetchDataFailure: (state, action) => {
      state.data = null;
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchDataStart, fetchDataSuccess, fetchDataFailure } =
  orderSlice.actions;

export const fetchOrderData = () => async (dispatch) => {
  try {
    dispatch(fetchDataStart());

    // Make your API call using axios or any other HTTP client library
    const response = await axios.get('http://localhost:3000/orders');
    console.log('Data recived');
    console.log(response);
    dispatch(fetchDataSuccess(response.data));
  } catch (error) {
    dispatch(fetchDataFailure(error.message));
  }
};

export default orderSlice.reducer;
