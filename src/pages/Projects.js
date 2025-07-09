// src/Services.js
import React from 'react';
import "./Projects.css";

const Services = () => {
  return (
    <div className="servicesContainer">
      <div className="servicesContentWrapper">
        <div className="textContent">
          <h2>My Awesome Services</h2>
          <p>Lorem ipsum dummy text are usually use print and website industry. So I used their also...</p>
        </div>
        <div className="servicesList">
          <div className="serviceItem">
            <div className='serviceIconWrapper'>
            <img src="developer-icon.png" alt="Developer Icon" className="serviceIcon" />
            </div>
            <h3 className="serviceTitle">Developer</h3>
            <p className="serviceDescription">Lorem ipsum dummy text...</p>
          </div>
          <div className="serviceItem">
          <div className='serviceIconWrapper'>
            <img src="developer-icon.png" alt="Developer Icon" className="serviceIcon" />
            </div>
            <h3 className="serviceTitle">UI/UX</h3>
            <p className="serviceDescription">Lorem ipsum dummy text...</p>
          </div>
          <div className="serviceItem">
          <div className='serviceIconWrapper'>
            <img src="developer-icon.png" alt="Developer Icon" className="serviceIcon" />
            </div>
            <h3 className="serviceTitle">Design</h3>
            <p className="serviceDescription">Lorem ipsum dummy text...</p>
          </div>
        </div>
        <button className="hireButton">Hire CV</button>
        <div className="scrollIndicator">
          {/* You can add an arrow down icon here */}
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Services;