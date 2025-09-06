import React, { useRef, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation  } from 'react-router-dom';
import './App.css';
import './components/Navbar.css';
import Navbar from './components/Navbar';
import ImageGrid from './pages/ImageGrid';
import Hackathons from './pages/Hackathons';
import ExperienceGrid from './pages/ExperienceGrid';
import Certifications from './pages/Certifications';
import SkillsSection from './pages/Awards';


const App = () => {
  const location = useLocation()
  const homeRef = useRef(null);
  const projectsRef = useRef(null);
  const experiencesRef = useRef(null);
  const hackathonsRef = useRef(null);
  const moreDetailsRef = useRef(null);
  const certificationsRef = useRef(null);

  const refs = {
    home: homeRef,
    projects: projectsRef,
    experiences: experiencesRef,
    hackathons: hackathonsRef,
    moredetails: moreDetailsRef,
    certifications: certificationsRef,
  };
  // Function to handle scrolling, passed down to Navbar
  // const scrollToSection = (ref) => {
  //   if (ref && ref.current) {
  //     ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  //   }
  // };

  useEffect(() => {
    // Check if we were redirected from another page with a scroll request
    if (location.state?.sectionId) {
      setTimeout(() => {
      const targetRef = refs[location.state.sectionId]?.ref;
      if (targetRef && targetRef.current) {
        targetRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      }, 0);
    }
  }, [location.state]);
  


  return (
    <div className="container-fluid py-2">
      <div className='welcomeContainer' id='home' ref={homeRef}>
        <div className="Navbar">
        <Navbar />
        </div>
        <div className="welcome-page">
          <div className="content">
            <h1>
              Hi, nice to meet you! <br/> I'm Nathania! 
              {/* <span className="wave">👋</span> */}
            </h1>
            <p>
              A senior student studying Information Systems, majoring in Business Analytics in SMU.
            </p>
            <div className="social-icons">
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="mailto:example@email.com">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
            <button className="contact-button">Contact Me</button>
          </div>
          <img src="/heyitsnat/profile.png" alt="Nathania Yeo" className="profile-image"/> 
      </div>
    </div>
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8 text-center">
          <p className="mt-5 mb-5" id='about'>Passionate about data science and AI, I enjoy making use of data-driven strategies to build smarter systems 
            to help people make informed decisions. Amazed by the potential of technology, I am driven to solve real-world problems and create impactful innovations. 
            <br/><br/>
            In my spare time, I dive into passion projects such as crocheting, piecing a jigsaw puzzle together, designing notion templates and 
            creating digital illustrations. To take a break from the fast-paced life, you might find me playing the piano or dancing ballet, hobbies that I have
            picked up since young.
            </p>
        </div>
      </div>
      <div className='Experiences' id='experiences' ref={experiencesRef}>
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8 text-center">
          <h1 className="mt-2" id='experiences'>Experiences</h1>
        </div>
      </div>
      <ExperienceGrid/>
    </div>
    <div className='projects' id='projects' ref={projectsRef}>
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8 text-center">
          <h1 className="mt-5">Projects</h1>
        </div>
      </div>
      <ImageGrid/>
    </div>
    
    <div className='hackathons' id='hackathons' ref={hackathonsRef}>
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8 text-center">
          <h1 className="mt-3" id='hackathons'>Hackathons</h1>
        </div>
      </div>
      <Hackathons/>
    </div>
    <div className='more-details' id='moredetails' ref={moreDetailsRef}>
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8 text-center">
          <h1 className="mt-3" id='moredetails'>Skills</h1>
        </div>
      </div>
      <SkillsSection/>
    </div>

    <div className='certifications' id='certifications' ref={certificationsRef}>
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8 text-center">
          <h1 className="mt-3" id='certifications'>Awards & Certifications</h1>
        </div>
      </div>
      <Certifications/>
    </div>
    </div>
  );
};

export default App;



