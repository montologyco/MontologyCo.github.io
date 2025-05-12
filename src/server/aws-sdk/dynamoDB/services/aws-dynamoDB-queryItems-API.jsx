// aws-dynamoDB-queryItems-API.jsx

import getDynamoDB from '../../aws-sdk-config.js';
import { queryParams } from '../aws-dynamoDB-API.jsx';

const queryItems = async (PK, primarySK = '', inputValue) => {
  const DynamoDB = await getDynamoDB();
  const params = queryParams(PK, primarySK);

  try {
    const result = await DynamoDB.query(params).promise();
    return result.Items;
  } catch (error) {
    console.error("Error querying items:", error);
    return [];
  }
};

export default queryItems;