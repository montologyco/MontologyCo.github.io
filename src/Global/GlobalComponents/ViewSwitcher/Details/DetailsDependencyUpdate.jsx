// DetailsDependencyUpdate.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const DetailsDependencyUpdate = ({ table, row, columnKey }) => {
    return (
        <div>
            <Link to={`/${table}/${row[columnKey]}`}>
                {row[columnKey]}
            </Link>
        </div>
    );
};

export default DetailsDependencyUpdate;