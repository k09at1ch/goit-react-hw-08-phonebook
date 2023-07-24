import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contacts/slice';
import filterReducer from './filter/slice';
import authReducer from './auth/slice';
import { getCurrentUser } from 'authentification/authRequests';

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
    auth: authReducer,
  },
});

const storedToken = localStorage.getItem('token');
if (storedToken) {
  store.dispatch(getCurrentUser(storedToken));
}

export default store;
