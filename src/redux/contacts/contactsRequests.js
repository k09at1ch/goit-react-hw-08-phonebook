import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchContacts = createAsyncThunk('contacts/fetchContacts', async () => {
  try {
    const response = await axios.get('https://64b0f877062767bc48256aba.mockapi.io/contacts');
    const data = response.data;
    const contacts = data.map(({ id, name, phone }) => ({
      id,
      name,
      phone,
    }));
    return contacts;
  } catch (error) {
    throw new Error(error.message);
  }
});

export const addContact = createAsyncThunk('contacts/addContact', async (contact) => {
  try {
    const response = await axios.post('https://64b0f877062767bc48256aba.mockapi.io/contacts', contact);
    const newContact = response.data;
    return newContact;
  } catch (error) {
    throw new Error(error.message);
  }
});

export const deleteContact = createAsyncThunk('contacts/deleteContact', async (contactId) => {
  try {
    await axios.delete(`https://64b0f877062767bc48256aba.mockapi.io/contacts/${contactId}/`);
    return contactId;
  } catch (error) {
    throw new Error(error.message);
  }
});
