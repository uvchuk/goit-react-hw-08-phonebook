import { configureStore } from '@reduxjs/toolkit';
import { phoneBookReducer } from './slice';

export const store = configureStore({
  reducer: {
    phoneBook: phoneBookReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActionPaths: [
          'meta.arg',
          'payload.headers',
          'payload.config',
          'payload.request',
        ],
      },
    }),
});
