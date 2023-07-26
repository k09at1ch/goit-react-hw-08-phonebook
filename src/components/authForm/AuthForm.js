import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signUpUser, loginUser } from '../../redux/auth/authRequests';
import styles from '../../components/contactForm/ContactForm.module.css';
import { Link } from 'react-router-dom';
function AuthForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [logging, setLogging] = useState(true);

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      case 'loginEmail':
        setLoginEmail(value);
        break;
      case 'loginPassword':
        setLoginPassword(value);
        break;
      default:
        break;
    }
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

  const handleLoggingChange = () => {
    setLogging(false);
    navigate('/register');
  };

  const handleLoggingChangeSignIn = () => {
    setLogging(true);
    navigate('/login');
  };

  return (
    <div>
      {logging ? (
        <div>
          <h2>Login</h2>
          <form onSubmit={handleLoginSubmit}>
            <input
              type="email"
              name="loginEmail"
              value={loginEmail}
              onChange={handleChange}
              placeholder="Email"
              className={styles.input}
            />
            <input
              type="password"
              name="loginPassword"
              value={loginPassword}
              onChange={handleChange}
              placeholder="Password"
              className={styles.input}
            />
            <button className={styles.button} type="submit">
              Login
            </button>
          </form>
          <Link to='/register' className={styles.button} onClick={handleLoggingChange}>
            or Sign Up
          </Link>
        </div>
      ) : (
        <div>
          <h2>Register</h2>
          <form onSubmit={handleSignUpSubmit}>
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
              placeholder="Name"
              className={styles.input}
            />
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              placeholder="Email"
              className={styles.input}
            />
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              placeholder="Password"
              className={styles.input}
            />
            <button type="submit" className={styles.button}>
              Sign Up
            </button>
          </form>
          <Link to='/login' className={styles.button} onClick={handleLoggingChangeSignIn}>
            or Sign In
          </Link>
        </div>
      )}
    </div>
  );
}

export default AuthForm;
