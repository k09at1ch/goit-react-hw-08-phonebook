// api.js
import axios from 'axios';

const baseURL = 'https://connections-api.herokuapp.com';

const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
};

export { baseURL, setAuthToken };
