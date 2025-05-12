// Contacts.jsx

import React, { useEffect, useState } from 'react';
import AuthChecker from '../../server/amplify/aws-amplify-authChecker-API.jsx';
import getItem from '../../server/aws-sdk/dynamoDB/services/aws-dynamoDB-getItem-API.jsx'; // Adjust path if necessary

function Contacts({ setIsAuthenticated }) {
  const [contact, setContact] = useState(null);  // State to store fetched data
  const [loading, setLoading] = useState(true);   // State to track loading status
  const [error, setError] = useState(null);       // State to handle errors

  useEffect(() => {
    const fetchData = async () => {
      const PK = 'contact1234';  // Example PK from DynamoDB
      const SK = 'name';  // Example SK from DynamoDB

      try {
        const item = await getItem(PK, SK);  // Fetch the data from DynamoDB
        if (item) {
          setContact(item);  // Set the retrieved data into the state
        } else {
          setError('No item found for the given PK and SK');
        }
      } catch (err) {
        setError('Error fetching data');
        console.error(err);
      } finally {
        setLoading(false);  // Set loading to false after data fetching is complete
      }
    };

    fetchData();
  }, []);  // Empty dependency array means this will run once when the component mounts

  return (
    <div>
      <AuthChecker setAuthState={setIsAuthenticated} />
      <h1>Contacts</h1>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {contact && (
        <div>
          <h2>{contact.first} {contact.last}</h2> {/* Display first and last name */}
          <p>Honorific: {contact.honorific}</p>
          <p>Post-Nom: {contact['post-nom']}</p>
          <p>Pronouns: {contact.pronouns}</p>
          {/* Render other fields from the contact data */}
        </div>
      )}
    </div>
  );
}

export default Contacts;