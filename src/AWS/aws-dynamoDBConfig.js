// aws-dynamoDBConfig.js

import AWS from 'aws-sdk';

AWS.config.update({
  region: 'us-east-1',
  credentials: new AWS.CognitoIdentityCredentials({
    IdentityPoolId: 'us-east-1:892afd16-442d-4b97-b627-264de66253e9',
  }),
});

const dynamoDB = new AWS.DynamoDB.DocumentClient();

export default dynamoDB;