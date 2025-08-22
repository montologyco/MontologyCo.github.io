// TableTemplate-Directory.jsx

import DirectoryTemplate from '../../DirectoryTemplate/DirectoryTemplate.jsx';

const TableTemplateDirectory = ({ directory, directoryWidth, onSelectItem, SKs = [] }) => {

  return (
    <DirectoryTemplate
      directory={directory}
      directoryWidth={directoryWidth}
      onSelectItem={onSelectItem}
      SKs={SKs}
    />
  );
}

export default TableTemplateDirectory;