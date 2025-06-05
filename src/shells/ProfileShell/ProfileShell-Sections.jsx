// ProfileShell-Sections.jsx

import ProfileShellAddresses from './Sections/ProfileShell-Addresses.jsx';
import ProfileShellPhones from './Sections/ProfileShell-Phones.jsx';

const sectionMap = {
  Addresses: ProfileShellAddresses,
  Phones: ProfileShellPhones
};

function ProfileShellSections({ item, sections = [] }) {
  return (
    <div className="tableShell-sections">
      {sections.map(section => {
        const SectionComponent = sectionMap[section];
        return SectionComponent ? (
          <SectionComponent key={section} item={item} />
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