import { configureStore } from '@reduxjs/toolkit';
import rentCalculatorReducer from './slices/rentCalculatorSlice';
import errorReducer from './slices/errorSlice';

const store = configureStore({
  reducer: {
    rentCalculator: rentCalculatorReducer,
    error: errorReducer
  }
});

export default store;

