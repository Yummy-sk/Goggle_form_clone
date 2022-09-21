import { configureStore } from '@reduxjs/toolkit';
import formReducer from './formSlice';
import resultReducer from './resultSlice';

export const store = configureStore({
  reducer: {
    form: formReducer,
    result: resultReducer,
  },
});
