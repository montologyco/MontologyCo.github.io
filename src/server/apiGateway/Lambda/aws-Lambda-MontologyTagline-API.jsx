// aws-Lambda-MontologyTagline-API.jsx

import baseURL from '../aws-apiGateway-config.jsx';

const MontologyTaglineAPI = async () => {
  try {
    const response = await fetch(`${baseURL}/MontologyTagline`);
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

export default MontologyTaglineAPI;
