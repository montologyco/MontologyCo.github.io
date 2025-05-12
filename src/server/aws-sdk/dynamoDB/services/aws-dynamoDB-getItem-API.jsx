// aws-dynamoDB-getItem-API.jsx

import DynamoDB from '../../aws-sdk-config.js';
import { getParams } from '../aws-dynamoDB-API.jsx';

const getItem = async (PK, SK) => {
  const params = getParams(PK, SK);

  try {
    const result = await DynamoDB.get(params).promise();
    return result.Item;
  } catch (error) {
    console.error("Error retrieving item:", error);
    return null;
  }
};

export default getItem;