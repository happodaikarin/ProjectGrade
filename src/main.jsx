// main.jsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) si estás usando TypeScript

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);















