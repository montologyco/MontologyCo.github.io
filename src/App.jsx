// App.jsx

import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './styles/index.scss';

import AuthChecker from './server/amplify/aws-amplify-authChecker-API.jsx';

import Header from './components/Header.jsx';
import Body from './components/Body.jsx';
import Footer from './components/Footer.jsx';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  return (
    <Router>
      <AuthChecker setAuthState={setIsAuthenticated} />
      
      <Header isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
      <Body isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
      <Footer isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated}/>
    </Router>
  );
}

export default App;