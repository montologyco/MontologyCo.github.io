// main.jsx

import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { Amplify } from 'aws-amplify';

// AWS Amplify Configuration
Amplify.configure({
  Auth: {
    region: 'us-east-1', // Your region
    userPoolId: 'us-east-1_vwGK8wsAx', // Your Cognito User Pool ID
    userPoolWebClientId: 'pmbfufdc2c5qnf8qjhaj58p7u', // Your Cognito App Client ID (found in your Cognito app client settings)
    mandatorySignIn: true, // If you want to enforce sign-in for your app
    authenticationFlowType: 'USER_PASSWORD_AUTH', // User authentication type (you can adjust this based on your use case)
  },
});

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
