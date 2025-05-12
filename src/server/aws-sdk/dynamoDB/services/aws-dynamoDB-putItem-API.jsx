// aws-dynamoDB-putItem-API.jsx

import dynamoDB from '../AWS config/aws-sdk-config';
import { putParams } from '../AWS config/aws-dynamoDB-utility';

const putItem = async (item) => {
  const params = putParams(item);

  try {
    await dynamoDB.put(params).promise();
    console.log("Item added:", item);
    return true;
  } catch (error) {
    console.error("Error writing item:", error);
    return false;
  }
};

export default putItem;