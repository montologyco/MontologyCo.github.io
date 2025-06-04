// aws-dynamoDB-API.jsx

const TABLE_NAME = 'MontologyMaster';

export const getParams = (PK, SK) => ({
  TableName: TABLE_NAME,
  Key: { PK, SK },
});

export const putParams = (item) => ({
  TableName: TABLE_NAME,
  Item: item,
});

export const queryParams = (PK, SKs = []) => {
  const base = {
    TableName: TABLE_NAME,
  };

  // Multiple SK filters: one query per SK
  if (Array.isArray(SKs) && SKs.length > 0) {
    return SKs.map((sk) => ({
      ...base,
      KeyConditionExpression: 'PK = :pk AND begins_with(SK, :sk)',
      ExpressionAttributeValues: {
        ':pk': PK,
        ':sk': sk,
      },
    }));
  }

  // No SKs selected: return query for just PK
  return [{
    ...base,
    KeyConditionExpression: 'PK = :pk',
    ExpressionAttributeValues: {
      ':pk': PK,
    },
  }];
};

// 🔹 NEW: For querying all items under PK to be filtered by `owners` outside Dynamo
export const ownedItemsParams = (PK) => ({
  TableName: TABLE_NAME,
  KeyConditionExpression: '#pk = :pkVal',
  ExpressionAttributeNames: {
    '#pk': 'PK'
  },
  ExpressionAttributeValues: {
    ':pkVal': PK
  }
});

export const updateParams = (PK, SK, updateExpression, expressionAttributeValues) => ({
  TableName: TABLE_NAME,
  Key: { PK, SK },
  UpdateExpression: updateExpression,
  ExpressionAttributeValues: expressionAttributeValues,
});

export default {
  getParams,
  putParams,
  queryParams,
  ownedItemsParams,
  updateParams
};