// ProfileShellSections.jsx

import ProfileShellAddresses from './Sections/ProfileShellAddresses.jsx';
import ProfileShellPhones from './Sections/ProfileShellPhones.jsx';

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
          <SectionComponent item={item} />
        ) : (
          <div className="profile-section-placeholder">
            <h4>{section}</h4>
            <p>(Section placeholder)</p>
          </div>
        );
      })}
    </div>
  );
}

export default ProfileShellSections;