import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import './Internship.css'; // Import the CSS file

const InternshipCardMarketing = () => {
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
        <img src="/heyitsnat/symphonia.png" alt="Company Logo" />
      </div>
      <div className="details">
        <h2>Marketing, Communications and Media Director</h2>
        <p>January 2023 - December 2023</p>
        <a className='details-link' href='heyitsnat/marketing-details'>Find out more here</a>
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

export default InternshipCardMarketing;