import React from "react";
import "./ImageGrid.css"; // External CSS file

const ImageGrid = () => {
  // Array of image data
  const images = [
    { src: "/heyitsnat/profile.png", alt: "Image 1", info: "Information about Image 1", link: "heyitsnat/about" },
    { src: "/heyitsnat/profile.png", alt: "Image 2", info: "Information about Image 2", link: "https://example.com/info2" },
    { src: "/heyitsnat/profile.png", alt: "Image 3", info: "Information about Image 3", link: "https://example.com/info3" },
    { src: "/heyitsnat/gaa.png", alt: "Geospatial Analytics and Applications", info: "This project is about...", link: "https://carexplorer.netlify.app/" },
    { src: "/heyitsnat/profile.png", alt: "Image 5", info: "Information about Image 5", link: "https://example.com/info5" },
    { src: "/heyitsnat/profile.png", alt: "Image 6", info: "Information about Image 6", link: "https://example.com/info6" },
    { src: "/heyitsnat/profile.png", alt: "Image 7", info: "Information about Image 5", link: "https://example.com/info5" },
    { src: "/heyitsnat/profile.png", alt: "Image 8", info: "Information about Image 6", link: "https://example.com/info6" },
  ];
  
    return (
      <div className="image-grid">
        {images.map((image, index) => (
          <a key={index} href={image.link} className="image-container">
            <div className="image-wrapper"> {/* New wrapper element */}
              <img src={image.src} alt={image.info} />
              <div className="overlay">
                <h3>{image.alt}</h3> {/* Header element */}
                <p>{image.info}</p> {/* Info text element */}
              </div>
            </div>
          </a>
        ))}
      </div>
    );
  };
  

export default ImageGrid;
