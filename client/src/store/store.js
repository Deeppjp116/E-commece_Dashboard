import { configureStore } from '@reduxjs/toolkit';
import featuresReducer from '../features/featuresSclice';
import clientdata from '../features/clientdata';
import orderData from '../features/ordersData';

export default configureStore({
  reducer: {
    freautre: featuresReducer,
    client: clientdata,
    order: orderData,
  },
});
