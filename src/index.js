import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Menu from './Componets/Menu/header';
import SectionPrincipal from './Componets/SectionPrincipal/SectionOne';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Menu />
    <App />
  </React.StrictMode>
);


