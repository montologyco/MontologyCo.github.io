// DetailsDependencyConnections.jsx
import React, { useState, useEffect } from 'react';
import DetailsDependencyData from './DetailsDependencyData';
import DetailsDependencyUpdate from './DetailsDependencyUpdate';

const DetailsDependencyConnections = ({ table }) => {
    const [dependencies, setDependencies] = useState({});
    const [filteredTableData, setFilteredTableData] = useState({});

    DetailsDependencyData({ table, dependencies, setDependencies, setFilteredTableData });

    return (
        <div>
            {dependencies[table]?.dependencies.map((dependency) => (
                <div key={dependency} className='dependency'>
                    <hr />
                    <div className='dependencyTHINGYlikesearch'>
                        <h4>{dependency.charAt(0).toUpperCase() + dependency.slice(1)}</h4>
                        <button>Add New</button>
                        <input placeholder={`${dependency.charAt(0).toUpperCase() + dependency.slice(dependency.slice(dependency.length))}`} />
                    </div>
                    <table>
                        <thead>
                            <tr>
                                {filteredTableData[dependency] && filteredTableData[dependency].length > 0 && 
                                    Object.keys(filteredTableData[dependency][0])
                                        .filter(key => key !== 'created_at' && key !== Object.keys(filteredTableData[dependency][0]).find(key => key.endsWith('_id') || key === 'id'))
                                        .map((key) => (
                                            <th key={key}>{key.charAt(0).toUpperCase() + key.slice(1)}</th>
                                        ))
                                }
                            </tr>
                        </thead>
                        <tbody>
                            {filteredTableData[dependency] && filteredTableData[dependency].map((row, index) => (
                                <tr key={index}>
                                    {Object.keys(row)
                                        .filter(key => key !== 'created_at' && key !== Object.keys(filteredTableData[dependency][0]).find(key => key.endsWith('_id') || key === 'id'))
                                        .map((key) => (
                                            <td key={key}>
                                                <DetailsDependencyUpdate
                                                    table={dependency}
                                                    row={row}
                                                    columnKey={key}
                                                />
                                            </td>
                                        ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ))}
        </div>
    );
};

export default DetailsDependencyConnections;