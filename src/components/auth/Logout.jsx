// Logout.jsx

import { useEffect } from 'react';
import { signOut } from '@aws-amplify/auth';

function Logout({ setIsAuthenticated }) {
  useEffect(() => {
    signOut();
    setIsAuthenticated(false);
  }, []);

  return null;
}

export default Logout;