import React from 'react';
import './ops-details.css'
import Navbar from '../components/Navbar';

const OpsDetails = () => {
  return (
    <div>
      <Navbar/>
        <h2>Operations Associate</h2>
      <div class='containerdescription'>
        <p>From October 2023 to February 2024, I was the Operations Associate for SMU Patron's Day 2024. Although this role was challenging and tiring, I enjoyed the entire process and had gain new knowledge and skills from this. 
            It was raining during the event day which made operations messy and more complicated. However, with good teamwork, my team members and I were able to solve issues successfully and smoothly.
            <br/><b>My Role:</b><br/>
            <li>Facilitated and coordinated operational efforts between the Office of Student Life, Office of Safety and Security and other relevant offices</li>
            <li>Worked closely with the Directors to support and provide crucial inputs on the operational planning of all functional areas</li>
            <li>Provided support in Administrative and Finance matters regarding operations as well as assisting the manage the Central Command Centre (CCC) during the event</li>
            <li>Managed the crowd on the event day itself, ensuring that each location is safe and everyone is able to have fun. </li>
            <b>Outcome:</b>
            <br/>Patron's Day 2024 was a success with everything going smoothly, having no accidents and injuries. 
            </p>
      </div> 
      <div className="image-row">
      <img src="/heyitsnat/Opsteam.jpg" alt="Image 1" className="square-image" />
      <img src="/heyitsnat/ops.jpg" alt="Image 2" className="square-image" />
    </div>
      {/* Add more details about the internship here */}
    </div>
  );
};

export default OpsDetails;