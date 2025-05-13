// TableShell.jsx

import React, { useState } from 'react';
import Search from '../Search/Search.jsx';
import TableShellPanes from './TableShell-Panes.jsx';
import TableShellFilter from './TableShell-Filter.jsx';
import applications from '../../navigation/applications.json';

const TableShellTypeSK = ({ SKs }) => {
    const [SK, setSK] = useState('individual');

    return (
        <div>
            <label>
            <input
                type="checkbox"
                checked={SK === 'individual'}
                onChange={() => setSK('individual')}
            />
            Individual
            </label>
            <label>
            <input
                type="checkbox"
                checked={SK === 'business'}
                onChange={() => setSK('business')}
            />
            Business
            </label>
            <label>
            <input
                type="checkbox"
                checked={SK === 'campaign'}
                onChange={() => setSK('campaign')}
            />
            Campaign
            </label>
        </div>
    );
};

export default TableShellTypeSK;