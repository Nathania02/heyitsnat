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
        <div className="content px-5">
          <h2 className="text-center">Data Science and Artificial Intelligence Intern</h2> {/* Add text-center if you want the h2 centered */}
        <p className="text-justify mt-3">Under the Polytechnic Technology Programme (PTP), I had a chance to intern in GovTech during my third year in polytechnic. This internship was an eye opening experience. Being my 
          first internship, I was very nervous and I did not know what to expect. Fortunately, I was very lucky to meet extremely helpful and patient mentors and colleagues. 
          Whenever I met challenges, my colleagues would always be willing to help and provide guidance to me. 
          I have to admit that the learning curve was very steep in the beginning. The tools used in the real-world was different from what 
          school had taught us and therefore, I had to watch videos and read articles to have a better understanding on how to use those tools. 

          <br/><br/>

          During this one year, I was assigned a major project which was to develop a Video Analytics Model Evaluation Framework to evaluate machine learning models.
          This task seemed daunting at first but slowly, I got the hang of what I needed to do and was able to developed the framework successfully. 
          This project was taken as my Final Year Project and with this project, I was awarded the Accenture Project Prize. 

          <br/><br/>
          I am very grateful for this internship opportunity with GovTech where I had learnt a lot. After the 1 year with GovTech, I had a chance to extend my internship for
          another 3 months to improve on the framework. 
          </p>  
          <p className="text-justify mt-3">Read my short reflection post <a href='https://www.linkedin.com/posts/temasek-polytechnic_temasekpoly-tpcreatingtomorrow-activity-6915609417770053633-cZZR?utm_source=share&utm_medium=member_desktop'>here</a>! </p>
          <div className="container">
            <div className='row gx-2'>
              <div className='col-6'>
                  <img 
                  src="/heyitsnat/govtechprofile.jpg" 
                  alt="Image 1" 
                  className="img-fluid w-100" />
              </div>
              <div className='col-6'>
                  <img src="/heyitsnat/govtechgrp.jpg" 
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

export default GovTechInternshipDetails;