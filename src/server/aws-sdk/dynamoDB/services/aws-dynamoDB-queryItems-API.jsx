// aws-dynamoDB-queryItems-API.jsx

import getDynamoDB from '../../aws-sdk-config.js';
import { queryParams } from '../aws-dynamoDB-API.jsx';

const queryItems = async (PK, SK, query) => {
  const DynamoDB = await getDynamoDB();
  const params = queryParams(PK, SK);
  try {
    console.log("PK, SK:", PK, typeof PK, SK, typeof SK, query); //query = placeholder
    const result = await DynamoDB.query(params).promise();
    console.log("Query result:", result);
    return result.Items;
  } catch (error) {
    console.error("Error querying items:", error);
    return [];
  }
};

export default queryItems;