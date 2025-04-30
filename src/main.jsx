// main.jsx

import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { Amplify } from 'aws-amplify';
import AWSconfig from './AWS/aws-config';
import AuthChecker from './AWS/aws-authChecker';

Amplify.configure(AWSconfig);

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <AuthChecker>
      <App />
    </AuthChecker>
  </React.StrictMode>
);
