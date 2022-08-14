import {configureStore} from '@reduxjs/toolkit';
import {userSlice} from './reducers/UserSlice';

export const store = configureStore({
  reducer: {
    shop: userSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
