import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/index.scss';
import Header from './components/Header.jsx';
import AppPicker from './components/AppPicker.jsx';
import Footer from './components/Footer.jsx';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <Router>
      <Header />
      <AppPicker
        loggedIn={loggedIn}
      />
      <Footer />
    </Router>
  );
}

export default App;