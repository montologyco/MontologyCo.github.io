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
  const params = {
    TableName: TABLE_NAME,
    KeyConditionExpression: 'PK = :pk',  // Always query by PK
    ExpressionAttributeValues: {
      ':pk': PK,
    },
  };

  if (SKs.length > 0) {
    // If there are selected SKs, use the IN operator for multiple SKs
    params.KeyConditionExpression += ' AND SK IN (' + SKs.map((_, index) => `:sk${index}`).join(', ') + ')';
    SKs.forEach((sk, index) => {
      params.ExpressionAttributeValues[`:sk${index}`] = sk;
    });
  } else if (query) {
    // If query is provided but no SKs, handle this case as well
    params.KeyConditionExpression += ' AND begins_with(SK, :sk)';
    params.ExpressionAttributeValues[':sk'] = query;
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