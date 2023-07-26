import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../redux/auth/authRequests';
import { Link, useNavigate } from 'react-router-dom';
import style from './UserMenu.module.css';

function UserMenu() {
  const dispatch = useDispatch();
  const userEmail = useSelector(state => state.auth.userEmail);
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await dispatch(logoutUser());
      localStorage.removeItem('token');
    } catch (error) {
      console.error('Logout error:', error.message);
    }
    navigate('/login');
  };

  return (
    <div>
      <p>{userEmail}</p>
      <Link to='/login' className={style.button} onClick={handleLogout}>
        Logout
      </Link>
    </div>
  );
}

export default UserMenu;
