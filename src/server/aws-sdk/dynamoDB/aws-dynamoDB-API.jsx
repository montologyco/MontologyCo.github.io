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

export const queryParams = (PK, SK) => ({
  TableName: TABLE_NAME,
  KeyConditionExpression: 'PK = :pk',
  ExpressionAttributeValues: {
    ':pk': PK,
  },
});

// export const queryParams = (PK, SK) => ({
//   TableName: TABLE_NAME,
//   KeyConditionExpression: 'begins_with(PK, :pk) AND begins_with(SK, :sk)',
//   ExpressionAttributeValues: {
//     ':pk': { S: String(PK) },
//     ':sk': { S: String(SK) },
//   },
// });

export const updateParams = (PK, SK, updateExpression, expressionAttributeValues) => ({
  TableName: TABLE_NAME,
  Key: { PK, SK },
  UpdateExpression: updateExpression,
  ExpressionAttributeValues: expressionAttributeValues,
});

export default { getParams, putParams, queryParams, updateParams };