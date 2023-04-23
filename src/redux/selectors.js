const selectContacts = state => state.phoneBook.contacts.items;
const selectIsLoading = state => state.phoneBook.contacts.isLoading;
const selectError = state => state.phoneBook.contacts.error;
const selectFilter = state => state.phoneBook.filter;

export { selectContacts, selectIsLoading, selectError, selectFilter };
