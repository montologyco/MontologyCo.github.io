// App.jsx

import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './styles/index.scss';

import AuthChecker from './AWS/aws-authChecker.jsx';

import HeroSection from './components/HeroSection.jsx';
import Body from './components/Body.jsx';
import Footer from './components/Footer.jsx';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  return (
    <Router>
      <AuthChecker setAuthState={setIsAuthenticated} />
      
      <HeroSection isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
      <Body isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
      <Footer isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated}/>
    </Router>
  );
}

export default App;