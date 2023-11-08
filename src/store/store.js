import { configureStore } from '@reduxjs/toolkit';
import featuresReducer from '../features/featuresSclice';

export default configureStore({
  reducer: {
    freautre: featuresReducer,
  },
});
