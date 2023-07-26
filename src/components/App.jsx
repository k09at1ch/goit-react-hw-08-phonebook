import React from 'react';
import AuthPage from 'components/authPage/AuthPage';
import { Route, useNavigate } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Page from './page/Page';
import RedictWhenLoading from './redict/Redict';
import { useEffect } from 'react'; 
function App() {




  //_____________Це треба, щоб якщо юзер не ввійшов і прописав /contacts, то посилання було ..../login_____//
  const navigate = useNavigate()
  const currentPath = window.location.pathname;
  useEffect(() => {
   const token = localStorage.getItem('token');
    const hasToken = !!token;
    
    if (currentPath === '/goit-react-hw-08-phonebook/contacts' && !hasToken) {
      navigate('/login');
    }
  }, [currentPath, navigate]);

//__________________________________________________________________________________________________//


  return (
    <div>
      <Routes>
        <Route path="/" element={<RedictWhenLoading/>} />
        <Route path="/register" element={<AuthPage />} />
        <Route path="/login" element={<AuthPage />} />
        <Route path="/contacts" element={<Page />} />
      </Routes>
    </div>
  );
}

export default App;
