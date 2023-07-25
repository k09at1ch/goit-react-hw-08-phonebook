import React from 'react';
import AuthPage from 'authentification/AuthPage';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Page from './page/Page';
import RedictWhenLoading from './redict/Redict';
function App() {
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
