// TableTemplate-Profile.jsx

import React from 'react';
import DetailPaneTemplate from '../../DetailPaneTemplate/DetailPaneTemplate.jsx';

function TableTemplateProfile({ directoryitem, SKs = [], setIsAuthenticated = () => {} }) {
  return (
    <DetailPaneTemplate
      directoryitem={directoryitem}
      SKs={SKs}
      setIsAuthenticated={setIsAuthenticated}
    />
  );
}

export default TableTemplateProfile;