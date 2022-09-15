import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import './assets/styles/css/styles.min.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
reportWebVitals();
