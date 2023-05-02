import axios from 'axios';
axios.defaults.baseURL = 'https://643d8ea86c30feced8155e77.mockapi.io';

export const fetchContacts = async () => {
  const data = await axios.get('/contacts');
  return data;
};

export const addContact = async contact => {
  const data = await axios.post('/contacts', contact);
  return data;
};

export const deleteContact = async id => {
  const data = await axios.delete(`/contacts/${id}`);
  return data;
};
