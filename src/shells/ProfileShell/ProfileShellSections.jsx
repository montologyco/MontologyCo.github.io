// ProfileShell-Sections.jsx

import React from 'react';
import ProfileShellAddresses from './sections/ProfileShellAddresses.jsx';
import ProfileShellPhones from './sections/ProfileShellPhones.jsx';

const sectionMap = {
  Addresses: ProfileShellAddresses,
  Phones: ProfileShellPhones,
  // ...
};

function ProfileShellSections({ contact, sections = [] }) {
  return (
    <div className="tableShell-sections">
      {sections.map(section => {
        const SectionComponent = sectionMap[section];
        return SectionComponent ? (
          <SectionComponent key={section} contact={contact} />
        ) : (
          <div key={section} className="profile-section-placeholder">
            <h4>{section}</h4>
            <p>(Section placeholder)</p>
          </div>
        );
      })}
    </div>
  );
}


export default ProfileShellSections;