import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Login({ loggedIn }) {
  const [showInput, setShowInput] = useState(false);

  return (
    <div id="login">
      {!loggedIn ? (
        <div>
          <Link onClick={() => setShowInput(!showInput)}>Log In</Link>
          {showInput && (
            <div>
              <p>Username: <input type="text" placeholder="Username" /></p>
              <p>Password: <input type="password" placeholder="Password" /></p>
            </div>
          )}
        </div>
      ) : (
        <div>
          <Link>Log Out</Link>
        </div>
      )}
    </div>
  );
}

export default Login;