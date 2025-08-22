// ProfileTemplate-Sections.jsx

import ProfileTemplateAddresses from './Sections/ProfileTemplate-Addresses.jsx';
import ProfileTemplatePhones from './Sections/ProfileTemplate-Phones.jsx';
import ProfileTemplateEmployment from './Sections/ProfileTemplate-Employment.jsx';
import ProfileTemplateEmails from './Sections/ProfileTemplate-Emails.jsx';

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