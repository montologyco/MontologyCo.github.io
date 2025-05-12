// aws-sdk-config.js

import AWS from 'aws-sdk';
import { signIn } from '@aws-amplify/auth';

const configureAWS = async () => {
  try {
    // Get the current session from signIn
    const session = await signIn.currentSession(); // Fetch the authenticated session

    // Get the ID token from the session
    const idToken = session?.idToken?.getJwtToken();
    if (!idToken) {
      throw new Error('User is not authenticated');
    }

    // Use Cognito Identity Credentials with the ID token for authenticated access
    AWS.config.update({
      region: 'us-east-1', // Replace with your region
      credentials: new AWS.CognitoIdentityCredentials({
        IdentityPoolId: 'us-east-1:YOUR_IDENTITY_POOL_ID', // Replace with your Cognito Identity Pool ID
        Logins: {
          'cognito-idp.us-east-1.amazonaws.com/YOUR_USER_POOL_ID': idToken, // Replace with your User Pool ID
        },
      }),
    });

    // Ensure credentials are refreshed (necessary if it's the first time using them)
    await new Promise((resolve, reject) => {
      AWS.config.credentials.refresh((err) => {
        if (err) reject(err);
        else resolve();
      });
    });

    // Return the DynamoDB DocumentClient with the authenticated credentials
    return new AWS.DynamoDB.DocumentClient();
  } catch (error) {
    console.error('Error configuring AWS:', error);
    throw error;
  }
};

export default configureAWS;