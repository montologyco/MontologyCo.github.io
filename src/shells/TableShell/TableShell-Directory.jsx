// TableShell-Directory.jsx

import React from 'react';

const TableShellDirectory = ({ directory, directoryWidth }) => {
    const handleItemClick = (directoryitem) => {
        console.log('Selected directoryitem:', directoryitem);
    };

    const stringifyItem = (item) => {
    const filteredItem = Object.entries(item)
        .filter(([key]) => key !== 'PK' && key !== 'SK')
        .map(([key, value]) => value)
        .filter(Boolean);

    return filteredItem.join(' ');
    };

    return (
        <div className="tableShell-directory" style={{ width: `${directoryWidth}px` }}>
            <ul>
                {directory.map((directoryitem) => (
                <li key={directoryitem.PK}>
                    <a href="#" onClick={() => handleItemClick(directoryitem)}>
                    {stringifyItem(directoryitem)}
                    </a>
                </li>
                ))}
            </ul>
        </div>
    );
};

export default TableShellDirectory;