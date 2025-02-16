import React, { useEffect } from 'react';

const Popup = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000); // Close the popup after 3 seconds
    return () => clearTimeout(timer);
  }, [message, onClose]);

  return (
    <div className="popup">
      <div className="popup-content">
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Popup;
