import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import DetailsByIdFetch from '../../../GlobalFetch/ViewSwitcherFetch/DetailsFetch/DetailsByIdFetch.jsx';
import DetailsButton from './DetailsButton.jsx';
import DetailsIdExistsFetch from '../../../GlobalFetch/ViewSwitcherFetch/DetailsFetch/DetailsIdExistsFetch.jsx';
import DetailsFields from './DetailsFields.jsx';
import DetailsDependencyConnections from './DetailsDependencyConnections.jsx';
import DetailsHeader from './DetailsHeader.jsx';

const Details = () => {
    const { table, id } = useParams();
    const [data, setData] = useState({});
    const [exists, setExists] = useState([]);

    useEffect(() => {
        DetailsIdExistsFetch(table, id, setExists);
        DetailsByIdFetch(table, id, setData, exists)
    }, [id]);

    return (
        <div>
            <DetailsHeader
                exists={exists}
            />
            <form>
                <DetailsFields
                    table={table}
                    data={data}
                    setData={setData}
                />
                <DetailsButton
                    table={table}
                    newData={data}
                    exists={exists}
                    setExists={setExists}
                />
            </form>
            <DetailsDependencyConnections
                table={table}
                data={data}
                setData={setData}
            />
        </div>
    );
};

export default Details;