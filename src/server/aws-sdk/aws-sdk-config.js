// aws-sdk-config.js

import AWS from 'aws-sdk';
import { fetchAuthSession } from 'aws-amplify/auth';

const getDynamoDB = async () => {
  try {
    const session = await fetchAuthSession();

    const idToken = session.tokens?.idToken?.toString();
    if (!idToken) {
      throw new Error('No valid ID token found');
    }

    AWS.config.update({
      region: 'us-east-1',
      credentials: new AWS.CognitoIdentityCredentials({
        IdentityPoolId: 'us-east-1:3fea43bf-0e53-454e-b4a4-d57c51599826',
        Logins: {
          'cognito-idp.us-east-1.amazonaws.com/us-east-1_vwGK8wsAx': idToken,
        },
      }),
    });

    await new Promise((resolve, reject) => {
      AWS.config.credentials.refresh((err) => {
        if (err) reject(new Error('Failed to refresh credentials: ' + err));
        else resolve();
      });
    });

    return new AWS.DynamoDB.DocumentClient();
  } catch (error) {
    console.error('Error setting up DynamoDB client:', error);
    throw error;
  }
};

export default getDynamoDB;