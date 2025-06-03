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

export const queryParams = (PK, SKs = [], query) => {
  const base = {
    TableName: TABLE_NAME,
  };

  // If you're querying multiple SKs (like ['individual#', 'business#'])
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

  // If you only provided one query prefix
  if (query) {
    return [{
      ...base,
      KeyConditionExpression: 'PK = :pk AND begins_with(SK, :sk)',
      ExpressionAttributeValues: {
        ':pk': PK,
        ':sk': query,
      },
    }];
  }

  // Just query by PK if no SKs
  return [{
    ...base,
    KeyConditionExpression: 'PK = :pk',
    ExpressionAttributeValues: {
      ':pk': PK,
    },
  }];
};


export const updateParams = (PK, SK, updateExpression, expressionAttributeValues) => ({
  TableName: TABLE_NAME,
  Key: { PK, SK },
  UpdateExpression: updateExpression,
  ExpressionAttributeValues: expressionAttributeValues,
});

export default { getParams, putParams, queryParams, updateParams };