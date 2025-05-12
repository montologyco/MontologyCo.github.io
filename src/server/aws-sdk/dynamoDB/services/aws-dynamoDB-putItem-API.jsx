// aws-dynamoDB-putItem-API.jsx

import DynamoDB from '../../aws-sdk-config.js';
import { putParams } from '../aws-dynamoDB-API.jsx';

const putItem = async (item) => {
  const params = putParams(item);

  try {
    await DynamoDB.put(params).promise();
    console.log("Item added:", item);
    return true;
  } catch (error) {
    console.error("Error writing item:", error);
    return false;
  }
};

export default putItem;