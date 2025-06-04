// aws-dynamoDB-getOwnedItem-API.jsx

import getDynamoDB from '../../aws-sdk-config.js';
import { ownedItemsParams } from '../aws-dynamoDB-API.jsx';

const getOwnedItems = async (PK, ownerSK) => {
  const DynamoDB = await getDynamoDB();
  const params = ownedItemsParams(PK);

  try {
    const result = await DynamoDB.query(params).promise();
    const allItems = result.Items || [];

    return allItems.filter(item =>
      Array.isArray(item.owners) && item.owners.includes(ownerSK)
    );
  } catch (error) {
    console.error('Error retrieving owned items:', error);
    return [];
  }
};

export default getOwnedItems;