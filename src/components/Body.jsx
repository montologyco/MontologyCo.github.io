import React, { useState, useEffect } from 'react';  // Make sure to import useState and useEffect
import MontologyTagline from '../assets/MontologyTagline.jsx';
import HelloFetch from '../fetch/helloFetch.jsx';

function Body({ loggedIn }) {
  // State to store fetched data
  const [data, setData] = useState(null);

  useEffect(() => {
    // Call HelloFetch and update the state with the fetched data
    const fetchData = async () => {
      const result = await HelloFetch();  // Call the function
      setData(result);  // Store the result in the state
    };

    fetchData();  // Trigger the fetch on component mount
  }, []);  // Empty dependency array means this runs once when the component mounts

  return (
    <>
      <div id="body">
        {data ? (
          <h1>{data.message}</h1>  // Display the message returned from HelloFetch
        ) : (
          <p>Loading...</p>  // Show a loading message while fetching
        )}

        {loggedIn && <h1>AppPicker</h1>}
        {!loggedIn && <MontologyTagline />}
      </div>
    </>
  );
}

export default Body;
