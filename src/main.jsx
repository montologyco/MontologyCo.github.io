// main.jsx

import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { Amplify } from 'aws-amplify';
import awsconfig from '../aws-exports.js';

function Main() {
  const [isConfigured, setIsConfigured] = useState(false);

  useEffect(() => {
    Amplify.configure(awsconfig);
    setIsConfigured(true);
    console.log("Amplify configured successfully!");
  }, []);

  if (!isConfigured) {
    return <div>Loading...</div>;
  }

  return (
    <App />
  );
}

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
