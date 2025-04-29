import baseURL from './ServerConfig.jsx';  // Correct path to ServerConfig

const HelloFetch = async () => {
  try {
    const response = await fetch(`${baseURL}/hello`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null; // You can return null or handle the error as you wish
  }
};

export default HelloFetch;