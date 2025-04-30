// main.jsx

import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { AuthProvider } from 'react-oidc-context';

const cognitoAuthConfig = {
  authority: 'https://cognito-idp.us-east-1.amazonaws.com/us-east-1_vwGK8wsAx', // Your Cognito pool URL
  client_id: 'pmbfufdc2c5qnf8qjhaj58p7u', // Your Cognito App client ID
  redirect_uri: 'https://yourdomain.com/LoginCallback', // The URL to redirect after login
  response_type: 'code', // The OIDC response type, using Authorization Code Flow
  scope: 'openid email profile', // Scopes you want to request
};

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <AuthProvider {...cognitoAuthConfig}>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
