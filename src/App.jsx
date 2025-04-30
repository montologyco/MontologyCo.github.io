// App.jsx

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './styles/index.scss';
import HeroSection from './components/HeroSection.jsx';
import Body from './components/Body.jsx';
import Footer from './components/Footer.jsx';
import AuthChecker from './AWS/aws-authChecker';

function App() {

  return (
    <Router>
    <HeroSection />
      <AuthChecker>
        <Body />
        <Footer />
      </AuthChecker>
    </Router>
  );
}

export default App;