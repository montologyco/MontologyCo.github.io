// TableTemplate-Panes.jsx

import { useState } from 'react';
import TableTemplateDirectory from './TableTemplate-Directory.jsx';
import TableTemplateDetailPane from './TableTemplate-DetailPane.jsx';
import TableTemplateDivider from './TableTemplate-Divider.jsx';

const TableTemplatePanes = ({ directory, SKs }) => {
  const [directoryWidth, setDirectoryWidth] = useState(400);
  const [directoryitem, setDirectoryitem] = useState(null);

  return (
    <div className="tableTemplate-panes" style={{ display: 'flex' }}>
      <TableTemplateDirectory
        directory={directory}
        directoryWidth={directoryWidth}
        onSelectItem={setDirectoryitem}
        SKs={SKs}
      />
      <TableTemplateDivider onDrag={delta => setDirectoryWidth(prev => Math.max(200, prev + delta))} />
      <TableTemplateDetailPane
        directoryitem={directoryitem}
        SKs={SKs}
      />
    </div>
  );
};

export default TableTemplatePanes;