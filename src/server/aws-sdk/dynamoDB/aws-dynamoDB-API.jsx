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

export const queryParams = (PK, SK) => {
  const params = {
    TableName: TABLE_NAME,
    KeyConditionExpression: 'PK = :pk',  // We always query by PK
    ExpressionAttributeValues: {
      ':pk': PK,
    },
  };

  // If SK is provided, add it to the query
  if (SK) {
    params.KeyConditionExpression += ' AND begins_with(SK, :sk)';
    params.ExpressionAttributeValues[':sk'] = SK;
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