// App.jsx

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './styles/index.scss';
import HeroSection from './components/HeroSection.jsx';
import Body from './components/Body.jsx';
import Footer from './components/Footer.jsx';

function App({ isAuthenticated, setIsAuthenticated}) {

  return (
    <Router>
      <HeroSection isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
      <Body isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
      <Footer isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated}/>
    </Router>
  );
}

export default App;
