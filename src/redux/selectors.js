import { createSelector } from '@reduxjs/toolkit';

const selectIsLoggedIn = state => state.phoneBook.user.isLoggedIn;
const selectUserName = state => state.phoneBook.user.name;
const selectUserEmail = state => state.phoneBook.user.email;
const selectToken = state => state.phoneBook.user.token;
const selectContacts = state => state.phoneBook.contacts.items;
const selectIsLoading = state => state.phoneBook.isLoading;
const selectError = state => state.phoneBook.error;
const selectFilter = state => state.phoneBook.filter;

const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);

export {
  selectIsLoggedIn,
  selectUserName,
  selectUserEmail,
  selectToken,
  selectContacts,
  selectIsLoading,
  selectError,
  selectFilter,
  selectFilteredContacts,
};
