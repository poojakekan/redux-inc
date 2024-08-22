import React from 'react';
import ReactDOM from 'react-dom/client'; // Import createRoot
import { Provider } from 'react-redux';
import store from './store';
import App from './App';

// Create the root element
const rootElement = document.getElementById('root');

// Create a root
const root = ReactDOM.createRoot(rootElement);

// Render your app within the Provider and the root
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);


