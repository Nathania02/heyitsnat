import React from 'react';

function Navbar() {
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
          <a className="navbar-brand fw-bold fs-4" href="/heyitsnat">Nathania Yeo</a>
          
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
              {['Home', 'Projects', 'Experiences', 'Hackathons', 'More Details'].map((item) => (
                <li className="nav-item" key={item}>
                  <a 
                    className="nav-link" 
                    href={`/heyitsnat/${item.toLowerCase().replace(' ', '')}`}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;