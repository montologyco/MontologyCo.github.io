// MontologyTagline.jsx

import React, { useState, useEffect } from 'react';
import MontologyTaglineFetch from '../fetch/MontologyTaglineFetch.jsx';

function MontologyTagline() {
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
    loading ? (
      <p>Loading...</p>
    ) : data ? (
      <div id="montologyTagline">
      <h1>{data.title}</h1>
      <p><em>{data.pronunciation}</em></p>
      <p><strong>{data.partOfSpeech}</strong></p>
      <p>{data.definition}</p>
      <p><em>example:</em> {data.example}</p>
    </div>
    ) : (
      <p>Failed to load data.</p>
    )
  );
}

export default MontologyTagline;