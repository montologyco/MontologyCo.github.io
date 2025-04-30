// main.jsx

import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { Amplify } from 'aws-amplify';
import AWSconfig from './assets/aws-exports';

Amplify.configure(AWSconfig);
console.log("AWS Config:", AWSconfig);

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
