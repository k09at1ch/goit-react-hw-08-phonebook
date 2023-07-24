import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signUpUser, loginUser, logoutUser } from './authRequests';

function AuthForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLoginEmailChange = (event) => {
    setLoginEmail(event.target.value);
  };

  const handleLoginPasswordChange = (event) => {
    setLoginPassword(event.target.value);
  };

  const handleLogout = async () => {
    try {
      await dispatch(logoutUser());
      localStorage.removeItem('token');
      setName('');
      setLoginEmail('');
      setLoginPassword('');
    } catch (error) {
      console.error('Logout error:', error.message);
    }
  };

  const handleSignUpSubmit = async (event) => {
    event.preventDefault();

    if (!email || !password || !name) {
      return;
    }

    const authData = {
      email,
      password,
      name,
    };

    try {
      await dispatch(signUpUser(authData));
      setName('');
      setEmail('');
      setPassword('');
    } catch (error) {
      console.error('Signup error:', error.message);
    }
  };

  const handleLoginSubmit = async (event) => {
    event.preventDefault();

    if (!loginEmail || !loginPassword) {
      return;
    }

    const authData = {
      email: loginEmail,
      password: loginPassword,
    };

    try {
      await dispatch(loginUser(authData));
      setLoginEmail('');
      setLoginPassword('');
    } catch (error) {
      console.error('Login error:', error.message);
    }
  };

  return (
    <div>
      <h2>{token ? 'Logged In' : 'Login or Sign Up'}</h2>
      {token ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <form onSubmit={handleSignUpSubmit}>
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            placeholder="Name"
          />
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Email"
          />
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Password"
          />
          <button type="submit">Sign Up</button>
        </form>
      )}

      {!token && (
        <form onSubmit={handleLoginSubmit}>
          <input
            type="email"
            value={loginEmail}
            onChange={handleLoginEmailChange}
            placeholder="Email"
          />
          <input
            type="password"
            value={loginPassword}
            onChange={handleLoginPasswordChange}
            placeholder="Password"
          />
          <button type="submit">Login</button>
        </form>
      )}
    </div>
  );
}

export default AuthForm;
