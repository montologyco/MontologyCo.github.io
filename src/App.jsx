import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import Logo from '../src/Global/GlobalComponents/assets/Iconic1.3.png';
import './Global/GlobalSCSS/App.scss';

import LoginView from './Login/LoginView/LoginView';
import LoggedIn from './Login/LoggedIn';
import CampaignCRM from './Apps/CampaignCRM/CampaignCRM';
import Budgetology from './Apps/Budgetology/Budgetology';

const App = () => {
  const [username, setUsername] = useState('');
  const [userLoggedIn, setUserLoggedIn] = useState({});
  const subdomain = window.location.hostname.split('.')[0];

  useEffect(() => {
    LoggedIn(setUserLoggedIn, setUsername);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('loggedIn');
    localStorage.removeItem('username');
    setUserLoggedIn(false);
    setUsername('');
  };

  return (
    <Router>
      <div>
        <header>
          <div className='title'>
            <Link to="/"><img src={Logo} alt="Montology Logo"/></Link>
            <Link to="/"><h1>{subdomain.charAt(0).toUpperCase() + subdomain.slice(1)}</h1></Link>
          </div>
          {userLoggedIn ? (
            <div className='login'>
              <Link to="/" onClick={handleLogout}>Log out</Link>
              <Link to="/" >{username}</Link>
            </div>
          ) : (
            null
          )}
        </header>
        {userLoggedIn ? (
          subdomain === 'campaigncrm' ? (
            <CampaignCRM />
          ) : subdomain === 'budgetology' ? (
            <Budgetology />
          ) : window.location.href = 'https://www.montologyco.com'
        ) : (
          <LoginView
            username={username}
            setUsername={setUsername}
          />
        )}
      </div>
    </Router>
  );
};

export default App;