import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import './Internship.css'; // Import the CSS file

const InternshipCardBallet = () => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <div className={`internship-card ${isHovering ? 'hover' : ''}`} 
         onMouseEnter={handleMouseEnter} 
         onMouseLeave={handleMouseLeave}>
      <div className="details">
        <h2>Ballet Assistant Teacher</h2>
        <h3>Ms Blue Ballet</h3>
        <p>December 2018 - December 2024</p>
        <a className='details-link' href='heyitsnat/ballet-details'>Find out more here</a>

      </div>
    </div>
  );
};

export default InternshipCardBallet;