// TableTemplate-Profile.jsx

import DetailPaneTemplate from '../../DetailPaneTemplate/DetailPaneTemplate.jsx';

function TableTemplateDetailPane({ directoryitem, SKs = [], setIsAuthenticated = () => {} }) {
  return (
    <DetailPaneTemplate
      directoryitem={directoryitem}
      SKs={SKs}
      setIsAuthenticated={setIsAuthenticated}
    />
  );
}

export default TableTemplateDetailPane;