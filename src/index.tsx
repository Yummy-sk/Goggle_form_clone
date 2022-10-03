import React from 'react';
import ReactDOM from 'react-dom/client';
import AppProvider from 'providers';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <AppProvider>
    <App />
  </AppProvider>,
);
