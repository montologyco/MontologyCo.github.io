// main.jsx

import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { Amplify } from 'aws-amplify';
import resourcesConfig from './assets/aws-exports';
import libraryOptions from './assets/aws-exports';

Amplify.configure({ ...resourcesConfig }, { ...libraryOptions });
// Amplify.configure(awsconfig);
console.log("AWS Config:", resourcesConfig);
console.log("AWS Config:", libraryOptions);

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
