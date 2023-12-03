import { configureStore } from '@reduxjs/toolkit';
import featuresReducer from '../features/featuresSclice';
import clientdata from '../features/clientdata';

export default configureStore({
  reducer: {
    freautre: featuresReducer,
    client: clientdata,
  },
});
