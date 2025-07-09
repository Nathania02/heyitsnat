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
    <div className="container py-5">
      {/* Centered heading */}
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8 text-center">
          <h1 className="mb-5">Hackathons</h1>
        </div>
      </div>

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
              "Labella", leveraging active learning to minimize cost and time by focusing on most 
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
              <strong>About the Challenge: </strong>Civic Tech Hackathon provides an opportunity for student to solve problems in government, education and policy through software engineering and coding. 
              Participants will complete one of the four main tracks (Civic Engagement, Economic Empowerment, Biodiversity and Education Access). 
            </p>
            <p className="small">
              <strong>Problem Statement:</strong> College students are encouraged to develop software applications that tackle challenges in Civic Engagement, 
              Economic Empowerment, Biodiversity and Education Access. Solutions should aim to promote social good and drive meaningful change in our communities. 
            </p>
            <p className="small mt-3">
              Our team developed a website named "Scam-spot" where we aim to educate citizens about the differnt kind of scams. Besides this, we also hope to build
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
              <strong>About the Challenge: </strong>Civic Tech Hackathon provides an opportunity for student to solve problems in government, education and policy through software engineering and coding. 
              Participants will complete one of the four main tracks (Civic Engagement, Economic Empowerment, Biodiversity and Education Access). 
            </p>
            <p className="small">
              <strong>Problem Statement:</strong> College students are encouraged to develop software applications that tackle challenges in Civic Engagement, 
              Economic Empowerment, Biodiversity and Education Access. Solutions should aim to promote social good and drive meaningful change in our communities. 
            </p>
            <p className="small mt-3">
              Our team developed a website named "Scam-spot" where we aim to educate citizens about the differnt kind of scams. Besides this, we also hope to build
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
              DSTA BrainHack 2023 - CODE_EXP <br className="d-md-none" />
            </h3>
          </div>
          
          <div className="text-start fs-5">
            <p className="small">
              <strong>About the Challenge: </strong>Civic Tech Hackathon provides an opportunity for student to solve problems in government, education and policy through software engineering and coding. 
              Participants will complete one of the four main tracks (Civic Engagement, Economic Empowerment, Biodiversity and Education Access). 
            </p>
            <p className="small">
              <strong>Problem Statement:</strong> College students are encouraged to develop software applications that tackle challenges in Civic Engagement, 
              Economic Empowerment, Biodiversity and Education Access. Solutions should aim to promote social good and drive meaningful change in our communities. 
            </p>
            <p className="small mt-3">
              Our team developed a website named "Scam-spot" where we aim to educate citizens about the differnt kind of scams. Besides this, we also hope to build
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
              National AI Challenge (NAISC) <br className="d-md-none" />
            </h3>
          </div>
          
          <div className="text-start fs-5">
            <p className="small">
              <strong>About the Challenge: </strong>Civic Tech Hackathon provides an opportunity for student to solve problems in government, education and policy through software engineering and coding. 
              Participants will complete one of the four main tracks (Civic Engagement, Economic Empowerment, Biodiversity and Education Access). 
            </p>
            <p className="small">
              <strong>Problem Statement:</strong> College students are encouraged to develop software applications that tackle challenges in Civic Engagement, 
              Economic Empowerment, Biodiversity and Education Access. Solutions should aim to promote social good and drive meaningful change in our communities. 
            </p>
            <p className="small mt-3">
              Our team developed a website named "Scam-spot" where we aim to educate citizens about the differnt kind of scams. Besides this, we also hope to build
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
      </div>
  );
};

export default Hackathons;
