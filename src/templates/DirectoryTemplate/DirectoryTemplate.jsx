// DirectoryTemplate.jsx

const DirectoryTemplate = ({ directory, directoryWidth, onSelectItem, SKs = [] }) => {
  const handleItemClick = (directoryitem) => {
    if (onSelectItem) {
      onSelectItem({ PK: directoryitem.PK, SK: directoryitem.SK });
    }
  };

  const getSKheading = (item) => {
    const skPrefix = item.SK?.match(/^[a-zA-Z]+/)?.[0];
    return SKs.find((entry) => entry.SK === skPrefix)?.SKheading || [];
  };

  return (
    <div className="tableTemplate-directory" style={{ width: `${directoryWidth}px` }}>
      <table>
        <thead>
        </thead>
        <tbody>
          {directory.map((item) => {
            const dynamoFields = getSKheading(item);
            const isSingleField = dynamoFields.length === 1;

            return (
              <tr key={item.SK} onClick={() => handleItemClick(item)} style={{ cursor: 'pointer' }}>
                {/* <td>{item.SK}</td> */} {/* Uncomment if SK display is needed */}
                {isSingleField ? (
                  <>
                    <td colSpan={5}>
                      {item[dynamoFields[0]]}
                    </td>
                  </>
                ) : (
                  dynamoFields.map((field, i) => (
                    <td key={i}>
                      {item[field] || ''}
                    </td>
                  ))
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DirectoryTemplate;