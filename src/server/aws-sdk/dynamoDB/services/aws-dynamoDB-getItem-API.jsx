// aws-dynamoDB-getItem-API.jsx

import dynamoDB from '../AWS config/aws-sdk-config';
import { getParams } from '../AWS config/aws-dynamoDB-utility';

const getItem = async (PK, SK) => {
  const params = getParams(PK, SK);

  try {
    const result = await dynamoDB.get(params).promise();
    return result.Item;
  } catch (error) {
    console.error("Error retrieving item:", error);
    return null;
  }
};

export default getItem;