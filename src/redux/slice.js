import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  addContactThunk,
  deleteContactThunk,
  fetchContactsThunk,
  getMathcedThunk,
  getProfileThunk,
  loginThunk,
  logoutThunk,
  signUpThunk,
} from './operations';
import {
  handleCreateFulfilled,
  handleDeleteFulfilled,
  handleFulfilled,
  handleGetContactsFulfilled,
  handleGetProfileFulfilled,
  handleLoginFulfilled,
  handleLogoutFulfilled,
  handlePending,
  handleRejected,
  handleSignUpFulfilled,
} from './reducers';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';

const STATUS = {
  PENDING: 'pending',
  REJECTED: 'rejected',
  FULFILLED: 'fulfilled',
};

const phoneBookSlice = createSlice({
  name: 'phoneBook',
  initialState: {
    user: {
      isLoggedIn: false,
      name: null,
      email: null,
      token: null,
    },
    contacts: {
      items: [],
    },
    isLoading: false,
    error: null,
    filter: '',
  },
  reducers: {
    filterContact(state, action) {
      if (action.payload.trim() === '') state.filter = '';
      else {
        state.filter = action.payload;
      }
    },
  },
  extraReducers: builder => {
    const { PENDING, REJECTED, FULFILLED } = STATUS;
    builder
      .addCase(signUpThunk[`${FULFILLED}`], handleSignUpFulfilled)
      .addCase(loginThunk[`${FULFILLED}`], handleLoginFulfilled)
      .addCase(logoutThunk[`${FULFILLED}`], handleLogoutFulfilled)
      .addCase(getProfileThunk[`${FULFILLED}`], handleGetProfileFulfilled)
      .addCase(fetchContactsThunk[`${FULFILLED}`], handleGetContactsFulfilled)
      .addCase(addContactThunk[`${FULFILLED}`], handleCreateFulfilled)
      .addCase(deleteContactThunk[`${FULFILLED}`], handleDeleteFulfilled)
      .addMatcher(isAnyOf(...getMathcedThunk(PENDING)), handlePending)
      .addMatcher(isAnyOf(...getMathcedThunk(REJECTED)), handleRejected)
      .addMatcher(isAnyOf(...getMathcedThunk(FULFILLED)), handleFulfilled);
  },
});

const persistConfig = {
  key: 'phoneBook',
  storage,
  whitelist: ['user'],
};

export const phoneBookReducer = persistReducer(
  persistConfig,
  phoneBookSlice.reducer
);

export const { filterContact } = phoneBookSlice.actions;
