//LoginCallback.jsx

import React, { useEffect } from 'react';
import { useAuth } from 'react-oidc-context';
import { Navigate } from 'react-router-dom';

function LoginCallback() {
  const { signinRedirectLoginCallback, isAuthenticated } = useAuth();

  useEffect(() => {
    signinRedirectLoginCallback();
  }, [signinRedirectLoginCallback]);

  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }

  return <div>Loading...</div>;
}

export default LoginCallback;