// aws-sdk-config.js

import AWS from 'aws-sdk';
import { fetchAuthSession } from 'aws-amplify/auth';

const getDynamoDB = async () => {
  const session = await fetchAuthSession();

  const idToken = session.tokens?.idToken?.toString();
  if (!idToken) {
    throw new Error('No valid ID token found');
  }

  AWS.config.update({
    region: 'us-east-1',
    credentials: new AWS.CognitoIdentityCredentials({
      IdentityPoolId: 'us-east-1:892afd16-442d-4b97-b627-264de66253e9',
      Logins: {
        'cognito-idp.us-east-1.amazonaws.com/us-east-1_vwGK8wsAx': idToken,
      },
    }),
  });

  await new Promise((resolve, reject) => {
    AWS.config.credentials.refresh((err) => {
      if (err) reject(err);
      else resolve();
    });
  });

  return new AWS.DynamoDB.DocumentClient();
};

export default getDynamoDB;