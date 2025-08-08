// import React from "react";
// import "./ImageGrid.css"; // External CSS file

// const ImageGrid = () => {
//   // Array of image data
//   const images = [
//     { src: "/heyitsnat/profile.png", alt: "Image 1", info: "Information about Image 1", link: "heyitsnat/about" },
//     { src: "/heyitsnat/profile.png", alt: "Image 2", info: "Information about Image 2", link: "https://example.com/info2" },
//     { src: "/heyitsnat/profile.png", alt: "Image 3", info: "Information about Image 3", link: "https://example.com/info3" },
//     { src: "/heyitsnat/gaa.png", alt: "Geospatial Analytics and Applications", info: "This project is about...", link: "https://carexplorer.netlify.app/" },
//     { src: "/heyitsnat/profile.png", alt: "Image 5", info: "Information about Image 5", link: "https://example.com/info5" },
//     { src: "/heyitsnat/profile.png", alt: "Image 6", info: "Information about Image 6", link: "https://example.com/info6" },
//     { src: "/heyitsnat/profile.png", alt: "Image 7", info: "Information about Image 5", link: "https://example.com/info5" },
//     { src: "/heyitsnat/profile.png", alt: "Image 8", info: "Information about Image 6", link: "https://example.com/info6" },
//   ];
  
//     return (
//       <div className="image-grid">
//         {images.map((image, index) => (
//           <a key={index} href={image.link} className="image-container">
//             <div className="image-wrapper"> {/* New wrapper element */}
//               <img src={image.src} alt={image.info} />
//               <div className="overlay">
//                 <h3>{image.alt}</h3> {/* Header element */}
//                 <p>{image.info}</p> {/* Info text element */}
//               </div>
//             </div>
//           </a>
//         ))}
//       </div>
//     );
//   };
  

// export default ImageGrid;

import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

// Define your project data here
const projects = [
  {
    id: 1,
    title: 'The Green Tree',
    image: '/heyitsnat/greentree.png',
    link: 'greentree', // Replace with your actual project URL
  },
  {
    id: 2,
    title: 'CAREXPLORER',
    image: '/heyitsnat/gaa.png',
    link: 'carexplorer',
  },
  {
    id: 3,
    title: 'AI Document Assistant',
    image: 'https://placehold.co/400x300/c0c0c0/333333?text=AI+Doc+Assistant',
    url: 'https://example.com/project3',
  },
  {
    id: 4,
    title: 'Personal Blog Site',
    image: 'https://placehold.co/400x300/b0b0b0/333333?text=Blog+Site',
    url: 'https://example.com/project4',
  },
  {
    id: 5,
    title: 'Task Management App',
    image: 'https://placehold.co/400x300/a0a0a0/333333?text=Task+App',
    url: 'https://example.com/project5',
  },
  {
    id: 6,
    title: 'Recipe Finder Web App',
    image: 'https://placehold.co/400x300/909090/333333?text=Recipe+App',
    url: 'https://example.com/project6',
  },
  {
    id: 7,
    title: 'Online Portfolio',
    image: 'https://placehold.co/400x300/808080/333333?text=Portfolio',
    url: 'https://example.com/project7',
  },
  {
    id: 8,
    title: 'Weather Forecast App',
    image: 'https://placehold.co/400x300/707070/333333?text=Weather+App',
    url: 'https://example.com/project8',
  },
];

const ImageGrid = () => {
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
          // Customizing carousel control icons for better visibility
          prevIcon={<span aria-hidden="true" className="carousel-control-prev-icon bg-dark rounded-circle p-3 d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }} />}
          nextIcon={<span aria-hidden="true" className="carousel-control-next-icon bg-dark rounded-circle p-3 d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }} />}
        >
          {projectChunks.map((chunk, index) => (
            <Carousel.Item key={index}>
              <Row className="justify-content-center">
                {chunk.map(project => (
                  <Col key={project.id} xs={12} md={6} lg={4} className="mb-4 d-flex justify-content-center">
                    <div className="text-center project-card p-3 rounded shadow-sm bg-white">
                      <a target="_blank" rel="noopener noreferrer" className="d-block">
                        <Link to={project.link}>
                        <Image
                          src={project.image}
                          alt={project.title}
                          fluid
                          rounded
                          className="project-image"
                          style={{ height: '300px', objectFit: 'cover', width: '300px' }}
                        />
                        </Link>
                      </a>
                      <h4 className="mt-3 mb-0 text-primary">{project.title}</h4>
                    </div>
                  </Col>
                ))}
              </Row>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
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
      `}</style>
    </section>
  );
};

export default ImageGrid;
