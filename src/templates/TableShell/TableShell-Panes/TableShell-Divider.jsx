// TableShell-Divider.jsx

import React, { useRef, useEffect } from 'react';

const TableShellDivider = ({ onDrag }) => {
  const isDragging = useRef(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (isDragging.current) {
        onDrag(e.movementX);
      }
    };
    const handleMouseUp = () => {
      isDragging.current = false;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [onDrag]);

  return (
    <div
      className="tableShell-divider"
      onMouseDown={() => { isDragging.current = true; }}
    />
  );
};

export default TableShellDivider;