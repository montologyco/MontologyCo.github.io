// aws-dynamoDB-queryItems-API.jsx

import getDynamoDB from '../../aws-sdk-config.js';
import { queryParams } from '../aws-dynamoDB-API.jsx';

const queryItems = async (PK, SKs, query) => {
  const DynamoDB = await getDynamoDB();
  const paramList = queryParams(PK, SKs, query);

  try {
    const results = await Promise.all(
      paramList.map(params => DynamoDB.query(params).promise())
    );

    const allItems = results.flatMap(res => res.Items || []);

    return allItems;
  } catch (error) {
    console.error("Error querying items:", error);
    return [];
  }
};

export default queryItems;