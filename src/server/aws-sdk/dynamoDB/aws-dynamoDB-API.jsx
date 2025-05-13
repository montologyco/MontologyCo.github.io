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

export const queryParams = (PK, SKs = [], queryPrefix = '') => {
  const params = {
    TableName: TABLE_NAME,
    KeyConditionExpression: 'PK = :pk',
    ExpressionAttributeValues: {
      ':pk': PK,
    },
  };

  if (SKs.length > 0) {
    // Multiple SKs -> use FilterExpression with OR
    params.FilterExpression = SKs.map((_, i) => `SK = :sk${i}`).join(' OR ');
    SKs.forEach((sk, i) => {
      params.ExpressionAttributeValues[`:sk${i}`] = sk;
    });
  } else if (queryPrefix) {
    // Prefix-based SK query
    params.KeyConditionExpression += ' AND begins_with(SK, :sk)';
    params.ExpressionAttributeValues[':sk'] = queryPrefix;
  }

  return params;
};

export const updateParams = (PK, SK, updateExpression, expressionAttributeValues) => ({
  TableName: TABLE_NAME,
  Key: { PK, SK },
  UpdateExpression: updateExpression,
  ExpressionAttributeValues: expressionAttributeValues,
});

export default { getParams, putParams, queryParams, updateParams };