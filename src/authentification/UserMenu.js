import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from './authRequests';

function UserMenu() {
  const dispatch = useDispatch();
  const userEmail = useSelector((state) => state.auth.userEmail);

  const handleLogout = async () => {
    try {
      await dispatch(logoutUser());
      localStorage.removeItem('token');
    } catch (error) {
      console.error('Logout error:', error.message);
    }
  };

  return (
    <div>
      <p>{userEmail}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default UserMenu;
