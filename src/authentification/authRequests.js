// authRequests.js
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { baseURL } from './api';

export const signUpUser = createAsyncThunk('auth/signUpUser', async (userData) => {
  try {
    const response = await axios.post(`${baseURL}/users/signup`, userData);
    const { token } = response.data;
    localStorage.setItem('token', token);
    return token;
  } catch (error) {
    throw new Error(error.message);
  }
});

export const loginUser = createAsyncThunk('auth/loginUser', async (userData) => {
  try {
    const response = await axios.post(`${baseURL}/users/login`, userData);
    const { token } = response.data;
    localStorage.setItem('token', token);
    return token;
  } catch (error) {
    throw new Error(error.message);
  }
});

export const logoutUser = createAsyncThunk('auth/logoutUser', async () => {
  try {
    await axios.post(`${baseURL}/users/logout`);
  } catch (error) {
    throw new Error(error.message);
  }
});

export const getCurrentUser = createAsyncThunk('auth/getCurrentUser', async (token) => {
  try {
    const response = await axios.get(`${baseURL}/users/current`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const { email, id } = response.data;
    return { token, userEmail: email, userId: id };
  } catch (error) {
    throw new Error(error.message);
  }
});
