// Contacts.jsx

import AuthChecker from '../../server/amplify/aws-amplify-authChecker-API.jsx';
import TableTemplate from '../../templates/TableTemplate/TableTemplate.jsx';
import UploadTemplate from '../../templates/UploadTemplate/UploadTemplate.jsx';

function Contacts({ setIsAuthenticated }) {
  return (
    <div>
      <AuthChecker setAuthState={setIsAuthenticated} />
      <h1>Contacts</h1>
      <UploadTemplate setIsAuthenticated={setIsAuthenticated} />
      <TableTemplate name="Contacts" />
    </div>
  );
}

export default Contacts;