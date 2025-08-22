// TableTemplate-Divider.jsx

import { useRef, useEffect } from 'react';

const TableTemplateDivider = ({ onDrag }) => {
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
      className="tableTemplate-divider"
      onMouseDown={() => { isDragging.current = true; }}
    />
  );
};

export default TableTemplateDivider;