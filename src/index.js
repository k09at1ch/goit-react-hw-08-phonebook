import React from 'react';
import { createRoot } from 'react-dom/client';
import App from 'components/App';
import './index.css';
import store from 'redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
const root = document.getElementById('root');

createRoot(root).render(
  <Provider store={store}>
    <BrowserRouter basename='/goit-react-hw-08-phonebook'>
      <App />
    </BrowserRouter>
  </Provider>
);
