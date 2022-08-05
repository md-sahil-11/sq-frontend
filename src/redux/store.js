import { configureStore } from '@reduxjs/toolkit';
import userReducer from './states/user'

const store = configureStore({
  reducer: {
    user : userReducer
  },
});

export default store