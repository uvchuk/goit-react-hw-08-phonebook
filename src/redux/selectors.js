import { createSelector } from '@reduxjs/toolkit';

const selectContacts = state => state.phoneBook.contacts.items;
const selectIsLoading = state => state.phoneBook.contacts.isLoading;
const selectError = state => state.phoneBook.contacts.error;
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
  selectContacts,
  selectIsLoading,
  selectError,
  selectFilter,
  selectFilteredContacts,
};
