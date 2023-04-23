const useContacts = state => state.phoneBook.contacts.items;
const useFilter = state => state.phoneBook.filter;

export { useContacts, useFilter };
