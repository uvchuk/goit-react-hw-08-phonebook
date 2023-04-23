import axios from 'axios';
axios.defaults.baseURL = 'https://643d8ea86c30feced8155e77.mockapi.io';

export const getContacts = async () => {
  const data = await axios.get('/contacts');
  return data;
};
