// aws-dynamoDB-getOwnedItem-API.jsx

import getDynamoDB from '../../aws-sdk-config.js';
import { ownedItemsParams } from '../aws-dynamoDB-API.jsx';

const getOwnedItems = async (PK, SKowner) => {
  const DynamoDB = await getDynamoDB();
  const params = ownedItemsParams(PK);

  console.log('Retrieving owned items for PK:', PK, 'with owner:', SKowner);

  try {
    const result = await DynamoDB.scan(params).promise();
    const allItems = result.Items || [];

    return allItems.filter(item => {
      const owners = item.owners;
      return Array.isArray(owners) && owners.includes(SKowner);
    });
  } catch (error) {
    console.error('Error retrieving owned items:', error);
    return [];
  }
};

export default getOwnedItems;