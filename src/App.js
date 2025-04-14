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


const App = () => {
  return (
    <div className="App">
      <Navbar/>
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
    <div className='about'>
      <h2 id='about'>Graduating in 2025 Dec, I am interested</h2>
      </div>
    <div className='projects'>
      <h1 id='proj'>Projects</h1>
      <ImageGrid/>
    </div>
    <div className='Experiences'>
      <h1 id='exp'>Experiences</h1>
      <InternshipCardBallet/>
      <InternshipCardHTX/>
      <InternshipCardMarketing/>
      <InternshipCardOps/>
      <InternshipCardGovTech/>
    </div>
    <div className='hackathons'>
      <Hackathons/>
    </div>
    <div className='awards'>
      <h1 id='award'>Awards</h1>
    </div>
    <div className='skills'>
      <h1 id='skills'>Skills</h1>
    </div>
    <div className='hobbies'>
      <h1 id='hobbies'>Hobbies</h1>
    </div>
    </div>
  );
};

export default App;
