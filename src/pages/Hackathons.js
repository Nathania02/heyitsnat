// // Hackathons.js
// import React from "react";
// import "./Hackathons.css";

// const Hackathons = () => {
//   return (
//     <div className="hackathons">
//       <h1>Hackathons</h1>
//       <div className="hackathon-item">
//         <div className="hackathon-title">
//           TikTok TechJam 2024 <br />
//           (Finalists)
//         </div>
//         <div className="hackathon-description">
//         Problem Statement: In the rapidly evolving landscape of technology, machine learning (ML) stands at the forefront of innovation. 
//           As we step into 2024, the potential for ML to revolutionize industries is immense. 
//           This hackathon aims to explore and create new opportunities that leverage the power of ML infrastructure to solve complex problems, enhance efficiency, and drive growth.
//           <br/>
//           <br/>
//           "Labella", leveraging active learning to minimize cost and time by focusing on most informative data points, is a platform designed to streamline ML data labelling. This platform
//           supports various ML projects and enables users to train models, identifying crucial data points for labelling and iteratively improving model accuracy. Challenges tackled included 
//           adapting active learning for diverse projects, selecting optimal algorithms, handling large datasets and creating an intuitive UI. 
//           <br/>
//           <br/>
//           Github Link: https://github.com/oliviaow2022/techjam        </div>
//       </div>
//       <div className="hackathon-item">
//         <div className="hackathon-title">
//           CivicHacks 2024 Boston University
//         </div>
//         <div className="hackathon-description">
//           A quarterly investigation into the psychology of fashion, with an even
//           split between academic and cultural inquiry. Our latest issue covers
//           the new generation of avant-garde luxury brands emerging from South
//           Korea.
//         </div>
//       </div>
//       <div className="hackathon-item">
//         <div className="hackathon-title">
//           DSTA Brainhack 2024 - TILAI
//         </div>
//         <div className="hackathon-description">
//           A quarterly investigation into the psychology of fashion, with an even
//           split between academic and cultural inquiry. Our latest issue covers
//           the new generation of avant-garde luxury brands emerging from South
//           Korea.
//         </div>
//       </div>
//       <div className="hackathon-item">
//         <div className="hackathon-title">
//           DSTA Brainhack 2023 - CODE_EXP
//         </div>
//         <div className="hackathon-description">
//           A quarterly investigation into the psychology of fashion, with an even
//           split between academic and cultural inquiry. Our latest issue covers
//           the new generation of avant-garde luxury brands emerging from South
//           Korea.
//         </div>
//       </div>
//       <div className="hackathon-item">
//         <div className="hackathon-title">
//           National AI Singapore <br />
//           Challenge
//         </div>
//         <div className="hackathon-description">
//           A quarterly investigation into the psychology of fashion, with an even
//           split between academic and cultural inquiry. Our latest issue covers
//           the new generation of avant-garde luxury brands emerging from South
//           Korea.
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hackathons;


import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const Hackathons = () => {
  return (
    <div className="container mt-3">
      {/* Hackathon items */}
      <div className="row justify-content-center">
        {/* First Hackathon Item */}
        <div className="col-12 col-md-10 col-lg-8 mb-5">
          <div className="text-center mb-4">
            <h3>
              TikTok TechJam 2024 (Finalists) <br className="d-md-none" />
            </h3>
          </div>
          
          <div className="text-start fs-5">
            <p className="small">
              <strong>Problem Statement:</strong> In the rapidly evolving landscape of technology, 
              machine learning (ML) stands at the forefront of innovation. As we step into 2024, 
              the potential for ML to revolutionize industries is immense. This hackathon aims to 
              explore and create new opportunities that leverage the power of ML infrastructure to 
              solve complex problems, enhance efficiency, and drive growth.
            </p>
            <p className="small mt-3">
              <strong>Solution: </strong>"Labella", leveraging active learning to minimize cost and time by focusing on most 
              informative data points, is a platform designed to streamline ML data labelling. This 
              platform supports various ML projects and enables users to train models, identifying 
              crucial data points for labelling and iteratively improving model accuracy. Challenges 
              tackled included adapting active learning for diverse projects, selecting optimal 
              algorithms, handling large datasets and creating an intuitive UI.
            </p>
            <p className="small mt-3">
              <strong>Github Link:</strong> 
              <a href="https://github.com/oliviaow2022/techjam" target="_blank" rel="noopener noreferrer" className="ms-1">
                https://github.com/oliviaow2022/techjam
              </a>
            </p>
          </div>
        </div>
        </div>

      <div className="row justify-content-center">
        {/* First Hackathon Item */}
        <div className="col-12 col-md-10 col-lg-8 mb-5">
          <div className="text-center mb-4">
            <h3>
              CivicHacks 2025 Boston University <br className="d-md-none" />
            </h3>
          </div>
          
          <div className="text-start fs-5">
            <p className="small">
              <strong>Problem Statement:</strong> College students are encouraged to develop software applications that tackle challenges in Civic Engagement, 
              Economic Empowerment, Biodiversity and Education Access. Solutions should aim to promote social good and drive meaningful change in our communities. 
            </p>
            <p className="small mt-3">
              <strong>Solution: </strong>Our team developed a website named "Scam-spot" where we aim to educate citizens about the differnt kind of scams. Besides this, we also hope to build
              a community and foster engagement using our website where users can post different scams and inform one another to be careful.
            </p>
            <p className="small mt-3">
              <strong>Github Link:</strong> 
              <a href="https://github.com/Jerric1801/scam-spot" target="_blank" rel="noopener noreferrer" className="ms-1">
                https://github.com/Jerric1801/scam-spot
              </a>
            </p>
          </div>
        </div>
        </div>

      <div className="row justify-content-center">
        {/* First Hackathon Item */}
        <div className="col-12 col-md-10 col-lg-8 mb-5">
          <div className="text-center mb-4">
            <h3>
              DSTA BrainHack 2024 - TILAI <br className="d-md-none" />
            </h3>
          </div>
          
          <div className="text-start fs-5">
            <p className="small">
              <strong>Problem Statement:</strong> Operating a military-grade turret isn't everyone's forte. Therefore, SAF has innovated a solution: voice-controlled operation. 
              This is where yeou, a talented AI engineer, come into play. Embark on a learning journey in AI and autonomous robotics and compete with other teams by deploying computer vision and natural language processing models 
              to complete challenges in real-world scenarios. Through this, you will be deploying autonomous air defence turrets that can identify, classify and take down air threats to defend our skies.
              <br/><br/>
              You are tasked with developing an AI algorithm that can interpret short, spoken commands and translate them into precise actions for the turret. 
              This includes identifying targets and selecting appropriate ammunition. 
              The challenge is to make this system intuitive and efficient, so even those with no military training can effectively defend our land.
              </p>
              <p className="small">
                <strong>Solution: </strong>Making use of NLP, Object detection and Audio Detection, our team developed an AI algorithm to help translate commands into actions for the turret successfully.
              </p>       
            <p className="small mt-3">
              <strong>Github Link:</strong> 
              <a href="https://github.com/ShermanNovak/til-24-base/tree/main" target="_blank" rel="noopener noreferrer" className="ms-1">
                https://github.com/ShermanNovak/til-24-base/tree/main
              </a>
            </p>
          </div>
        </div>
        </div>

        
      <div className="row justify-content-center">
        {/* First Hackathon Item */}
        <div className="col-12 col-md-10 col-lg-8 mb-5">
          <div className="text-center mb-4">
            <h3>
              DSTA BrainHack 2023 - CODE_EXP <br className="d-md-none" />
            </h3>
          </div>
          
          <div className="text-start fs-5">
            <p className="small">
              <strong>Problem Statement:</strong> How can Gamification be used to enhance employee experience.
            </p>
            <p className="small mt-3">
              <strong>Solution: </strong>Our team designed a Figma mobile game application prototype where we gamified the onboarding process for new employees to make it more interesting.
            </p>
          </div>
        </div>
        </div>


      <div className="row justify-content-center">
        {/* First Hackathon Item */}
        <div className="col-12 col-md-10 col-lg-8 mb-5">
          <div className="text-center mb-4">
            <h3>
              National AI Challenge (NAISC) <br className="d-md-none" />
            </h3>
          </div>
          
          <div className="text-start fs-5">
            <p className="small">
              <strong>Problem Statement:</strong> Design and build a tool (app, dashboard, analysis) with AI Singapore’s AI Brick PeekingDuck (Computer Vision) 
              and/or SGnlp (Natural Language Processing), 
              that can help, assist, inform or entertain Singaporeans or businesses.
            </p>
            <p className="small mt-3">
              <strong>Solution: </strong>Making use of PeekingDuck, our team developed "PosturePolice", an AI model that focuses on aiding the physiotherapeutic rehabilitation 
              of various muscle groups in the human body for people who are recovering from major illnesses such as stoke or injuries. 
              Patients would stand infront of the camera and their joints will be detected. While going through the treatment, angles at their joints will be measured and 
              the system will indicate if they are in the right or wrong position.  
            </p>
            <p className="small mt-3">
              <strong>Github Link:</strong> 
              <a href="https://github.com/Nathania02/NAISC" target="_blank" rel="noopener noreferrer" className="ms-1">
                https://github.com/Nathania02/NAISC
              </a>
            </p>
          </div>
        </div>
        </div>
      </div>
  );
};

export default Hackathons;
