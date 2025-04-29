import React, { useState, useEffect } from 'react';
import MontologyTaglineFetch from '../fetch/MontologyTaglineFetch.jsx';

function Body({ loggedIn }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const result = await MontologyTaglineFetch();
      setData(result);
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <>
      <div id="body">
        {loading ? (
          <p>Loading...</p>
        ) : data ? (
          <h1>{data.title}</h1>
        ) : (
          <p>Failed to load data.</p>
        )}

        {loggedIn && <h1>Logged In</h1>}
        {!loggedIn && <h1>Not Logged In</h1>}
      </div>
    </>
  );
}

export default Body;