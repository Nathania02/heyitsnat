import React from 'react';
import './htx-details.css'
import Navbar from '../components/Navbar';

const HTXInternshipDetails = () => {
  return (
    <div>
      <Navbar/>
      <div class="container">
        <img src="/heyitsnat/htxprofile.jpg" alt="Centered Image" class="image" />
      </div>  
      <h2>Data Science Intern</h2>
      <div class='containerdescription'>
        <p>During summer break of 2024, I had a chance to intern in Home Team Science and Technology Agency (HTX) as a Data Science Intern.
          The main project that I worked on was developing an image deepfake detection feature for HTX's deepfake detector product named AlchemiX.
          It was tough in the beginning as there were many existing parts that I needed to learn and understand before building the new feature that
          could be integrated into the current product. Find out more on what was my role and what I have achieved in my Medium article here! 
          <br/>Besides having the chance to contribute to protecting citizens from deep fake scams, I was also able to forge new connections and friendships during
          this internship. I am also very thankful that I was given a chance to extend my full time internship into a part-time internship for another 3 months from August to October.
          Overall, this internship had been an extremely fruitful one as I learnt new knowledge that would be helpful in this field in the future.</p>   
      </div> 
      <div className="image-row">
      <img src="/heyitsnat/htxgrp.jpg" alt="Image 1" className="square-image" />
      <img src="/heyitsnat/htxintern.jpg" alt="Image 2" className="square-image" />
    </div>
    </div>
  );
};

export default HTXInternshipDetails;