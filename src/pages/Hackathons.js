// Hackathons.js
import React from "react";
import "./Hackathons.css";

const Hackathons = () => {
  return (
    <div className="hackathons">
      <h1>Hackathons</h1>
      <div className="hackathon-item">
        <div className="hackathon-title">
          TikTok TechJam <br />
          (Finalists)
        </div>
        <div className="hackathon-description">
          A quarterly investigation into the psychology of fashion, with an even
          split between academic and cultural inquiry. Our latest issue covers
          the new generation of avant-garde luxury brands emerging from South
          Korea.
        </div>
      </div>
      <div className="hackathon-item">
        <div className="hackathon-title">
          National AI Singapore <br />
          Challenge
        </div>
        <div className="hackathon-description">
          A quarterly investigation into the psychology of fashion, with an even
          split between academic and cultural inquiry. Our latest issue covers
          the new generation of avant-garde luxury brands emerging from South
          Korea.
        </div>
      </div>
    </div>
  );
};

export default Hackathons;
