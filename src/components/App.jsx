import React from 'react';
import AuthPage from 'authentification/AuthPage';
import { Route, useNavigate } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Page from './page/Page';
import RedictWhenLoading from './redict/Redict';
import { useEffect } from 'react';
//логіка перевірки входу виконується у App, бо немає елемента, що завжди рендериться, крім App.jsx. 
function App() {
  const navigate = useNavigate()
  useEffect(() => {
   const token = localStorage.getItem('token');
    const hasToken = !!token;
    const currentPath = window.location.pathname;
    if (currentPath === '/goit-react-hw-08-phonebook/contacts' && !hasToken) {
      navigate('/login');
    }
    if (currentPath === '/goit-react-hw-08-phonebook/register') {
      navigate('/login');
    }
  }, []);

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
