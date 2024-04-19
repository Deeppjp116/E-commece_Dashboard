import { configureStore } from '@reduxjs/toolkit';
import featuresReducer from '../features/featuresSclice';
import clientdata from '../features/clientdata';
import orderData from '../features/ordersData';
import productData from '../features/productdata';
import customersData from '../features/customerdatamodle';
import salesData from '../features/salesdatamodle';
import forgetData from '../features/forgetpassword';

export default configureStore({
  reducer: {
    freautre: featuresReducer,
    client: clientdata,
    order: orderData,
    product: productData,
    customer: customersData,
    sales: salesData,
    forget: forgetData,
  },
});
