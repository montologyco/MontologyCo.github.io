// ProfileShell-Sections.jsx

import React from 'react';

function ProfileShellSections({ contact, sections = [] }) {
  return (
    <div className="tableShell-sections">
      {sections.map(section => (
        <div key={section} className="profile-section-placeholder">
          <h4>{section}</h4>
          <p>(Section placeholder)</p>
        </div>
      ))}
    </div>
  );
}

export default ProfileShellSections;