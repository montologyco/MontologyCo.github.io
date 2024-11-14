import React, { useState, useEffect } from 'react';
import TableFetch from '../../../GlobalFetch/ViewSwitcherFetch/TableFetch/TableFetch.jsx';
import GlobalViewDependencies from '../../../../_GlobalViewDependencies.jsx';

const DetailsFields = ({ table, data, setData }) => {
    const [headers, setHeaders] = useState([]);
    const [types, setTypes] = useState({});
    const [alteredFields, setAlteredFields] = useState({});
    const [globalAlteredFields, setGlobalAlteredFields] = useState({});

    const isIdField = headers.length > 0 && headers[0].endsWith('_id');
    const slicedHeaders = isIdField ? headers.slice(1) : headers;

    useEffect(() => {
        const fetchAlteredFields = async () => {
            const { alteredFields } = await GlobalViewDependencies();
            setAlteredFields(alteredFields);
        };

        fetchAlteredFields();
    }, []);

    useEffect(() => {
        if (headers.length > 0) {
            const firstHeader = headers[0];
            const filteredAlteredFields = { ...alteredFields };
            delete filteredAlteredFields[firstHeader];
            setGlobalAlteredFields(filteredAlteredFields);
        }
    }, [headers, alteredFields]);

    return (
        <div>
            <TableFetch
                table={table}
                setHeaders={setHeaders}
                setTypes={setTypes}
            />
            {slicedHeaders.map((key) => {
                const alteredField = globalAlteredFields[key];
                
                const inputProps = {
                    type: alteredField?.type || types[key],
                    step: alteredField?.type || undefined,
                    readOnly: alteredField?.type,
                    placeholder: key,
                    id: key,
                    value: data[key] || '',
                    onChange: (e) => setData({ ...data, [key]: e.target.value })
                };

                return (
                    <div key={key}>
                        {alteredField?.type === 'hidden' ? null : (
                            <label htmlFor={key}>{key.charAt(0).toUpperCase() + key.slice(1)}:</label>
                        )}
                        {alteredField?.type === 'select' ? (
                            <select {...inputProps}>
                                <option value=""></option>
                                {alteredField.options?.map((option) => {
                                    return (
                                        <option key={option} value={option}>
                                            {typeof option === 'string' ? option.charAt(0).toUpperCase() + option.slice(1) : option}
                                        </option>
                                    );
                                })}
                            </select>
                        ) : (
                            <input {...inputProps} />
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export default DetailsFields;