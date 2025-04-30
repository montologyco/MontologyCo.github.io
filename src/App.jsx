// App.jsx

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/index.scss';
import Header from './components/Header.jsx';
import Body from './components/Body.jsx';
import Footer from './components/Footer.jsx';
import AuthChecker from './AWS/aws-authChecker';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <Router>

          <AuthChecker>
      <Header
        loggedIn={loggedIn}
      />
      <Body
        loggedIn={loggedIn}
      />
      <Footer />

          </AuthChecker>
    </Router>
  );
}

export default App;