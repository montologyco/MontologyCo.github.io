// aws-dynamoDB-updateItem-API.jsx

import { updateParams } from './aws-dynamoDB-utility'; // Import utility function
import dynamoDB from '../AWS config/aws-sdk-config'; // Import AWS SDK config

const updateItem = async (PK, SK, updateExpression, expressionValues) => {
  const params = updateParams(PK, SK, updateExpression, expressionValues); // Use the utility function to generate params

  try {
    const result = await dynamoDB.update(params).promise();
    return result.Attributes;
  } catch (error) {
    console.error("Error updating item:", error);
    return null;
  }
};

export default updateItem;