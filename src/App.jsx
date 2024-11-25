import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './styles/App.scss';
import Header from './components/Header.jsx';
import AppPicker from './components/AppPicker.jsx';
import Footer from './components/Footer.jsx'

function App() {

  return (
    <Router>
      <div>
        <Header />
        <AppPicker />
        <Footer />
      </div>
    </Router>
  );
};

export default App