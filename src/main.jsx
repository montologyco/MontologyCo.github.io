// main.jsx

import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { Amplify } from 'aws-amplify';
import awsconfig from './assets/aws-exports';

Amplify.configure(awsconfig);

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
