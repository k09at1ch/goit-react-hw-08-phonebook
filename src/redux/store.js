import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contacts/slice'
import filterReducer from './filter/slice'

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});

export default store;
