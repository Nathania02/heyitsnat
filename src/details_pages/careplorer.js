import React from 'react';
import Navbar from '../components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'

const Carexplorer = () => {
  return (
    // Use Bootstrap's d-flex, flex-column, and vh-100 to make the App container a flex column taking full viewport height
      <div
        className="d-flex flex-column"
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
          <h2 className="text-center mx-3">CAREXPLORER</h2> {/* Add text-center if you want the h2 centered */}
        <p className="text-justify mt-3">This was a project done under the module named Geospatial Analytics and Applications. 
            With the rising number of aging population, our group's aim in this project was to assess the spatial alignment of eldercare facilities and CHAS clinics through goespatial methods
            such as Spatial Point Pattern Analysis (SPPA) and Geographical Accessibility Modelling. 
            <br/><br/>Project Website Link:
            <a href="https://carexplorer.netlify.app/" target="_blank" rel="noopener noreferrer" className="ms-1">
                https://carexplorer.netlify.app/
            </a>
            </p>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <img src="/heyitsnat/gaa.png" 
                        alt="Image 2" 
                        className="img-fluid" />
                    </div>
                </div>
            </div>

        
        </div>
      </div>
    </div>
  );
};

export default Carexplorer;