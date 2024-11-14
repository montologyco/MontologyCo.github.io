import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const DetailsHeader = ({exists}) => {
    const { table, id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (!exists) {
            navigate(`/${table}/new`);
        }
    }, [exists]);

    return (
        <div>
            <h2>
                {exists === true ? ("Edit ") : ("Add ")}
                {table.charAt(0).toUpperCase()}{
                    table.slice(1).slice(table.slice(1).length-3,table.slice(1).length) === 'ies' ? (
                        table.slice(1).slice(0,table.slice(1).length-3)+'y'
                    ) : (
                        table.slice(1).slice(table.slice(1).length-1,table.slice(1).length) === 's' ? (
                        table.slice(1).slice(0,table.slice(1).length-1)
                    ) : (
                        table.slice(1)
                    )
                    )
                }: {exists === true ? (id) : ("new")}
            </h2>
        </div>
    );
};

export default DetailsHeader;