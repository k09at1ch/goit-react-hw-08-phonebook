import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { baseURL } from 'authentification/api';
export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (userId, { getState }) => {
    const token = getState().auth.token;
    try {
      const response = await axios.get(`${baseURL}/contacts`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          userId,
        },
      });
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async contact => {
    try {
      const response = await axios.post(
        'https://connections-api.herokuapp.com/contacts',
        contact
      );
      const newContact = response.data;
      return newContact;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async contactId => {
    try {
      await axios.delete(
        `https://connections-api.herokuapp.com/contacts/${contactId}/`
      );
      return contactId;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);
