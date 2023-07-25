import { useNavigate, useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { signUpUser, loginUser, logoutUser } from './authRequests';
import styles from '../components/contactForm/ContactForm.module.css'
function AuthForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [logging, setLogging] = useState(true);
  const handleNameChange = event => {
    setName(event.target.value);
  };

  const handleEmailChange = event => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = event => {
    setPassword(event.target.value);
  };

  const handleLoginEmailChange = event => {
    setLoginEmail(event.target.value);
  };

  const handleLoginPasswordChange = event => {
    setLoginPassword(event.target.value);
  };

  const handleSignUpSubmit = async event => {
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
      return;
    }
    navigate('/contacts');
  };

  const handleLoginSubmit = async event => {
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
      return;
    }
    navigate('/contacts');
  };
  const handleLoggingChange=()=>{
    setLogging(false)
    navigate('/register')
  }
  const handleLoggingChangeSignIn=()=>{
    setLogging(true)
    navigate('/login')
  }
  return (
    <div>
      
      {logging ? (
        <div>
          <h2>Login</h2>
          <form onSubmit={handleLoginSubmit}>
            <input
              type="email"
              value={loginEmail}
              onChange={handleLoginEmailChange}
              placeholder="Email"
              className={styles.input}
            />
            <input
              type="password"
              value={loginPassword}
              onChange={handleLoginPasswordChange}
              placeholder="Password"
              className={styles.input}
            />
            <button className={styles.button} type="submit">Login</button>
          </form>
          <button className={styles.button} onClick={handleLoggingChange}>or Sign Up</button>
        </div>
      ) : (
        <div>
          <h2>Register</h2>
        <form onSubmit={handleSignUpSubmit}>
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            placeholder="Name"
            className={styles.input}
          />
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Email"
            className={styles.input}
          />
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Password"
            className={styles.input}
          />
          <button type="submit"  className={styles.button}>Sign Up</button>
        </form>
        <button className={styles.button} onClick={handleLoggingChangeSignIn}>or Sign In</button>
        </div>
      )}
    </div>
  );
}

export default AuthForm;
