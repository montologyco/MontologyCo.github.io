// aws-authChecker.jsx

import { useEffect } from 'react';
import { fetchAuthSession } from '@aws-amplify/core';

const checkSession = async () => {
  try {
    const session = await fetchAuthSession();  // Fetch the session info

    console.log("Session info:", session); // Log the session info for debugging

    // Check if session contains a valid idToken (indicating authentication)
    if (session && session.idToken) {
      console.log("User is authenticated");
      // Proceed with the authenticated flow
    } else {
      console.log("No valid session found");
      // Redirect or prompt user to log in
    }
  } catch (error) {
    console.error("Error checking session:", error);
    // Handle errors (e.g., session expired or not found)
  }
};

const AuthChecker = ({ children }) => {
  // Call checkSession when the component mounts
  useEffect(() => {
    checkSession();
  }, []);

  return children; // Render the children if authenticated
};

export default AuthChecker;
