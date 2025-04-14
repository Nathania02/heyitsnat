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
    company: "HTX - Home Team Science and Technology Agency",
    period: "May 2024 - Oct 2024",
    link: "htx-details",
  },
  {
    title: "Operations Associate, Patron's Day 2024",
    company: "SMU",
    period: "Oct 2023-Feb 2024",
    link: "ops-details",
  },
  {
    title: "Marketing Director",
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
          <h2>{exp.title}</h2>
          <h3>{exp.company}</h3>
          <p>{exp.period}</p>
          <Link to={exp.link}>Find out more here</Link>
          </div>
      ))}
    </div>
  );
};

export default ExperienceGrid;
