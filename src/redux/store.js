import { configureStore } from '@reduxjs/toolkit';
import { phoneBookReducer } from './slice';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

export const store = configureStore({
  reducer: {
    phoneBook: phoneBookReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        ignoredActionPaths: [
          'meta.arg',
          'payload.headers',
          'payload.config',
          'payload.request',
        ],
      },
    }),
});

export const persistor = persistStore(store);
