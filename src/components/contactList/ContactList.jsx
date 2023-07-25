import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchContacts,
  deleteContact,
} from '../../redux/contacts/contactsRequests';
import styles from './ContactList.module.css';
function ContactList() {
  const contacts = useSelector(state => state.contacts.items);
  const searchTerm = useSelector(state => state.filter.searchTerm);
  const isLoading = useSelector(state => state.contacts.isLoading);
  const userId = useSelector(state => state.auth.userId);
  const dispatch = useDispatch();
  const [responseContacts, setResponseContacts] = useState([]);

  useEffect(() => {
    dispatch(fetchContacts(userId));
  }, [dispatch, userId]);

  useEffect(() => {
    setResponseContacts(contacts);
  }, [contacts]);

  const handleDeleteContact = async contactId => {
    try {
      await dispatch(deleteContact(contactId));
    } catch (error) {
      console.error('Error deleting contact:', error);
    }
  };

  const formatPhoneNumber = phoneNumber => {
    const index = phoneNumber.indexOf('x');
    if (index !== -1) {
      return phoneNumber.substring(0, index).replace(/\D/g, '');
    }
    return phoneNumber.replace(/\D/g, '');
  };

  const filteredContacts = responseContacts.filter(
    contact =>
      contact.name &&
      contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (filteredContacts.length === 0) {
    return <div>No contacts found.</div>;
  }

  return (
    <div>
      <ul className={styles.list}>
        {filteredContacts.map(contact => (
          <li key={contact.id} className={styles.listItem}>
            {contact.name}
            <br />
            {formatPhoneNumber(contact.number)}
            <button className={styles.button} onClick={() => handleDeleteContact(contact.id)}>
              Delete
            </button>
            <br />
            <br />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ContactList;
