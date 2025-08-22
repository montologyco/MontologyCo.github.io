// DetailPaneTemplate-Sections.jsx

import DetailPaneTemplateAddresses from './Sections/DetailPaneTemplate-Addresses.jsx';
import DetailPaneTemplatePhones from './Sections/DetailPaneTemplate-Phones.jsx';
import DetailPaneTemplateEmployment from './Sections/DetailPaneTemplate-Employment.jsx';
import DetailPaneTemplateEmails from './Sections/DetailPaneTemplate-Emails.jsx';

const sectionMap = {
  Addresses: DetailPaneTemplateAddresses,
  Phones: DetailPaneTemplatePhones,
  Emails: DetailPaneTemplateEmails,
  Employment: DetailPaneTemplateEmployment
};

function DetailPaneTemplateSections({ item, sections = [] }) {
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

export default DetailPaneTemplateSections;