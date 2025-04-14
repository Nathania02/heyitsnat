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
        Problem Statement: In the rapidly evolving landscape of technology, machine learning (ML) stands at the forefront of innovation. 
          As we step into 2024, the potential for ML to revolutionize industries is immense. 
          This hackathon aims to explore and create new opportunities that leverage the power of ML infrastructure to solve complex problems, enhance efficiency, and drive growth.
          <br/>
          <br/>
          Our team had created "Labella", a platform designed to streamline ML data labelling. Inspired by the inefficiencies of traditional labelling
          practices, Labella leverages active learning to minimize cost and time by focusin gon the most informative data points. This platform
          supports various ML projects, including image classification and sentiment analysis, allowing users to upload custom datasets or select existing ones. 
          Labella enables users to train models, identify crucial data points for labelling and iteratively improve model accuracy. 
          Our team tackled challenges such as adaptive active learning for diverse projects, selecting optimal algorithms, handling large datasets, 
          and creating an intuitive UI, ultimately delivering a user friendly and scalable solution. 
          <br/>
          <br/>
          Github Link: https://github.com/oliviaow2022/techjam        </div>
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
