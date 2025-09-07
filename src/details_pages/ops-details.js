import React from 'react';
import Navbar from '../components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'

const OpsDetails = () => {
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
        <div className="content px-5">
          <h2 className="text-center mx-3">Operations Associate</h2> {/* Add text-center if you want the h2 centered */}
        <p className="text-justify mt-3">From October 2023 to February 2024, I was the Operations Associate for SMU Patron's Day 2024. Although this role was challenging and tiring, I enjoyed the entire process and had gain new knowledge and skills from this. 
            It was raining during the event day which made things more complicated. However, with good teamwork, my team members and I were able to solve issues successfully and smoothly.
            <br/><br/><b>My Role:</b><br/>
            <li>Facilitated and coordinated operational efforts between the Office of Student Life, Office of Safety and Security and other relevant offices</li>
            <li>Worked closely with the Directors to support and provide crucial inputs on the operational planning of all functional areas</li>
            <li>Provided support in Administrative and Finance matters regarding operations as well as assisting the manage the Central Command Centre (CCC) during the event</li>
            <li>Managed the crowd on the event day itself, ensuring that each location is safe and everyone is able to have fun. </li>
            <br/><b>Outcome:</b>
            <br/>Patron's Day 2024 was a success with everything going smoothly, having no accidents and injuries. 
            </p>
          <div className="container">
            <div className='row gx-2'>
              <div className='col-6'>
                  <img 
                  src="/heyitsnat/opsteam.jpg" 
                  alt="Image 1" 
                  className="img-fluid w-100" />
              </div>
              <div className='col-6'>
                  <img src="/heyitsnat/ops.jpg" 
                  alt="Image 2" 
                  className="img-fluid w-100" />
              </div>
            </div>
         </div>
        </div>
      </div>
    </div>
  );
};

export default OpsDetails;