
// store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/auth/authSlice';
import deviceReducer from './features/devices/deviceSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    devices: deviceReducer,
  },
});

export default store;