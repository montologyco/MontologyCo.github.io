// aws-dynamoDB-queryItems-API.jsx

import getDynamoDB from '../../aws-sdk-config.js';
import { queryParamsPK, queryParamsPKSK } from '../aws-dynamoDB-API.jsx';

const queryItems = async (PK, SK, query) => {
  const DynamoDB = await getDynamoDB();
  if (!SK) {
    const params = queryParamsPK(PK);
  } else {
    const params = queryParamsPKSK(PK, SK, query);
  }

  try {
    const result = await DynamoDB.query(params).promise();
    return result.Items;
  } catch (error) {
    console.error("Error querying items:", error);
    return [];
  }
};

export default queryItems;