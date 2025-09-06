import React, {useRef} from 'react';
import Navbar from '../components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'

const HTXInternshipDetails = () => {
  const homeRef = useRef(null);
  const projectsRef = useRef(null);
  const experiencesRef = useRef(null);
  const hackathonsRef = useRef(null);
  const moreDetailsRef = useRef(null);
  
    // Function to handle scrolling, passed down to Navbar
  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

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
        <div className="Navbar">
        <Navbar scrollTo={scrollToSection} refs={{homeRef, projectsRef, experiencesRef, hackathonsRef, moreDetailsRef}}/>
        </div>

      {/* Main content, pushed to the bottom and taking remaining space */}
      {/* Use flex-grow-1 to make this container take up all available vertical space */}
      {/* Use auto margins (mb-auto or mt-auto) if you want it explicitly at the bottom, but flex-grow-1 is usually enough for the layout. */}
      {/* text-center for centering the text content if needed */}
      <div className="container-fluid d-flex flex-column justify-content-end align-items-center mt-5"> {/* Changed to d-flex flex-column for vertical alignment and justify-content-end */}
        <div className="content">
          <h2 className="text-center mx-3">AI Engineer Intern</h2> {/* Add text-center if you want the h2 centered */}
          <p className="text-justify mt-5"> {/* Use text-justify if you want justified text, or text-left/text-start for left-aligned */}
            <b>Read my medium article here:</b> <a href="https://medium.com/htx-s-s-coe/detecting-the-undetectable-my-internship-journey-fighting-deepfakes-with-ai-76b7ca27e60c">here</a>
            <br/><br/>
            During summer of 2024, I had a chance to intern in Home Team Science and Technology Agency (HTX) as an Artificial Intelligence Engineer Intern.
            The main project that I worked on was developing an image deepfake detection feature for HTX's deepfake detector product named AlchemiX. This project was
            an eye-opening experience as I was able to learn more about the deepfake scams and dive deeper as to how deepfake images or videos were created. 
            There were many challenges along the way but I am glad that I was able to overcome them with the help of my colleagues and mentors. 

           <br/><br/>Besides having the chance to contribute to protecting citizens from deep fake scams, I was also able to forge new connections and friendships during
            this internship. I am also very thankful that I was given a chance to extend my full-time internship into a part-time internship for another 3 months from August 2024 to October 2024
            and that I could continue contributing to Singapore public section in keeping Singapore safe. My internship at HTX had definitely been a fruitful one with new knowledge learnt that would
            be helpful in this field in the future.

            </p>
          <div className="container">
            <div className='row gx-2'>
              <div className='col-6'>
                <img src="/heyitsnat/htxgrp.jpg" 
                alt="Image 1" 
                className="img-fluid w-100" />
              </div>
              <div className='col-6'>
                <img src="/heyitsnat/htxintern.jpg" 
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

export default HTXInternshipDetails;