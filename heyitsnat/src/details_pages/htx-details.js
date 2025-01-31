import React from 'react';
import './htx-details.css'
import Navbar from '../components/Navbar';

const HTXInternshipDetails = () => {
  return (
    <div>
      <Navbar/>
      <div class="container">
        <img src="/heyitsnat/govtechprofile.jpg" alt="Centered Image" class="image" />
      </div>  
      <h2>Data Science and Artificial Intelligence Intern</h2>
      <div class='containerdescription'>
        <p>Read my short reflection post <a href='https://www.linkedin.com/posts/temasek-polytechnic_temasekpoly-tpcreatingtomorrow-activity-6915609417770053633-cZZR?utm_source=share&utm_medium=member_desktop'>here</a>! </p>
        <p>I had a chance to intern in GovTech during my third year in polytechnic. This internship was an eye opening experience. Being my 
          first internship, I was very nervous and I did not know what to expect.  </p>   
      </div> 
      {/* Add more details about the internship here */}
    </div>
  );
};

export default HTXInternshipDetails;