import React from 'react';
import Navbar from '../components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'

const GreenTree = () => {
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
          <h2 className="text-center mx-3">The Green Tree</h2> {/* Add text-center if you want the h2 centered */}
        <p className="text-justify mt-3">This was a project done under the module named Web Applications Programming II. 
            Our team realised that 97% of our population wish to live sustainability but are deterred by numerous factors such as 
            money (eco-friendly products are too expensive), convenience and lack of awareness. 
            <br/><br/>Project GitHub Link:
            <a href="https://github.com/Nathania02/wad2_thegreentree" target="_blank" rel="noopener noreferrer" className="ms-1">
                https://github.com/Nathania02/wad2_thegreentree
            </a>
            </p>
            {/* <div className="container">
                <div className="row">
                    <div className="col-12">
                        <img src="/heyitsnat/gaa.png" 
                        alt="Image 2" 
                        className="img-fluid" />
                    </div>
                </div>
            </div> */}

        
        </div>
      </div>
    </div>
  );
};

export default GreenTree;