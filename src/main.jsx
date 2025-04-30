// main.jsx

import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { Amplify } from 'aws-amplify';
import AWSconfig from './AWS/aws-config';

const container = document.getElementById('root');
const root = createRoot(container);

Amplify.configure(AWSconfig);
const [isAuthenticated, setIsAuthenticated] = useState(null);

root.render(
  <React.StrictMode>
      <App
        isAuthenticated={isAuthenticated}
        setIsAuthenticated={setIsAuthenticated}
      />
  </React.StrictMode>
);