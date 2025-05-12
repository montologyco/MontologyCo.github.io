// main.jsx

import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { Amplify } from 'aws-amplify';
import AWSuserpool from './server/amplify/aws-amplify-config.js';

const container = document.getElementById('root');
const root = createRoot(container);

Amplify.configure(AWSuserpool);

root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);
