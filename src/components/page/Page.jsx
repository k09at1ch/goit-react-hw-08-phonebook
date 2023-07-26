import React from 'react';
import AuthPage from 'components/authPage/AuthPage';
import ContactForm from '../contactForm/ContactForm';
import ContactList from '../contactList/ContactList';
import UserMenu from 'components/userMenu/UserMenu';
import { useSelector } from 'react-redux';
import Filter from '../filter/Filter';
import styles from './Page.module.css';

function Page() {
  const token = useSelector((state) => state.auth.token);



  return (
    <div className={styles.container}>
      <h1>Phonebook</h1>

      {token ? (
        <div className={styles.container}>
          <UserMenu />
          <ContactForm />
          <Filter />
          <ContactList />
        </div>
      ) : (
        <AuthPage />
      )}
    </div>
  );
}

export default Page;
