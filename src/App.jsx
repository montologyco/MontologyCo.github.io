// App.jsx

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './styles/index.scss';
import HeroSection from './components/HeroSection.jsx';
import Body from './components/Body.jsx';
import Footer from './components/Footer.jsx';

function App() {

  return (
    <Router>
    <HeroSection />
        <Body />
      <Footer />
    </Router>
  );
}

export default App;