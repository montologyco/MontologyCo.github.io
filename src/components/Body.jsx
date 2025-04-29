import React, { useState, useEffect } from 'react';  // Import React hooks
import MontologyTagline from '../assets/MontologyTagline.jsx';
import HelloFetch from '../fetch/helloFetch.jsx';  // Import the HelloFetch function

function Body({ loggedIn }) {
  const [data, setData] = useState(null);  // State to store fetched data
  const [loading, setLoading] = useState(true);  // Track loading state

  // Use useEffect to fetch data when the component mounts
  useEffect(() => {
    // Function to fetch data
    const fetchData = async () => {
      const result = await HelloFetch();  // Fetch data from the server
      setData(result);  // Update the state with the fetched data
      setLoading(false);  // Mark loading as false once the data is fetched
    };

    fetchData();  // Trigger the data fetch on component mount
  }, []);  // Empty dependency array means this effect runs only once when the component mounts

  return (
    <>
      <div id="body">
        {loading ? (
          <p>Loading...</p>  // Show loading message while data is being fetched
        ) : data ? (
          <h1>{data.message}</h1>  // Display the message returned from HelloFetch
        ) : (
          <p>Failed to load data.</p>  // Handle any failure in fetching data
        )}

        {loggedIn && <h1>AppPicker</h1>}
        {!loggedIn && <MontologyTagline />}
      </div>
    </>
  );
}

export default Body;