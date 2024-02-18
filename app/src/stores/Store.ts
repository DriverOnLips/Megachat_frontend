import { configureStore } from '@reduxjs/toolkit';
import { appReducer } from './AppStore';

const store = configureStore({
  reducer: {
    app: appReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export default store;
