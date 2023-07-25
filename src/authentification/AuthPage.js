import React, { useEffect } from 'react';
import AuthForm from './AuthForm';
import UserMenu from '../components/userMenu/UserMenu';
import { useSelector, useDispatch } from 'react-redux';
import { getCurrentUser } from './authRequests';
import { fetchContacts } from '../redux/contacts/contactsRequests';

function AuthPage() {
  const token = useSelector((state) => state.auth.token);
  const userId = useSelector((state) => state.auth.userId);
  const dispatch = useDispatch();

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken && !token) {
      dispatch(getCurrentUser(storedToken));
    }
  }, [token, dispatch]);

  useEffect(() => {
    if (userId) {
      dispatch(fetchContacts(userId));
    }
  }, [userId, dispatch]);

  return (
    <div>
      {token ? <UserMenu /> : <AuthForm />}
    </div>
  );
}

export default AuthPage;