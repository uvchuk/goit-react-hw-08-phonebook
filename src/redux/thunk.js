import { createAsyncThunk } from '@reduxjs/toolkit';
import { getContacts } from 'services/ContactsAPI';

export const fetchContactsThunk = createAsyncThunk(
  'contacts/fetchAll',
  async () => {
    const response = await getContacts();
    return response;
  }
);

const userThunks = [fetchContactsThunk];

export const getMathcedThunk = status => userThunks.map(el => el[status]);
