// ProfileTemplate-Sections.jsx

import ProfileTemplateAddresses from './Sections/ProfileTemplate-Addresses.js';
import ProfileTemplatePhones from './Sections/ProfileTemplate-Phones.js';
import ProfileTemplateEmployment from './Sections/ProfileTemplate-Employment.js';
import ProfileTemplateEmails from './Sections/ProfileTemplate-Emails.js';

const sectionMap = {
  Addresses: ProfileTemplateAddresses,
  Phones: ProfileTemplatePhones,
  Emails: ProfileTemplateEmails,
  Employment: ProfileTemplateEmployment
};

function ProfileTemplateSections({ item, sections = [] }) {
  return (
    <div className="tableTemplate-sections">
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

export default ProfileTemplateSections;