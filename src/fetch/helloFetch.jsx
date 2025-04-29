import axios from 'axios';
import baseURL from '.ServerConfig.jsx';

const HelloFetch = async (setData) => {
  try {
    const response = await axios.get(`${baseURL}/hello`);
    setData(response.data);
  } catch (error) {
    console.error('Error fetching hello:', error);
    setData(null);
  }
};

export default HelloFetch;