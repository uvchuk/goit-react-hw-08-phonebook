import axios from 'axios';

const publicInstance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

const privateInstance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

export const setToken = token => {
  privateInstance.defaults.headers.common['Authorization'] = token;
};

const dellToken = () => {
  delete privateInstance.defaults.headers.common['Authorization'];
};

export const signUp = async profile => {
  return await publicInstance.post('/users/signup', profile);
};

export const login = async profile => {
  const { data } = await publicInstance.post('/users/login', profile);
  setToken(`Bearer ${data.token}`);
  return data;
};

export const logout = async () => {
  return await privateInstance.post('/users/logout').then(dellToken());
};

export const getProfile = async () => {
  const { data } = await privateInstance.get('/users/current');
  return data;
};

export const fetchContacts = async () => {
  const { data } = await privateInstance.get('/contacts');
  return data;
};

export const addContact = async contact => {
  const { data } = await privateInstance.post('/contacts', contact);
  return data;
};

export const deleteContact = async id => {
  const { data } = await privateInstance.delete(`/contacts/${id}`);
  return data;
};
