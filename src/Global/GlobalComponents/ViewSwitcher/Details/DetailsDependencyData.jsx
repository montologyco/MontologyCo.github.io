// DetailsDependencyConnections.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import GlobalViewDependencies from '../../../../_GlobalViewDependencies.jsx';
import TableDataFetch from '../../../GlobalFetch/ViewSwitcherFetch/TableFetch/TableDataFetch.jsx';

const DetailsDependencyData = ({ table, dependencies, setDependencies, setFilteredTableData }) => {
    const { id } = useParams();
    const [tableData, setTableData] = useState({});

    useEffect(() => {
        const fetchDependencies = async () => {
            const { dependencies } = await GlobalViewDependencies();
            setDependencies(dependencies);
        };

        fetchDependencies();
    }, []);

    useEffect(() => {
        const fetchTableData = async () => {
            if (dependencies[table]?.dependencies) {
                const fetchDataPromises = dependencies[table].dependencies.map(async (dependency) => {
                    await TableDataFetch(dependency, (fetchedData) => {
                        setTableData((prevData) => ({
                            ...prevData,
                            [dependency]: fetchedData,
                        }));
                    });
                });

                await Promise.all(fetchDataPromises);
            }
        };

        fetchTableData();
    }, [dependencies, table]);

    useEffect(() => {
        const filterTableData = () => {
            const newFilteredTableData = {};
            for (const dependency in tableData) {
                const idKey = Object.keys(tableData[dependency][0]).find(key => key.endsWith('_id') || key === 'id');
                newFilteredTableData[dependency] = tableData[dependency].filter(row => row[idKey] === parseInt(id));
            }
            setFilteredTableData(newFilteredTableData);
        };

        if (Object.keys(tableData).length > 0) {
            filterTableData();
        }
    }, [tableData, id]);

    return null;
};

export default DetailsDependencyData;