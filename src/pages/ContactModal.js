import React from 'react';
import './ContactModal.css';

const ContactModal = ({ onClose, email }) => {
  return (
    // 1. Closes the modal when clicking on the dark overlay
    <div className="modal" onClick={onClose}>
      {/* 2. 🛑 Prevents the click from reaching the div above */}
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <span className="close-button" onClick={onClose}>&times;</span>
        <h2>Contact Me</h2>
        <p>You can reach me at:</p>
        <p><strong><a href={`mailto:${email}`}>{email}</a></strong></p>
      </div>
    </div>
  );
};

export default ContactModal;