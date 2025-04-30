// aws-exports.js

export default {
  Auth: {
    Cognito: {
      userPoolId: 'us-east-1_vwGK8wsAx',
      userPoolWebClientId: 'pmbfufdc2c5qnf8qjhaj58p7u',
      mandatorySignIn: true,
      authenticationFlowType: 'USER_PASSWORD_AUTH', // Basic username/password flow
    }
  },
};