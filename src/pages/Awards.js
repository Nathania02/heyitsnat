import React, { useState } from 'react';
import './Awards.css'; // Import the CSS file

const policyContent = {
  "Awards": {
    articles: [
      {
        title: "Royal Academy of Dance Level 4 Certificate in Vocational Graded Examination in Dance Advaced 2 (Ballet)",
        // description: "December 2022"
      },
        {
          title: "Accenture Project Prize",
          description: "I was awarded this prize as my Final Year Project in Temasek Polytechnic was the Top 3 in the cohort."
        },
        {
          title: "Certificate of Academic Achievement 2022",
          // description: "To support lower-income families and young couples, a new Rent-to-Own scheme will allow eligible Singaporeans to rent HDB flats for a period, with a portion of their rent contributing towards a future down payment for purchase."
        },
        {
          title: "Certificate of Academic Achievement 2021",
          // description: "All new HDB developments will adhere to stringent green building standards, incorporating sustainable materials, energy-efficient designs, and enhanced greenery to promote eco-friendly living and reduce carbon footprint."
        },
        {
          title: "ATCL Associate of Trinity College London Piano Recital Level 4 Diploma in Music Performance",
          // description: "December 2022"
        },
          {
            title: "Edusave Award, For Achievement, Good Leadership and Service (EAGLES)",
            // description: "I was awarded this prize as my Final Year Project in Temasek Polytechnic was the Top 3 in the cohort."
          },
          {
            title: "Education Merit Award 2016",
            // description: "To support lower-income families and young couples, a new Rent-to-Own scheme will allow eligible Singaporeans to rent HDB flats for a period, with a portion of their rent contributing towards a future down payment for purchase."
          },
          {
            title: "Edusave Certificate of Academic Achievement 2016",
            // description: "All new HDB developments will adhere to stringent green building standards, incorporating sustainable materials, energy-efficient designs, and enhanced greenery to promote eco-friendly living and reduce carbon footprint."
          },
          {
            title: "Education Merit Award 2015",
            // description: "December 2022"
          },
            {
              title: "Edusave Certificate of Academic Achievement 2015",
              // description: "I was awarded this prize as my Final Year Project in Temasek Polytechnic was the Top 3 in the cohort."
            }
          
      ]
    },
  "Certifications": {
    articles: [
      {
        title: "Google Project Managment",
        description: "Coursera, Aug 2023"
      },
      {
        title: "AI FOR INDUSTRY - Literacy in AI",
        description: "AI Singapore, Jan 2023, Credential ID: 65647645"
      },
      {
        title: "Google Data Analytics",
        description: "Coursera, Jun 2022"
      },
      {
        title: "Python for Data Science Essential Training Part 1 and 2",
        description: "LinkedIn, Nov 2021"
      },
      {
        title: "SAS Certified Predictive Modeler Using SAS Enterprise Miner 14",
        description: "SAS, Mar 2021, Credential ID: 929X5TR22JB41M93"
      }
    ]
  },
  "Skills": {
    articles: [
      {
        title: "Languages & Frameworks",
        description: "Python, R, Javascript, SQL, Flask, HTML, CSS, MLflow, Figma, Slack API, GitHub, Docker, Node.js, Vue.js, Pytorch, Tensorflow, Playwright"
      },
      {
        title: "Visualisation and Database",
        description: "Tableau, QlikView, Power BI, MySQL, AWS S3"
      },
      {
        title: "Data-related",
        description: "Data Mining & Engineering, Data Analytics, Statistical and Predictive Modelling Techniques"
      }
    ]
  },
  "Hobbies": {
    articles: [
      {
        title: "Ballet, Piano and Jigsaw Puzzle",
        // description: "Python, R, Javascript, SQL, Flask, HTML, CSS, MLflow, Figma, Slack API, GitHub, Docker, Node.js, Vue.js, Pytorch, Tensorflow, Playwright"
      }
    ]
  }
};

const PolicyPage = () => {
  const [activeCategory, setActiveCategory] = useState("Awards");

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  const currentArticles = policyContent[activeCategory]?.articles || []; // Safely access articles

  return (
    <div className="policy-page">
      {/* <p className="policy-subheading">Concrete policy changes that advocates for a better Singapore.</p> */}

      <div className="policy-navigation">
        <div className="nav-arrows">
          {/* Left arrow - for potential future carousel if categories expand */}
          <span className="arrow-icon">&lt;</span>
        </div>
        <div className="nav-categories">
          {Object.keys(policyContent).map((category) => (
            <div
              key={category}
              className={`nav-item ${activeCategory === category ? 'active' : ''}`}
              onClick={() => handleCategoryClick(category)}
            >
              {category === "Awards"}
              {category === "Skills"}
              {category === "Certifications"}
              {category === "Hobbies"}
              {category}
            </div>
          ))}
        </div>
        <div className="nav-arrows">
          {/* Right arrow */}
          <span className="arrow-icon">&gt;</span>
        </div>
      </div>

      <div className="policy-content-section">
        {currentArticles.length > 0 ? (
          currentArticles.map((article, index) => (
            <div key={index} className="policy-article"> {/* Add a class for individual articles */}
              <h2 className="article-title">{article.title}</h2>
              <p className="article-description">{article.description}</p>
            </div>
          ))
        ) : (
          <p>No policies available for this category yet.</p>
        )}
      </div>
    </div>
  );
};

export default PolicyPage;