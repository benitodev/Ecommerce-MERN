import { PreloadedState, configureStore } from '@reduxjs/toolkit';

import { apiSlice } from './api/apiSlice';
import authSlice from './login/authSlice';
import wishlistSlice from './wishlist/wishlistSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    wishlist: wishlistSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppStore = ReturnType<typeof store.replaceReducer>;
export type AppDispatch = typeof store.dispatch;
// setupListeners(store.dispatch);
