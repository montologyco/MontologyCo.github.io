// TableShell-Divider.jsx

import React, { useRef, useEffect } from 'react';

const TableShellDivider = ({ onDrag }) => {
  const isDragging = useRef(false); // Reference to track if the drag is happening
  const dividerRef = useRef(null); // Reference for the divider element

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (isDragging.current) {
        onDrag(e.movementX);
      }
    };

    const handleMouseUp = () => {
      isDragging.current = false;
    };

    // Adding event listeners after component mounts
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    // Cleanup event listeners when component unmounts or updates
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [onDrag]);

  // Handle mouse down on the divider to start dragging
  const handleMouseDown = (e) => {
    isDragging.current = true;
  };

  return (
    <div
      ref={dividerRef} // Assigning the dividerRef to the divider div
      className="tableShell-divider"
      onMouseDown={handleMouseDown}
    />
  );
};

export default TableShellDivider;
