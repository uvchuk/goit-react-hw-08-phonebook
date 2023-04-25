import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from 'services/ContactsAPI';

export const fetchContactsThunk = createAsyncThunk(
  'contacts/fetchAll',
  async () => {
    const response = await fetchContacts();
    return response;
  }
);

export const addContactThunk = createAsyncThunk(
  'contacts/addContact',
  async contact => {
    const response = await addContact(contact);
    return response;
  }
);

export const deleteContactThunk = createAsyncThunk(
  'contacts/deleteContact',
  async id => {
    const response = await deleteContact(id);
    return response;
  }
);

const userThunks = [fetchContactsThunk, addContactThunk, deleteContactThunk];

export const getMathcedThunk = status => userThunks.map(el => el[status]);
