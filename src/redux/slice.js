import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { getMathcedThunk } from './thunk';
import { handleFulfilled, handlePending, handleRejected } from './operations';

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

  extraReducers: builder => {
    builder
      .addMatcher(isAnyOf(...getMathcedThunk('pending')), handlePending)
      .addMatcher(isAnyOf(...getMathcedThunk('fulfilled')), handleFulfilled)
      .addMatcher(isAnyOf(...getMathcedThunk('rejected')), handleRejected);
  },
});

export const phoneBookReducer = phoneBookSlice.reducer;

export const { addContact, removeContact, filterContact } =
  phoneBookSlice.actions;
