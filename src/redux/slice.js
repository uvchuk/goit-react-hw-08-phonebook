import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  addContactThunk,
  deleteContactThunk,
  fetchContactsThunk,
  getMathcedThunk,
} from './thunk';
import {
  handleCreateFulfilled,
  handleDeleteFulfilled,
  handleFulfilled,
  handleGetFulfilled,
  handlePending,
  handleRejected,
} from './operations';

const STATUS = {
  PENDING: 'pending',
  REJECTED: 'rejected',
  FULFILLED: 'fulfilled',
};

const phoneBookSlice = createSlice({
  name: 'phoneBook',
  initialState: {
    contacts: {
      items: [],
      isLoading: false,
      error: null,
    },
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
      .addCase(fetchContactsThunk[`${FULFILLED}`], handleGetFulfilled)
      .addCase(addContactThunk[`${FULFILLED}`], handleCreateFulfilled)
      .addCase(deleteContactThunk[`${FULFILLED}`], handleDeleteFulfilled)
      .addMatcher(isAnyOf(...getMathcedThunk(PENDING)), handlePending)
      .addMatcher(isAnyOf(...getMathcedThunk(REJECTED)), handleRejected)
      .addMatcher(isAnyOf(...getMathcedThunk(FULFILLED)), handleFulfilled);
  },
});

export const { filterContact } = phoneBookSlice.actions;
export const phoneBookReducer = phoneBookSlice.reducer;

