// TableShell-TypeSK.jsx

import React, { useState } from 'react';

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