import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Main from './main/main';
import { NavigationProvider } from './components/navigationProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavigationProvider>
      <Main />
    </NavigationProvider>
  </React.StrictMode>
);
