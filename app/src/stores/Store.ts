import { configureStore } from '@reduxjs/toolkit';
import { appReducer } from './AppStore';
import { messageReducer } from './MessageStore';

const store = configureStore({
  reducer: {
    app: appReducer,
    message: messageReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export default store;
