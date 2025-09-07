import React from "react";
import "./ExperienceGrid.css";
import { Link } from "react-router-dom";
const experiences = [
  {
    title: "Ballet Assistant Teacher",
    company: "Ms Blue Ballet",
    period: "Dec 2018 - Dec 2024",
    link: "ballet-details",
  },
  {
    title: "AI Engineer Intern",
    company: "HTX",
    period: "May 2024 - Oct 2024",
    link: "htx-details",
  },
  {
    title: "Operations Associate",
    company: "SMU Patron's Day 2024",
    period: "Oct 2023-Feb 2024",
    link: "ops-details",
  },
  {
    title: "Director of Marketing",
    company: "SMU Symphonia",
    period: "Jan 2023-Dec 2023",
    link: "marketing-details",
  },
  {
    title: "Data Science & AI Intern",
    company: "GovTech",
    period: "Apr 2021 - Jun 2022",
    link: "govtech-details",
  },
  // Add more experience objects as needed
];

const ExperienceGrid = () => {
  return (
    <div className="grid-container">
      {experiences.map((exp, idx) => (
        <div className="card" key={idx}>
          <h4>{exp.title}</h4>
          <h5>{exp.company}</h5>
          <p>{exp.period}</p>
          <Link to={exp.link}>Find out more here</Link>
          </div>
      ))}
    </div>
  );
};

export default ExperienceGrid;