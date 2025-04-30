// App.jsx

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './styles/index.scss';

import AuthChecker from './AWS/aws-authChecker.jsx';

import HeroSection from './components/HeroSection.jsx';
import Body from './components/Body.jsx';
import Footer from './components/Footer.jsx';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  // Use useEffect to recheck authentication on page load or refresh
  useEffect(() => {
    const checkAuth = async () => {
      // Add logic to check the current session/token state
      const token = localStorage.getItem('authToken');
      if (token) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    };
    
    checkAuth();  // Trigger the authentication check on app load
  }, []);  // Empty array means this will run only once when the component mounts

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