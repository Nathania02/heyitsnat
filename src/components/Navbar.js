import React from 'react';
import {  Link, useNavigate, useLocation  } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate()
  const location = useLocation()

  const handleLinkClick = (sectionId) => {
    if (location.pathname === "/") {
      const sectionElement = document.getElementById(sectionId);
      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      } else {
        navigate("/", { state: { sectionId: sectionId } });
      }
    };
  return (
    <div className="d-flex justify-content-center px-3 px-md-4 px-lg-5">
      <nav
        className="navbar navbar-expand-lg"
        style={{
          backgroundColor: 'white',
          borderRadius: '3rem',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          padding: '0' // Remove padding from nav element
        }}
      >
        {/* Container that will hold all content with proper padding */}
        <div 
          className="container-fluid py-2 px-4"
          style={{
            paddingLeft: '2rem',
            paddingRight: '2rem'
          }}
        >
          {/* Brand/Logo */}
          <a 
            className="navbar-brand fw-bold fs-4" 
            onClick={() => handleLinkClick('home')} // Call scrollTo with homeRef
            style={{ cursor: 'pointer' }} // Add cursor pointer to indicate it's clickable
          >
            Nathania Yeo
          </a> 
          
          {/* Toggler button */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar links */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0"> {/* ms-auto for right alignment */}
              <li className="nav-item">
                <a 
                  className="nav-link" 
                  onClick={() => handleLinkClick('home')} // Scroll to home
                  style={{ cursor: 'pointer' }}
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a 
                  className="nav-link" 
                  onClick={() => handleLinkClick('projects')} // Scroll to projects
                  style={{ cursor: 'pointer' }}
                >
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a 
                  className="nav-link" 
                  onClick={() => handleLinkClick('experiences')} // Scroll to experiences
                  style={{ cursor: 'pointer' }}
                >
                  Experiences
                </a>
              </li>
              <li className="nav-item">
                <a 
                  className="nav-link" 
                  onClick={() => handleLinkClick('hackathons')} // Scroll to hackathons
                  style={{ cursor: 'pointer' }}
                >
                  Hackathons
                </a>
              </li>
              <li className="nav-item">
                <a 
                  className="nav-link" 
                  onClick={() => handleLinkClick('moredetails')} // Scroll to more details
                  style={{ cursor: 'pointer' }}
                >
                  More Details
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}


export default Navbar;




