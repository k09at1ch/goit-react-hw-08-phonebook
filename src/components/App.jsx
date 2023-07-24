// App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from 'redux/store';
import AuthPage from 'authentification/AuthPage';
import ContactForm from './contactForm/ContactForm';
import ContactList from './contactList/ContactList';
import UserMenu from 'authentification/UserMenu';
import { useSelector } from 'react-redux';
import Filter from './filter/Filter';
import { baseURL } from 'authentification/api';
import axios from 'axios';
function App() {
  const token = useSelector((state) => state.auth.token);
  axios.get(baseURL+'/contacts')
  .then((response) => {
    console.log(response);
  })

  return (
    <Provider store={store}>
      <div>
        <h1>Phonebook</h1>
        {token ? (
          <>
            <UserMenu />
            <ContactForm />
            <Filter/>
            <ContactList />
            
          </>
        ) : (
          
          <AuthPage />
        )}
      </div>
      
    </Provider>
  );
}

export default App;
