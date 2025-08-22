// UploadTemplate.jsx

import AuthChecker from '../../server/amplify/aws-amplify-authChecker-API.jsx';

function UploadTemplate({ setIsAuthenticated }) {
  return (
    <div>
      <AuthChecker setAuthState={setIsAuthenticated} />
      <h1>Upload ??</h1>
    </div>
  );
}

export default UploadTemplate;