// aws-exports.js

export default {
  Auth: {
    region: 'us-east-1',
    userPoolId: 'us-east-1_vwGK8wsAx',
    userPoolWebClientId: 'pmbfufdc2c5qnf8qjhaj58p7u',
    mandatorySignIn: true,
    authenticationFlowType: 'USER_PASSWORD_AUTH',
    oauth: {
      domain: 'your-auth-domain.auth.us-east-1.amazoncognito.com', // Replace with your Cognito domain
      scope: ['email', 'openid', 'profile'],
      redirectSignIn: 'https://yourapp.com/callback', // URL to redirect after sign-in
      redirectSignOut: 'https://yourapp.com/signout', // URL to redirect after sign-out
      responseType: 'code', // Authorization code grant
      options: {
        // If you are using Google or Facebook, add them as providers
        // These should be configured in Cognito under App client settings
        federated: {
          googleClientId: 'your-google-client-id', // Replace with your Google Client ID
          facebookAppId: 'your-facebook-app-id', // Replace with your Facebook App ID
        }
      }
    }
  }
};
