// CampaignCRM.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import ViewSwitcher from '../../Global/GlobalComponents/ViewSwitcher/ViewSwitcher.jsx';
import Summary from './Summary.jsx';
import CampaignCRMConfig from './CampaignCRMConfig.jsx';

const CampaignCRM = () => {
  return (
    <div>
      <header>
        <nav>
          {Object.entries(CampaignCRMConfig().sections).map(([table, { label }]) => (
            <NavLink
              key={table}
              to={`/${table}`}
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </header>
      <Routes>
        <Route path="/:table/*" element={<ViewSwitcher />} />
        <Route path="/" element={<Summary />} />
      </Routes>
    </div>
  );
};

export default CampaignCRM;