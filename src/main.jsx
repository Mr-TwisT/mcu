import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App.jsx';

import { store } from './data/store';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
