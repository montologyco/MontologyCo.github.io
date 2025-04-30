// Logout.jsx

import React from 'react';
import { signOut } from '@aws-amplify/auth';

function Logout() {
  signOut();
  console.log("potato");
  return null;
}

export default Logout;