import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { AccountContextProvider } from './context/AccountContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <AccountContextProvider>
    <App />
    </AccountContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

