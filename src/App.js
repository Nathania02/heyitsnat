// import './App.css';
// import './Navbar.js';
// import Navbar from './Navbar.js';

// function App() {
//   return (
//     <div className="App">
//       <Navbar />
//       <h1>Hi, my name is Nathania Yeo. I am a junior student studying Information Systems in SMU. </h1>
//       <div>
//         <h1 id='proj'>Projects</h1>
//       </div>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import './App.css';
import './components/Navbar.css';
import Navbar from './components/Navbar';
import ImageGrid from './pages/ImageGrid';
import Hackathons from './pages/Hackathons';
import InternshipCardGovTech from './pages/InternshipGovTech';
import InternshipCardHTX from './pages/InternshipHTX';
import InternshipCardMarketing from './pages/Marketing';
import InternshipCardOps from './pages/Ops';
import InternshipCardBallet from './pages/Ballet';
import ExperienceGrid from './pages/ExperienceGrid';
import PolicyPage from './pages/Awards';


const App = () => {
  return (
    <div className="container-fluid">
      <div className='welcomeContainer'>
        <div className="Navbar">
        <Navbar/>
        </div>
        <div className="welcome-page">
          <div className="content">
            <h1>
              Hi, I'm Nathania Yeo! 
              {/* <span className="wave">👋</span> */}
            </h1>
            <p>
              I'm a junior student studying Information Systems in SMU.
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
    <div className='about'>
      <h2 id='about'>PASSIONATE ABOUT DATA SCIENCE AND AI</h2>
      </div>
    <div className='projects'>
      <h1 id='proj'>Projects</h1>
      <ImageGrid/>
    </div>
    <div className='Experiences'>
      <h1 id='exp'>Experiences</h1>
      <ExperienceGrid/>
      {/* <InternshipCardBallet/>
      <InternshipCardHTX/>
      <InternshipCardMarketing/>
      <InternshipCardOps/>
      <InternshipCardGovTech/> */}
    </div>
    <div className='hackathons'>
      <Hackathons/>
    </div>
    <div className='more-details'>
      <PolicyPage/>
    </div>
    </div>
  );
};

export default App;
