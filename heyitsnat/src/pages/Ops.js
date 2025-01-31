import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import './Internship.css'; // Import the CSS file

const InternshipCardOps = () => {
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
      <div className="company-logo">
        {/* Replace with your actual logo */}
        <img src="/heyitsnat/smu.jpg" alt="Company Logo" />
      </div>
      <div className="details">
        <h2>Operations Associate, Patron's Day 2024</h2>
        <h3>Singapore Management University (SMU)</h3>
        <p>October 2023 - February 2024</p>
        <a className='details-link' href='heyitsnat/ops-details'>Find out more here</a>
      </div>
      <div className="social-icons">
        <a href="https://www.instagram.com/your_instagram_handle" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://www.linkedin.com/in/your_linkedin_profile" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin-in"></i>
        </a>
        {/* Add other social media icons as needed */}
      </div>
    </div>
  );
};

export default InternshipCardOps;