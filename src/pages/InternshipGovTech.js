import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import './Internship.css'; // Import the CSS file

const InternshipCardGovTech = () => {
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
        <img src="/heyitsnat/govtech.png" alt="Company Logo" />
      </div>
      <div className="details">
        <h2>Data Science and Artificial Intelligence Intern</h2>
        <h3>Government Technology Agency (GovTech)</h3>
        <p>April 2021 - June 2022</p>
        <Link to="/govtech-details">Find out more here</Link>
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

export default InternshipCardGovTech;