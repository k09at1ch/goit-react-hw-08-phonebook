import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/contactsRequests';
import styles from './ContactForm.module.css';

function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNumber(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!name || !number) {
      return;
    }

    const newContact = {
      name,
      number,
    };

    try {
      await dispatch(addContact(newContact));
      setName('');
      setNumber('');
    } catch (error) {
      console.error('Error adding contact:', error.message);
    }
  };

  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          placeholder="Name"
          className={styles.input}
        />
        <input
          type="text"
          value={number}
          onChange={handleNumberChange}
          placeholder="Number"
          className={styles.input}
        />
        <button type="submit" className={styles.button}>Add Contact</button>
      </form>
    </div>
  );
}

export default ContactForm;
