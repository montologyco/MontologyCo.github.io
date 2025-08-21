// TableTemplate-Profile.jsx

import React from 'react';
import ProfileTemplate from '../../ProfileTemplate/ProfileTemplate.jsx';

function TableTemplateProfile({ directoryitem, SKs = [], setIsAuthenticated = () => {} }) {
  return (
    <ProfileTemplate
      directoryitem={directoryitem}
      SKs={SKs}
      setIsAuthenticated={setIsAuthenticated}
    />
  );
}

export default TableTemplateProfile;