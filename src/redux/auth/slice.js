// authSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { signUpUser,  loginUser, logoutUser, getCurrentUser } from 'authentification/authRequests';
import { setAuthToken } from 'authentification/api';
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: null,
    userEmail: null,
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signUpUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(signUpUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.token = action.payload;
        setAuthToken(action.payload); // Встановлюємо токен у заголовок при успішній реєстрації
      })
      .addCase(signUpUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.token = action.payload;
        setAuthToken(action.payload); // Встановлюємо токен у заголовок при успішному вході
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(logoutUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.isLoading = false;
        state.token = null;
        state.userEmail = null;
        setAuthToken(null); // Видаляємо токен з заголовка при виході
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(getCurrentUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getCurrentUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.token = action.payload.token;
        state.userEmail = action.payload.userEmail;
        setAuthToken(action.payload.token); // Встановлюємо токен у заголовок при отриманні даних про користувача
      })
      .addCase(getCurrentUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default authSlice.reducer;
