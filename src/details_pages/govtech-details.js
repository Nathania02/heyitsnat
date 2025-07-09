import React from 'react';
import Navbar from '../components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'

const GovTechInternshipDetails = () => {
  return (
    // Use Bootstrap's d-flex, flex-column, and vh-100 to make the App container a flex column taking full viewport height
      <div
        className="d-flex flex-column "
        style={{
          backgroundColor: '#fef0f5',
          margin: '10px',
          minHeight: '100vh',
        }}
      >
      {/* Navbar at the top, centered horizontally */}
      {/* Use Bootstrap's container-fluid for full width, or container for a fixed width */}
      {/* Add justify-content-center to the parent of Navbar for horizontal centering */}
        <div> {/* Use container to center content within the navbar */}
          <Navbar />
        </div>

      {/* Main content, pushed to the bottom and taking remaining space */}
      {/* Use flex-grow-1 to make this container take up all available vertical space */}
      {/* Use auto margins (mb-auto or mt-auto) if you want it explicitly at the bottom, but flex-grow-1 is usually enough for the layout. */}
      {/* text-center for centering the text content if needed */}
      <div className="container-fluid d-flex flex-column justify-content-end align-items-center mt-5"> {/* Changed to d-flex flex-column for vertical alignment and justify-content-end */}
        <div className="content">
          <h2 className="text-center">Data Science and Artificial Intelligence Intern</h2> {/* Add text-center if you want the h2 centered */}
        <p className="text-justify mt-3">I had a chance to intern in GovTech during my third year in polytechnic. This internship was an eye opening experience. Being my 
          first internship, I was very nervous and I did not know what to expect. Fortunately, I was very lucky to meet extremely helpful colleagues. Whenever I met challenges,
          my colleagues would always be willing to help and provide guidance to me. </p>  
          <p className="text-justify mt-3">Read my short reflection post <a href='https://www.linkedin.com/posts/temasek-polytechnic_temasekpoly-tpcreatingtomorrow-activity-6915609417770053633-cZZR?utm_source=share&utm_medium=member_desktop'>here</a>! </p>
        </div>
      </div>
    </div>
  );
};

export default GovTechInternshipDetails;