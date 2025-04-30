// Logout.jsx

import { useEffect } from 'react';
import { signOut } from '@aws-amplify/auth';

function Logout({ setIsAuthenticated }) {
  useEffect(() => {
    signOut();
    setIsAuthenticated(false);
    console.log("User has been signed out.");
  }, []);

  return null; // No UI, just perform the action
}

export default Logout;