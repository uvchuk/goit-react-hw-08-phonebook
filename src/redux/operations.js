import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  deleteContact,
  login,
  logout,
  signUp,
  getProfile,
} from 'services/ContactsAPI';

export const getProfileThunk = createAsyncThunk('/users/current', async () => {
  const response = await getProfile();
  console.log('response :>> ', response);
  return response;
});

export const signUpThunk = createAsyncThunk('/users/signup', async profile => {
  const response = await signUp(profile);
  return response;
});

export const loginThunk = createAsyncThunk('/users/login', async profile => {
  const response = await login(profile);
  return response;
});

export const logoutThunk = createAsyncThunk('/users/logout', async () => {
  const response = await logout();
  return response;
});

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

const userThunks = [
  getProfileThunk,
  signUpThunk,
  loginThunk,
  logoutThunk,
  fetchContactsThunk,
  addContactThunk,
  deleteContactThunk,
];

export const getMathcedThunk = status => userThunks.map(el => el[status]);
