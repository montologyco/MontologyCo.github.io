// aws-dynamoDB-queryItems-API.jsx

import getDynamoDB from '../../aws-sdk-config.js';
import { queryParams } from '../aws-dynamoDB-API.jsx';

const queryItems = async (PK, primarySK, query) => {
  //query is a placeholder for the query string, but not used yet. I need to gt the PK and SK working first.
  console.log("PK, SK:", PK, primarySK);
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