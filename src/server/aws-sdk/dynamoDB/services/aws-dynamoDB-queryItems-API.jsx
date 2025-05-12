// aws-dynamoDB-queryItems-API.jsx

import { queryParams } from './aws-dynamoDB-utility'; // Import utility function
import dynamoDB from '../AWS config/aws-sdk-config'; // Import AWS SDK config

const queryItems = async (PK) => {
  const params = queryParams(PK); // Use the utility function to generate params

  try {
    const result = await dynamoDB.query(params).promise();
    return result.Items;
  } catch (error) {
    console.error("Error querying items:", error);
    return [];
  }
};

export default queryItems;