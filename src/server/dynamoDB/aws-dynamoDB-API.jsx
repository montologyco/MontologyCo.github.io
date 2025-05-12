// DynamoAPI.jsx

import baseURL from './AWS config/aws-server-config.jsx';

const DynamoAPI = async () => {
  try {
    const response = await fetch(`${baseURL}/MontologyDynamoBridgeFunction`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null; // Return null or handle error as needed
  }
};

export default DynamoAPI;