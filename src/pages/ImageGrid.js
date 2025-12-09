import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { image } from 'framer-motion/client';

// Define your project data here
const projects = [
    {
    id: 1,
    title: "FYP: Sepsis Phenotyping",
    image: '/heyitsnat/phenosense.png',
    description: (
          <p className="text-justify mt-3">This is my Final Year Project (FYP) done in collaboration with SingHealth.
          Our group was tasked to trained multiple machine learning models for sepsis phenotyping and compare their performance. 
          We made used of MIMIC-IV, a de-identified dataset containing patient information such as demographics, vital signs, laboratory results and clinical outcomes.
          Before we could train the models, we conducted literature review and a comprehensive research to understand more about Sepsis 
          and the various phenotyping methods that were done by other researchers.
          During this research, we identified and came up with a list of features that could be used to train the ML models. 
          As clinical data is usually messy and incomplete, we had to also deal with missing data appropriately where we made used of 
          imputation methods such as Multiple Imputation by Chained Equations (MICE) as well as BRITS and SAITS.
          Machine Learning Models that have been trained include Consensus K-means Clustering, Weighted K-means Clustering with Dynamic Time Warping,
          Latent Class Analysis and Group-based Trajectory Modeling (GBTM). 
          <br/><br/> 
          In order to deliver a whole pipeline to SingHealth, our team proactively developed a platform named "Phenosense", 
          a platform which boosts collaboration between clinicians and data scientists in this sepsis phenotyping research.
          Besides collaboration, "Phenosense" also allows users to visualise the phenotyping results interactively. In addition,
          all model results are consolidated in this platform for easy access and retrieval.
          <br/><br/>
          Core features of this website includes:
          <ul>
            <li>Data Scientist are notified of Model Training Progress (Success/Failure)</li>
            <li>Notes and Feedback Section for Data Scientists and Clinicians to provide notes or feedback.</li>
            <li>Results are consolidated and can be accessed by any data scientists.</li>
            <li>Clinicians are notified when model training results are sent to them.</li>
          </ul>
          Software/Tech Stack that were used in our project: 
          <ul>
            <li>Agile: Jira, Google Drive</li>
            <li>Frontend: Vue.js, Tailwind CSS</li>
            <li>Backend: Python, FastAPI, Celery, Redis</li>
            <li>Testing: Postman API</li>
          </ul>
          As this is a confidential project with SingHealth, I am unable to share the project website or GitHub link here.
          <br/><br/>
          <a href="https://drive.google.com/file/d/1XN33h5JgwyJSCU7lQZ8KAyGRE23sdPJv/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="ms-1">
              Report PDF Link
          </a>
        </p>

    )
  },
  {
    id: 2,
    title: 'PDP Helpbot',
    image: '/heyitsnat/genai.png',
    description: (
      <p className="text-justify mt-3">
        This project focuses on a key problem that most Singaporeans face - understanding the law.
        With this helpbot, our team aims to consolidate the bulk of Singapore legislations regarding data
        protection and provide it to users in plain English. Users can clarify their doubts regarding data
        protection rights and obligations. 
        <br/><br/>
        Two types of RAG have been used in this helpbot: Naive RAG and Advanced RAG.
        For both RAG methods, the data sources have been chunked into smaller pieces and stored in a vector database. 
        Evaluation of both RAG methods have been done where metrics such as Answer Relevancy, Answer Correctness etc. were used. 
    </p>
    )
  },
  {
    id: 2,
    title: 'The Green Tree',
    image: '/heyitsnat/greentree.png',
    description: (
      <p className="text-justify mt-3">This was a project done under the module named Web Applications Programming II. 
        Our team realised that 97% of our population wish to live sustainability but are deterred by numerous factors such as 
        money (eco-friendly products are too expensive), convenience and lack of awareness. 
        <br/><br/>Project GitHub Link:
        <a href="https://github.com/Nathania02/wad2_thegreentree" target="_blank" rel="noopener noreferrer" className="ms-1">
            https://github.com/Nathania02/wad2_thegreentree
        </a>
    </p>
    ),
  },
  {
    id: 3,
    title: 'CAREXPLORER',
    image: '/heyitsnat/gaa.png',
    description: (
      <p className="text-justify mt-3">This was a project done under the module named Geospatial Analytics and Applications. 
        With the rising number of aging population, our group's aim in this project was to assess the spatial alignment of eldercare facilities and CHAS clinics through goespatial methods
        such as Spatial Point Pattern Analysis (SPPA) and Geographical Accessibility Modelling. 
        <br/><br/>Project Website Link:
        <a href="https://carexplorer.netlify.app/" target="_blank" rel="noopener noreferrer" className="ms-1">
            https://carexplorer.netlify.app/
        </a>
      </p>
    ),
  },
  {
    id: 4,
    title: 'WFH Tracking System',
    image: '/heyitsnat/wfhtrackingsystem.png',
    description: (
      
        <p className="text-justify mt-3">This was a project done under the module named Software Project Management. 
          Each group had a product team as well as developers and we were tasked to design a Work-From-Home tracking system as our product. 
          We had to follow the agile framework while developing this product where we had 2 weeks sprints continuously for 3 months. 
          <br/><br/>
          In this WFH Tracking system, we aimed to optimise the tracking of employee's WFH activities in an All-in-One platform. 
          Core functionalities of this website includes:
          <ul>
            <li>Human Resources and Senior Management viewing the Overall Schedule of the Organisation</li>
            <li>Managers and Directors viewing their own Team's schedule as well as managing their team's WFH applications</li>
            <li>Staff viewing their team's as well as their own schedule.</li>
            <li>Staff applying for WFH arrangement and managing their own application.</li>
          </ul>
          Software/Tech Stack that were used in our project: 
          <ul>
            <li>Agile: Jira, Google Drive, Confluence</li>
            <li>Frontend: Vue.js, Tailwind CSS</li>
            <li>Backend: Python, Flask, SQLAlchemy</li>
            <li>Testing: Postman API</li>
            <li>Deployment: Netlify, Render, AWS S3</li>
          </ul>
          Project Website Link:
          <a href="https://is212-g8t5.netlify.app/" target="_blank" rel="noopener noreferrer" className="ms-1">
            https://is212-g8t5.netlify.app/
          </a><br/>
          Project GitHub Link:
          <a href="https://github.com/sriyanope/IS212_G8T5" target="_blank" rel="noopener noreferrer" className="ms-1">
            https://github.com/sriyanope/IS212_G8T5
          </a>
        </p>
    )
  }
  // {
  //   id: 5,
  //   title: 'AI Document Assistant',
  //   image: 'https://placehold.co/400x300/c0c0c0/333333?text=AI+Doc+Assistant',
  //   description: (
      
  //       <p className="text-justify mt-3">This was a coding project that I did during Summer 2025. Reading through Medium articles that were talking about technologies, 
  //       I came across this article where the author built a custom AI Document Assistant that analyses PDFs and produce results based on the user query. 
  //       <br/><br/>
  //       Medium Article Link: 
  //         <a href="https://python.plainenglish.io/how-i-built-a-custom-ai-document-assistant-that-understands-1000s-of-pdfs-and-talks-like-a-human-561c77e29667" target="_blank" rel="noopener noreferrer" className="ms-1">
  //          https://python.plainenglish.io/how-i-built-a-custom-ai-document-assistant-that-understands-1000s-of-pdfs-and-talks-like-a-human-561c77e29667
  //         </a>
  //         <br/><br/>
  //         Users can upload a folder with all their PDFs file, ask a question and this AI Document Assistant would give the answer.
  //         Software/Tech Stack that were used in this project: 
  //         <ul>
  //           <li>Python</li>
  //           <li>Ollama</li>
  //           <li>Gradio</li>
  //         </ul>
  //         There are still improvement needed to be made to this AI Document Assistant. Some improvements include, allowing the assistant to process image and ultimately, 
  //         provide the image as an answer to the user if he/she asks for it. Another improvement is to improve the result accuracy, ensuring that the assistant is able to provide 
  //         the correct answer to the user query. 
  //         <br/> <br/>
  //         Project GitHub Link:
  //         <a href="https://github.com/Nathania02/ai_doc_assistant" target="_blank" rel="noopener noreferrer" className="ms-1">
  //           https://github.com/Nathania02/ai_doc_assistant
  //         </a>
  //       </p>
  //   )
  // }
];

const ImageGrid = () => {
  // State to manage modal visibility
  const [showModal, setShowModal] = useState(false);
  // State to store the data of the selected project
  const [selectedProject, setSelectedProject] = useState(null);

  // Function to open the modal with the clicked project's data
  const handleShow = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  // Function to close the modal
  const handleClose = () => {
    setShowModal(false);
    setSelectedProject(null); // Clear selected project data on close
  };

  // Function to chunk the projects array into groups of 3
  const chunkArray = (arr, chunkSize) => {
    const R = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;
  };

  const projectChunks = chunkArray(projects, 3); // Display 3 projects per carousel item

  return (
    <section id="projects" className="py-5">
      <Container>
        <Carousel
          interval={null} // Disable auto-sliding
          controls={true} // Show next/prev buttons
          indicators={false} // Hide bottom indicators
          touch={true} // Enable swipe for touch devices
          prevIcon={<span aria-hidden="true" className="carousel-control-prev-icon bg-dark rounded-circle p-3 d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }} />}
          nextIcon={<span aria-hidden="true" className="carousel-control-next-icon bg-dark rounded-circle p-3 d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }} />}
        >
          {projectChunks.map((chunk, index) => (
            <Carousel.Item key={index}>
              <Row className="justify-content-center">
                {chunk.map(project => (
                  <Col key={project.id} xs={12} md={6} lg={4} className="mb-4 d-flex justify-content-center">
                    <div className="text-center project-card p-3 rounded shadow-sm bg-white">
                      {/* On click, open the modal and pass the project data */}
                      <div className="d-block" onClick={() => handleShow(project)} style={{ cursor: 'pointer' }}>
                        <Image
                          src={project.image}
                          alt={project.title}
                          fluid
                          rounded
                          className="project-image"
                          style={{ height: '300px', objectFit: 'cover', width: '300px' }}
                        />
                      </div>
                      <h4 className="mt-3 mb-0 text-primary">{project.title}</h4>
                    </div>
                  </Col>
                ))}
              </Row>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>

      {/* The Modal Component */}
      <Modal show={showModal} onHide={handleClose} centered size='xl'>
        <Modal.Header closeButton>
          <Modal.Title>{selectedProject?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Display project image in the modal */}
          <div className="text-center mb-3">
            <Image
              src={selectedProject?.image}
              alt={selectedProject?.title}
              fluid
              rounded
              style={{ maxHeight: '400px', objectFit: 'contain' }}
            />
          </div>
          {/* Display project description */}
          <div className='px-3'>{selectedProject?.description}</div>
        </Modal.Body>
        <Modal.Footer>
          {/* Add a button to close the modal */}
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Custom CSS for project cards and images */}
      <style jsx>{`
        .project-card {
          transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
          cursor: pointer;
          border: 1px solid #eee;
        }
        .project-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        }
        .project-image {
          border: 1px solid #ddd;
        }
        .carousel-control-prev-icon,
        .carousel-control-next-icon {
          background-size: 50%; /* Adjust icon size */
        }
        .carousel-control-prev,
        .carousel-control-next {
          width: 5%; /* Make controls narrower */
        }
        .modal-body a {
          word-break: break-all;
        }
        .modal.show .modal-dialog {
    display: flex;
    justify-content: center; /* This handles horizontal alignment */
    min-height: calc(100% - 1rem); /* Use min-height to allow content to grow */
  }
      `}</style>
    </section>
  );
};

export default ImageGrid;
